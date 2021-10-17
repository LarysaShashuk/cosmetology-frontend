import React from 'react';
import { Link } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

import styles from './Header.module.scss';

export default function Header() {
  return (
    <Box className={styles.container}>
      <AppBar position="static" className={styles.innerWrap}>
        <Toolbar className={styles.buttonContainer}>
        <div className={styles.navigation}>
          <Link to="/">
            <Button  color="inherit">
              Блог
            </Button>
          </Link>
        </div>
        
        <div className={styles.actions}>
        <Link to="/login">
            <Button color="inherit">Вхід</Button>
          </Link>

          <Link to="/registration">
            <Button color="inherit">Реєстрація</Button>
          </Link>
        </div>

          
        </Toolbar>
      </AppBar>
    </Box>
  );
}
