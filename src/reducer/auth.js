import {
  LOGIN_SUCCESS,
  SIGNUP_SUCCESS,
  LOGIN_FAILED,
  SIGNUP_FAILED,
} from "../constants/actionTypes";
import { AUTH_INITIAL_STATE } from "../constants/initialState";

export default function auth(state = AUTH_INITIAL_STATE, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        loginData: action?.data?.data,
      };
  }
}
