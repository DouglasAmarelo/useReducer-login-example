import React from 'react';

const Form = ({
  error,
  username,
  password,
  isLoading,
  handleSubmit,
  handleUserNameChange,
  handlePasswordChange
}) => (
  <form className="form" onSubmit={handleSubmit}>
    {error && <p className="error">{error}</p>}
    <p>Please Login!</p>
    <input
      type="text"
      placeholder="username"
      value={username}
      onChange={handleUserNameChange}
    />
    <input
      type="password"
      placeholder="password"
      autoComplete="new-password"
      value={password}
      onChange={handlePasswordChange}
    />
    <button className="submit" type="submit" disabled={isLoading}>
      {isLoading ? 'Logging in...' : 'Log In'}
    </button>
  </form>
);

export default Form;
