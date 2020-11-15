import React, { useReducer } from 'react';
import { login } from './utils/Login';

import { LoginReducer, LoginInitialState } from './reducers/Login';

import Logged from './components/Logged';
import Form from './components/Form';

import './styles.css';

export default function App() {
  const [state, dispatch] = useReducer(LoginReducer, LoginInitialState);
  const { username, password, isLoading, error, isLoggedIn } = state;

  const onSubmit = async (e) => {
    e.preventDefault();

    dispatch({ type: 'login' });

    try {
      await login({ username, password });
      dispatch({ type: 'success' });
    } catch (error) {
      dispatch({ type: 'error' });
    }
  };

  const onInputChange = (e, field) => {
    dispatch({
      type: 'field',
      field,
      value: e.target.value
    });
  };

  return (
    <div className="App">
      <div className="login-container">
        {isLoggedIn ? (
          <Logged
            username={username}
            handleClick={() => dispatch({ type: 'logout' })}
          />
        ) : (
          <Form
            error={error}
            username={username}
            password={password}
            isLoading={isLoading}
            handleSubmit={onSubmit}
            handleUserNameChange={(e) => onInputChange(e, 'username')}
            handlePasswordChange={(e) => onInputChange(e, 'password')}
          />
        )}
      </div>
    </div>
  );
}
