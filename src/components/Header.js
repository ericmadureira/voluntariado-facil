// External
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}));

const Header = ({ title }) => {
  const classes = useStyles();

  return (
    <header>
      <AppBar position='static'>
        <Toolbar  className={classes.toolbar}>
          <IconButton edge='start' color='inherit' aria-label='menu'>
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' >
            <Link to='/'>
              {title}
            </Link>
          </Typography>
          <Button color='inherit'>
            <Link to='/login'>
              Login
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </header>
  )
};

export default Header;
