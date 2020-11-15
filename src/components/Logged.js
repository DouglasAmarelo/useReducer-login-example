import React from 'react';

const Logged = ({ username, handleClick }) => (
  <>
    <h1>Hello {username}, welcome!</h1>
    <button onClick={handleClick}>Log Out</button>
  </>
);

export default Logged;
