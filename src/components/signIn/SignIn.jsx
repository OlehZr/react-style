import React from 'react';
import styles from '../styleModule/style.module.css';
import { Link } from 'react-router-dom';
import iconLogo from './lock.png';

const SignIn = () => {
    return (
        <div className={styles.sign_in_block}>
            <img  className={styles.icon} src={iconLogo} alt='Logo'/>
            <h1 className={styles.main_title}>Sign In</h1>
            <div className={styles.form_input}> 
                <input className={styles.my_input} type="email" placeholder='Email*'/>
                <input className={styles.my_input} type="email" placeholder='Password*' />
                <label className={styles.check_form}>
                    <input type="checkbox" />
                        Remember me?
                </label>
                <button className={styles.btn_sign}>SIGN IN</button>
                <Link to='/signUp'className={styles.link_next}>Don`t have an acccount? Sign up!</Link>
            </div>
            <p className={styles.title}>Copyright @ Your Website 2023</p>
        </div>
    );
};

export default SignIn;