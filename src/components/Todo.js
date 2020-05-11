import React from "react";
import { createStore } from "redux";
import { Provider, connect } from "react-redux";
import { combineReducers } from "redux";

const ADD_TODO = "ADD_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";
const SHOW_ALL = "SHOW_ALL";
const SHOW_ACTIVE = "SHOW_ACTIVE";
const SHOW_COMPLETED = "SHOW_COMPLETED";
const DELETE_TODO = "DELETE_TODO";

//action creator
const addTodo = value => {
  return {
    type: ADD_TODO,
    text: value,
    isCheck: false,
    Id: nextTodoId++,
    isVisible: true
  };
};

const toggleTodo = id => {
  return {
    type: TOGGLE_TODO,
    Id: id
  };
};

const showAll = () => {
  return {
    type: SHOW_ALL
  };
};

const showActive = () => {
  return {
    type: SHOW_ACTIVE
  };
};

const showCompleted = () => {
  return {
    type: SHOW_COMPLETED
  };
};

const deleteTodo = id => {
  return {
    type: DELETE_TODO,
    Id: id
  };
};

//reducer
const todoreducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      const allTodos = [
        ...state,
        {
          text: action.text,
          isCheck: action.isCheck,
          Id: action.Id,
          isVisible: action.isVisible
        }
      ];
      const filterVisible = allTodos.map(item => {
        return { ...item, isVisible: true };
      });
      return filterVisible;
    case TOGGLE_TODO:
      return state.map(item => {
        return item.Id === action.Id
          ? { ...item, isCheck: !item.isCheck }
          : item;
      });
    case SHOW_ACTIVE:
      const active = state.map(item => {
        return item.isCheck
          ? { ...item, isVisible: false }
          : { ...item, isVisible: true };
      });
      return active;
    case SHOW_COMPLETED:
      const completedTodos = state.map(item => {
        return !item.isCheck
          ? { ...item, isVisible: false }
          : { ...item, isVisible: true };
      });
      return completedTodos;

    case SHOW_ALL:
      const allList = state.map(item => {
        return { ...item, isVisible: true };
      });
      return allList;

    case DELETE_TODO:
      return state.filter(item => item.Id !== action.Id);

    default:
      return state;
  }
};

const allReducers = combineReducers({ todoreducer });

//presentational components
let nextTodoId = 0;
class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  handleChange = e => {
    const value = e.target.value;
    this.setState({
      value
    });
  };

  handleKeyUp = (value, e) => {
    if (e.key === "Enter") {
      //this.state.value.trim() -> this is the current input value
      this.state.value.trim().length && this.props.dispatch(addTodo(value));

      this.setState({
        value: ""
      });
    }
  };

  handleSubmit = value => {
    this.state.value.trim().length && this.props.dispatch(addTodo(value));

    this.setState({
      value: ""
    });
  };

  handleClearIcon = () => {
    this.setState({
      value: ""
    });
  };

  handleCheckboxClick = id => {
    this.props.dispatch(toggleTodo(id));
  };

  showActive = () => {
    this.props.dispatch(showActive());
  };

  showCompleted = () => {
    this.props.dispatch(showCompleted());
  };

  showAll = () => {
    this.props.dispatch(showAll());
  };

  handleDeletClick = id => {
    this.props.dispatch(deleteTodo(id));
  };

  render() {
    const value = this.state.value;
    const todos = this.props.todos;
    const visibleElements = todos.filter(item => item.isVisible);
    return (
      <React.Fragment>
        <h1>Todo App</h1>
        <div className="todoApp">
          <div className="todoContainer">
            <div className="inputFields">
              <input
                className="inputs"
                type="text"
                value={value}
                onChange={this.handleChange}
                onKeyUp={this.handleKeyUp.bind(this, value)}
              />
              <span
                className={`input-clear-icon ${
                  value !== "" ? "clear-icon--show" : ""
                } `}
                onClick={this.handleClearIcon}
              >
                {" "}
                X
              </span>
            </div>
            <button
              className="btn"
              type="button"
              onClick={this.handleSubmit.bind(this, value)}
            >
              Submit
            </button>
          </div>
          {visibleElements.length > 0 && (
            <ul className="list">
              {todos.map((item, index) => {
                return (
                  item.isVisible && (
                    <li className="listItem" key={item.Id}>
                      <label
                        className={`list-label ${
                          item.isCheck ? "line-through" : ""
                        }`}
                      >
                        <input
                          defaultChecked={item.isCheck}
                          type="checkbox"
                          onClick={this.handleCheckboxClick.bind(this, item.Id)}
                        />
                        {item.text}
                      </label>
                      <span
                        className="delete-btn"
                        role="button"
                        onClick={this.handleDeletClick.bind(this, item.Id)}
                      >
                        Delete
                      </span>
                    </li>
                  )
                );
              })}
            </ul>
          )}
          {todos.length === 0 ? (
            <p>Add a TODO List</p>
          ) : visibleElements.length === 0 ? (
            <p>This Filter is empty</p>
          ) : (
            ""
          )}

          <div className="filterContainer">
            Show:
            <input
              type="radio"
              name="filter"
              id="allFilter"
              className="filter-input"
              onClick={this.showAll}
              disabled={todos.length === 0}
            />
            <label htmlFor="allFilter" className="filterLabel">
              All
            </label>
            <input
              type="radio"
              name="filter"
              id="activeFilter"
              className="filter-input"
              onClick={this.showActive}
              disabled={todos.length === 0}
            />
            <label htmlFor="activeFilter" className="filterLabel">
              Active
            </label>
            <input
              type="radio"
              name="filter"
              id="completedFilter"
              className="filter-input"
              onClick={this.showCompleted}
              disabled={todos.length === 0}
            />
            <label htmlFor="completedFilter" className="filterLabel">
              Completed
            </label>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todoreducer
  };
};

const TodoApp = connect(mapStateToProps)(Todo);
const store = createStore(allReducers);

const Display = () => {
  return (
    <Provider store={store}>
      <TodoApp />
    </Provider>
  );
};

export default Display;
