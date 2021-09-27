import React from "react";
import {Link} from 'react-router-dom';

import {ErrorPageProps} from '../../../types/types';
import styles from './ErrorPage.module.scss';

const ErrorPage: React.FC<ErrorPageProps> =(props) =>{
const {statusCode, errorMessage} = props;

return <div className={styles.errorPageWrap}>
    <h2>{statusCode}</h2>
    <p>{errorMessage}</p>
    <Link to="/">Back to home</Link>
</div>
}

export default ErrorPage;