import React from 'react';
import styles from '../styleModule/style.module.css'
import { useNavigate } from 'react-router-dom';
import iconLogo from './lock.png';

const SignUp = () => {
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1)
    }
    return (
        <div className={styles.sign_up_block}>
            <img  className={styles.icon} src={iconLogo} alt='Logo'/>
            <h1 className={styles.main_title}>Sign Up</h1>
            <div className={styles.form_input}> 
                <div className={styles.name_form}>
                <input className={styles.input_name} type="name" placeholder='First name*'/>
                <input className={styles.input_name} type="name" placeholder='Last name*'/>
                </div>
                <input className={styles.my_input} type="email" placeholder='Email*'/>
                <input className={styles.my_input} type="email" placeholder='Password*'/>
                <label className={styles.check_form}>
                    <input type="checkbox" />
                        I want to receive inspiration, marketing promotions <br/>
                        and updates via email.
                </label>
            </div>
            <div className={styles.form_btn}> 
            <button className={styles.btn_sign}>SIGN UP</button>
            <button className={styles.btn_back} onClick={goBack}>Already have an account? Sign in!</button>
            </div>
            <p className={styles.title}>Copyright @ Your Website 2023</p>
        </div>
    );
};

export default SignUp;