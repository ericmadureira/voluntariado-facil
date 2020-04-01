// External
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({});

const Login = () => {
  const classes = useStyles();

  return (
    <main>
      <h1>Login</h1>
      <p>
        <span>Username: </span>
        <input type='text' placeholder='username' />
      </p>
      <p>
        <span>Password: </span>
        <input type='password' />
      </p>
    </main>
  )
};

export default Login;
