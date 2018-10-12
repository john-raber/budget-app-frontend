import { SET_USER } from "./types";

const USERS_URL = "http://localhost:3001/api/v1/users";
const LOGIN_URL = "http://localhost:3001/api/v1/login";
const PROFILE_URL = "http://localhost:3001/api/v1/profile";

function setUser(user) {
  return {
    type: SET_USER,
    user
  };
}

function setUserFromToken() {
  return dispatch => {
    let token = localStorage.getItem("token");

    if (!token || token === "") {
      return;
    }

    fetch(PROFILE_URL, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(r => r.json())
      .then(json => dispatch(setUser(json.user)));
  };
}

function loginUser({ user }) {
  return dispatch => {
    fetch(LOGIN_URL, {
      method: "POST",
      body: JSON.stringify({ user }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
      .then(r => r.json())
      .then(json => {
        localStorage.setItem("token", json.token);
        dispatch(setUser(json.user));
      });
  };
}

function logoutUser() {
  return dispatch => {
    localStorage.clear();
    dispatch(setUser(null));
  };
}

function createUser({ user }) {
  return dispatch => {
    fetch(USERS_URL, {
      method: "POST",
      body: JSON.stringify({ user }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
      .then(r => r.json())
      .then(json => {
        localStorage.setItem("token", json.token);
        dispatch(setUser(json.user));
      });
  };
}

export { createUser, loginUser, logoutUser, setUser, setUserFromToken };
