import {LOGIN, AUTHENTICATION_RESULT, AUTHENTICATION_ERROR, CHANGE_EMAIL_VALUE, CHANGE_PASSWORD_VALUE} from '../actions/authentication'
const initialState = {
  // user: {
  //   email: '',
  //   password: '',
  //   error: null,
  // }
    email: '',
    password: '',
    error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN: 
      return {
        ...state,
        email: state.email,
        password: state.password
      }
    case CHANGE_EMAIL_VALUE:    
      return {...state, email: action.email };
    case CHANGE_PASSWORD_VALUE:    
      return {...state, password: action.password };
    case AUTHENTICATION_RESULT:
      console.log("Result", action.result.data)
      return {...state, email: action.result.data.user.email, password: action.result.data.user.password };
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