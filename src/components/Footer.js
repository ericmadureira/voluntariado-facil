// External
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles();

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
