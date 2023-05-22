import React from 'react'
import styles from './LoginPopup.module.scss'
import close from '../../Images/close.svg'

const LoginPopup = () => {
  return (
    <div className={styles.app__login_popup}>
        <div className={styles.popup_model}>
            <img alt='close' src={close} className={styles.popup_close}/>
                PopUp
        </div>
    </div>
  )
}

export default LoginPopup