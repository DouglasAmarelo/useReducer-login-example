const initialState = {
  username: '',
  password: '',
  isLoading: false,
  error: '',
  isLoggedIn: false
};

const Login = (state, action) => {
  switch (action.type) {
    case 'field': {
      return {
        ...state,
        [action.field]: action.value
      };
    }
    case 'login': {
      return {
        ...state,
        isLoading: 'true',
        error: ''
      };
    }
    case 'success': {
      return {
        ...state,
        isLoggedIn: true
      };
    }
    case 'error': {
      return {
        ...state,
        error: 'Incorrect username or password',
        isLoading: false,
        username: '',
        password: ''
      };
    }
    case 'logout': {
      return {
        ...state,
        isLoading: false,
        isLoggedIn: false,
        username: '',
        password: ''
      };
    }
    default:
      break;
  }

  return state;
};

export { Login as LoginReducer, initialState as LoginInitialState };
