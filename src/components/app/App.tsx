import { BrowserRouter as Router, Route } from 'react-router-dom';

import Blog from '../pages/blogPage/BlogPage';
import ArticlePage from '../pages/atriclePage/ArticlePage';
import RegistrationPage from '../pages/registrationPage/RegistrationPage';
import AuthorizationPage from '../pages/authorizationPage/AuthorizationPage';
import Header from '../common/header/Header';
import styles from './App.module.scss';

function App() {
  return (
    <Router>
      <div className={styles.App}>
      <Header/>
        <Route path='/' exact component={Blog} />
        <Route path='/blog/:id' component={ArticlePage} />
        <Route path='/registration' component={RegistrationPage} />
         <Route path='/authorization' component={AuthorizationPage} />
      </div>
    </Router>
  );
}

export default App;
