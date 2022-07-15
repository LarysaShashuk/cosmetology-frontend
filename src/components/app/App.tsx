import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { checkAuthInitiate } from '../../redux/actions/authActions';
import { RootState } from '../../types/types';
import Spinner from '../common/spinner/Spinner';
import Blog from '../pages/blogPage/BlogPage';
import ArticlePage from '../pages/atriclePage/ArticlePage';
import RegistrationPage from '../pages/registrationPage/RegistrationPage';
import LoginPage from '../pages/loginPage/LoginPage';
import UserPage from '../pages/userPage/UserPage';
import Header from '../common/header/Header';
import styles from './App.module.scss';



function App() {
  let dispatch = useDispatch();

  const { loading, user, userData } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch(checkAuthInitiate());
    }
  }, []);

  return (
   
      <Router>
        {loading ? (
          <Spinner />
        ) : (
          <div className={styles.App}>
            <Header />
            <Route path="/blog/:id" component={ArticlePage} />
            <Route path="/registration" component={RegistrationPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/" exact component={UserPage} />
            <Route exact path="/blog">
              {user && userData?.role === 'ADMIN' ? (
                <Blog />
              ) : userData?.role !== 'ADMIN' ? (
                <Redirect to="/login" />
              ) : (
                <Redirect to="/" />
              )}
            </Route>
          </div>
        )}
      </Router>
     
  );
}

export default App;
