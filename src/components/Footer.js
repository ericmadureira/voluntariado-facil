// External
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}));

const Header = ({ title }) => {
  const classes = useStyles();

  return (
    <footer className='links'>
    <a
      href='https://github.com/ericmadureira/voluntariado-facil'
      rel='noopener noreferrer'
      target='_blank'
    >
      Project source
    </a>
  </footer>
  )
};

export default Header;
