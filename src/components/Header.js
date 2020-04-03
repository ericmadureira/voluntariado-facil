// External
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  navLink: {
    padding: '0 10px',
    fontSize: '18px',
    fontWeight: 'bold',
  },
});

const Header = ({ title }) => {
  const classes = useStyles();

  return (
    <header>
      <AppBar position='static'>
        <Toolbar className={classes.toolbar}>

          <Typography variant='h6' >
            <Link to='/'>
              {title}
            </Link>
          </Typography>

          <div>
            <Link to='#about' className={classes.navLink}>
              About
            </Link>

            <Link to='#cta' className={classes.navLink}>
              Do the difference!
            </Link>

            <Link to='#contact' className={classes.navLink}>
              Contact
            </Link>

            <Link to='/login' className={classes.navLink}>
              Login
            </Link>

            <IconButton edge='start' color='inherit' aria-label='menu' className='menuButton'>
              <MenuIcon />
            </IconButton>
          </div>

        </Toolbar>
      </AppBar>
    </header>
  )
};

export default Header;
