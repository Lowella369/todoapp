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