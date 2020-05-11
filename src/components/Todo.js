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
