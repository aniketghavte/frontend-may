import { useState } from "react";
import styles from "./Navbar.module.scss";
import Link from "next/link";
import Image from "next/image";
import {AiOutlineCloseCircle} from 'react-icons/ai'
import { useSession, signIn, signOut } from "next-auth/react";
import wallet from '../../Images/wallet-black.svg'

const Navbar = () => {

  const [isPopupOpened, setIsPopupOpened] = useState(false);
  const { data: session } = useSession()
  console.log("session", session);
  console.log(session?.token?.name)

  const handleSubmitLogin = async () => {
    signIn("google")

  }
  const LoginPopup = () => {
    return (
      <div className={styles.app__login_popup}>
          <div className={styles.popup_model}>
               <div className={styles.popup_close} onClick={() => setIsPopupOpened(false)}>
                <AiOutlineCloseCircle style={{height : "100%", width: "100%"}}/>
               </div>
              <div className={styles.login_block1}>
                  <h3>Let&apos;s Start By</h3>
                  <h1>Login/Sign up</h1>
                  <p>Login/Sign up with either email or wallet to start your Web3 journey with Truts and earn some XPs!</p>
              </div>
              <div className={styles.login_block2}>
                  <div className={styles.loign_container1}>
                      <div className={styles.login_profile} >
                          <Image alt="img" src="https://upload.wikimedia.org/wikipedia/commons/archive/5/53/20161128230037%21Google_%22G%22_Logo.svg" width={0} height={0}/>
                      </div>
                      <p>You can use your Google account to signup/log in</p>
                      <div style={{display: "flex", alignItems: "center", justifyContent: "center", gap: "1rem", border: "1px solid #141414", padding: "0 1rem", borderRadius: "10px", cursor: "pointer"}} onClick={handleSubmitLogin}>
                        <Image alt="img"  src="https://upload.wikimedia.org/wikipedia/commons/archive/5/53/20161128230037%21Google_%22G%22_Logo.svg" width={0} height={0} style={{height: "30px", width: "30px"}}/>
                        <p>Sign In With Google</p>
                      </div>
                  </div>
                  <div className={styles.loign_container}>
                      <div className={styles.login_profile}>
                          <Image alt="img"  src={wallet} width={0} height={0}/>
                      </div>
                      <p>Connect with the Web3 Wallet</p>
                      <div style={{display: "flex", alignItems: "center", justifyContent: "center", gap: "1rem", border: "1px solid #141414", padding: "0 1rem", borderRadius: "10px", background: "linear-gradient(90deg,#5e1ed1,#3065f3)", color: "white"}}>
                        <p>Comming Soon</p>
                      </div>
                  </div>

              </div>
          </div>
      </div>
    )
  }

  const handleJoinClick = () => {

    setIsPopupOpened(true);
  }
  return (
    <>
        {
         isPopupOpened && <LoginPopup state={isPopupOpened}/>
       }
            <nav className={styles.Navbar}>
          <div className={styles.Logo}>
            <Link href={`/`}>ActualOne
            <br />
            Protocol
            </Link>
            
          </div>
          <div className={styles.nav_tags}>
            <Link href={`/`}><h4>About</h4></Link>
            <Link href={`/`}><h4>Contact Us</h4></Link>
          </div>

          {/* <div className={styles.NavLinks}>a</div> */}

          <div className={styles.NavButtons}>
            {
              session ? <Link href={`/waitlist`}>
                <button className={styles.JoinedButton}>Hey, {session?.token?.name}</button>
              </Link> : <>
                <button className={styles.JoinButton} onClick={handleJoinClick}>Join</button>
              </>
            }
            
          </div>
        </nav>
     
    </> );

};

export default Navbar;
