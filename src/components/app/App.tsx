import { BrowserRouter as Router, Route } from 'react-router-dom';

import Blog from '../blog/Blog';
import ArticlePage from '../atriclePage/ArticlePage';

import styles from './App.module.scss';

function App() {
  return (
    <Router>
      <div className={styles.App}>
        <Route path='/' exact component={Blog} />

        <Route path='/blog/:id' component={ArticlePage} />
      </div>
    </Router>
  );
}

export default App;
