import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

import { logoutInitiate } from '../../../redux/actions/authActions';
import { RootState } from '../../../types/types';
import LogoutButton from './LogoutButton';
import styles from './Header.module.scss';

export default function Header() {
  let history = useHistory();
  let dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutInitiate());
    history.push('/');
    return;
  };

  const { user } = useSelector((state: RootState) => state.auth);
  useEffect(() => {
    if (user) {
      history.push('/login');
    }
  }, [history, user]);

  return (
    <Box className={styles.container}>
      <AppBar position="static" className={styles.innerWrap}>
        <Toolbar className={styles.buttonContainer}>
          <div className={styles.navigation}>
            <Link to="/">
              <Button color="inherit">Головна</Button>
            </Link>
          </div>

          <div className={styles.actions}>
            {user ? (
              <>
                <Link to="/blog">
                  <Button color="inherit">Блог</Button>
                </Link>
                <LogoutButton handleLogout={handleLogout} />
              </>
            ) : (
              <>
                <Link to="/login">
                  <Button color="inherit">Вхід</Button>
                </Link>
                <Link to="/registration">
                  <Button color="inherit">Реєстрація</Button>
                </Link>
              </>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
