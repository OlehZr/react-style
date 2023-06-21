import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styleModule/style.module.css'

const LogIn = () => {
    return (
        <div className={styles.login_block}>
        <Link to='/signIn'className={styles.link_log}>LOG IN</Link>
        <Link to='/signUp'className={styles.link_log}>REGISTER</Link>
        </div>
    );
};

export default LogIn;