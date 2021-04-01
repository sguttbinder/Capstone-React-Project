/*
By default, there should be no session user in the session slice of state.

Create two POJO action creators. One that will set the session user in the session slice of state to the action creator's input parameter, and another that will remove the session user. Their types should be extracted as a constant and used by the action creator and the session reducer.

You need to call the API to login then set the session user from the response, so add a thunk action for the POST /api/session. Make sure to use the custom csrfFetch function from frontend/src/store/csrf.js. The POST /api/session route expects the request body to have a key of credential with an existing username or email and a key of password. After the response from the AJAX call comes back, parse the JSON body of the response, and dispatch the action for setting the session user to the user in the response's body.

Export the login thunk action, and export the reducer as the default export.

Import the reducer in session.js into the file with the root reducer, frontend/src/store/index.js.

Set a key of session in the rootReducer's combineReducer object argument to the session reducer.


*/

// If there is an error or if the previous or next state does not look like this, then check your logic in your session reducer and your actions.

import configureStore from '.';
import { csrfFetch, restoreCSRF } from './csrf';
import * as sessionActions from '../store/session';



const SET_USER = 'session/setUser';
const REMOVE_USER = 'session/removeUser';
const store = configureStore();

if (process.env.NODE_ENV !== 'production') {
  restoreCSRF();

  window.csrfFetch = csrfFetch;
  window.store = store;
  window.sessionActions = sessionActions;
}

const setUser = (user) => {
  return {
    type: SET_USER,
    payload: user,
  };
};

const removeUser = () => {
  return {
    type: REMOVE_USER,
  };
};

export const login = (user) => async (dispatch) => {
  const { credential, password } = user;
  const response = await csrfFetch('/api/session', {
    method: 'POST',
    body: JSON.stringify({
      credential,
      password,
    }),
  });
  const data = await response.json();
  dispatch(setUser(data.user));
  return response;
};

const initialState = { user: null };

const sessionReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case SET_USER:
      newState = Object.assign({}, state);
      newState.user = action.payload;
      return newState;
    case REMOVE_USER:
      newState = Object.assign({}, state);
      newState.user = null;
      return newState;
    default:
      return state;
  }
};

export default sessionReducer;

