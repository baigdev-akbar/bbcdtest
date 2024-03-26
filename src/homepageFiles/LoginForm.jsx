import React, { useState } from 'react';

const LoginForm = () => {
    const submit = () => {
        alert('Login Success')
    }


  return (
      <div className='formWrapper'>
          <h1>Please Log In</h1>
      <form action="/" className="formSection">
        <label>
          <p>Username</p>
          <input type="text" name="name" />
        </label>
        <label>
          <p>Password</p>
          <input type="password" name="password"/>
        </label>
        <div>
          <button type="submit" onClick={submit}>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
