import {LOGIN, AUTHENTICATION_RESULT, AUTHENTICATION_ERROR, CHANGE_EMAIL_VALUE, CHANGE_PASSWORD_VALUE} from '../actions/user'
import { AsyncStorage } from "react-native";

const initialState = {
    id: '',
    email: '',
    password: '',
    first_name: '',
    last_name: '',
    status: '',
    isAuthenticated: false,
    authToken: {
      access_token: '',
      token_type: '',
      expires_in: ''
    },
    error: null,
};

const setAuthToken = (state, action) => {
  let multi_set_pairs = [
    ["access_token", action.result.data.token.access_token],
    ["token_type", action.result.data.token.token_type],
    ["expires_in", action.result.data.token.expires_in]
  ];
  _storeData = async () => {
    try {
      debugger
      await AsyncStorage.setItem("accessToken", action.result.data.token.access_token );
      // await AsyncStorage.multiSet(multi_set_pairs);
    } catch (error) {
    }
  }
  
  return {
    ...state.authToken,
    access_token: action.result.data.token.access_token,
    token_type: action.result.data.token.token_type,
    expires_in: action.result.data.token.expires_in
  }

}
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN: 
      return {
        ...state,
        email: state.email,
        password: state.password
      }
    case CHANGE_EMAIL_VALUE:    
      // return {...state, email: action.email };
      return {...state, email: action.text };
    case CHANGE_PASSWORD_VALUE:
      return {...state, password: action.text };
    case AUTHENTICATION_RESULT:
      console.log("Result", action.result.data)
      return {
        ...state,
        id: action.result.data.user.id,
        first_name: action.result.data.user.first_name,
        last_name: action.result.data.user.last_name,
        email: action.result.data.user.email,
        password: action.result.data.user.password, 
        status: action.result.data.user.status, 
        isAuthenticated: true,
        authToken: setAuthToken(state, action)
      };
        // return {
        //   ...state,
        //   user: {
        //       ...state,
        //       [action.result.base]: {
        //           ...action.result,
        //       }
        //   }
      // }
    case AUTHENTICATION_ERROR:
      return {
          ...state,
          error: action.error,
      }
    default:
      return state;
  }
}

export default reducer;