import React, { useState } from 'react';
import styles from './input.module.scss';

const Input = () => {
    const [emailValue, setIsEmailValue] = useState('');
    const [activeBorder, setActiveBorder] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const handleCorrect = (e) => {
        setIsEmailValue(() => e.target.value);
        const re = new RegExp(/^[a-zA-Z0-9]([\w._-])([a-zA-Z0-9])+([\w._-])+@([a-zA-Z0-9]+\.)+[a-zA-Z0-9]{2,8}$/i);
        if (re.test(emailValue)) {
            setIsCorrect(true);
        } else {
            setIsCorrect(false);
        }
    }
    const handleView = () => {
        setIsVisible((state) => !state);
    }
    return (
        <div className={styles.input}>
            <div className={styles.emailForm}>
                <label htmlFor="email" className={styles.label}>E-mail</label>
                <input
                    type="email"
                    id="email"
                    className={styles.form}
                    placeholder="E-mail"
                    value={emailValue}
                    onChange={(e) => handleCorrect(e)}
                    onFocus={() => setActiveBorder(true)}
                    onBlur={() => setActiveBorder(false)}
                />
                {!isCorrect || emailValue === '' ?
                <button className={`${styles.checkBtn} ${styles.notOkay}`} />
                : 
                <button className={`${styles.checkBtn} ${styles.okay}`} />
                }
                {!isCorrect && !activeBorder && emailValue !== '' &&
                    <span className={styles.incorrect}>Invalid email address.</span>
                }
            </div>
            <div className={styles.passwordForm}>
                <label htmlFor="password" className={styles.label}>Password</label>
                {isVisible ?
                <>
                    <input
                        type="text"
                        id="password"
                        className={styles.form}
                        placeholder="Password"
                    />
                    <button
                        className={`${styles.viewBtn} ${styles.eye}`}
                        onClick={() => handleView()}
                    />
                    </>
                :
                    <>
                    <input
                        type="password"
                        id="password"
                        className={styles.form}
                        placeholder="Password"
                    />
                    <button
                        className={`${styles.viewBtn} ${styles.closedEye}`}
                        onClick={() => handleView()}
                    />
                </>}
            </div>
        </div>
    );
}

export default Input;