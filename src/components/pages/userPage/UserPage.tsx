import React from 'react';
import { useSelector } from 'react-redux';

import Spinner from '../../common/spinner/Spinner';
import { RootState } from '../../../types/types';
import styles from './UserPage.module.scss';

export default function UserPage() {
  const { user, userData, loading } = useSelector((state: RootState) => state.auth);
  return   <>
  {
  loading ? <Spinner/> : <div className={styles.container}>{user ? `Привіт, ${userData.email}!` : 'Зареєструйтесь, або увійдіть у наявний аккаунт!'}</div>
  } 
  </>;
}
