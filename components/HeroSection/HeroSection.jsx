'use client';
import styles from "./HeroSection.module.scss";
import { useState } from "react";
import Image from "next/image";
import axios from "axios";
import close from '../../Images/close.svg';
import { useRouter } from "next/router";
import {AiOutlineCloseCircle} from 'react-icons/ai'
import { useSession, signIn, signOut } from "next-auth/react";
import wallet from '../../Images/wallet-black.svg'
import Link from "next/link";


import waitlist_pic from '../../public/waitlistpic.svg';
import line from '../../public/line.svg'
import getStarted from '../../public/getStarted.svg'
import joinWaitlistImage from '../../Images/claim_username.svg'
import finalImage from '../../public/finalImage.svg'


const HeroSection = () => {
  const [userName, setUserName] = useState("");
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)
  const router = useRouter();
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
                  <h3>Let's Start By</h3>
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
    // <div>
    //   {
    //     isPopupOpened && <LoginPopup state={isPopupOpened}/>
    //   }
    //   <div className={styles.col1}>
    //     <h1>Discover opportunities to collaborate</h1>
    //     <h2>
    //       Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati
    //       qui praesentium cumque porro unde quisquam fugit atque natus magni
    //       quidem. Voluptatem repellendus consectetur quisquam aperiam optio
    //       quidem accusantium. Architecto, fugiat.
    //     </h2>
    //     <div className={styles.JoinInput}>
    //       {
    //         session ? <>
    //           <div style={{minWidth: "10rem"}}>Hey, {session?.token?.name}</div>
    //         </> : <>
    //           <div>actualone.xyz/</div>
    //           <input type="text" placeholder="Username" value={userName} onChange={(e) => setUserName(e.target.value)} />
    //         </>
    //       }

    //       {
    //         session ? <>
    //             <button style={{width: "auto"}}><Link href={`/waitlist`} style={{textDecoration: "none", color: "white"}}>See WaitList</Link></button>
    //         </> : <>
    //             <button onClick={handleJoinClick}>Join</button>
    //         </>
    //       }

    //     </div>
    //   </div>
    //   <div className={styles.col2}>
    //     <div className={styles.HeroImage} style={{ position: "relative" }}>
    //       {/* <Image
    //         src={"/human.png"}
    //         alt="HeroSection Image"
    //         fill
    //         objectFit="contain"
    //       /> */}
    //     </div>
    //   </div>
    // </div>     
    <div style={{display: "flex", flexDirection: "column", alignItems: "center" , justifyContent: "center"}}>
        {
         isPopupOpened && <LoginPopup state={isPopupOpened}/>
       }
      <div className={styles.block2}>
            <div className={styles.headline}>
              Join The ActualOne Protocol's Waitlist
            </div>
            <div className={styles.mainHeadline}>
              <p style={{margin: "0"}}>Creating&nbsp; 
                <span style={{color: "#ac47ff"}}>
                opportunities&nbsp;
                </span> 
                  to build&nbsp;
                <span style={{color: "#ac47ff"}}> 
                Together
                </span>. 🚀</p>

            </div>
            <div className={styles.block3}>
                {
                  session ? <>
                  <div className={styles.waitlistDiv}>Hey, {session?.token?.name}</div>
                  <Link href={`/waitlist`} style={{textDecoration: "none", color: "white"}}><button>See WaitList</button></Link>
                  </> : <>
                  <div className={styles.waitlistDiv}v>
                   <div>actualone.xyz/</div>
                  </div>
   
                  <button onClick={handleJoinClick}>Join</button>
                  <Image src={joinWaitlistImage} alt="get Started " className={styles.joinWaitlistImage}/>

                  </>
                }
            </div>
            <Image src={finalImage} alt="get Started " className={styles.finalImage}/>
        </div>
    </div>    
  );
};

export default HeroSection;
