'use client';
import styles from "./HeroSection.module.scss";
import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import axios from "axios";
import close from '../../Images/close.svg';
import {AiOutlineCloseCircle} from 'react-icons/ai'
import { useSession, signIn, signOut } from "next-auth/react";
import wallet from '../../Images/wallet-black.svg'
import Link from "next/link";
import right_svg from '../../Images/right_svg.svg'
import finalImage from '../../public/finalImage.svg'
import left_svg from '../../Images/left_svg.svg'
import arrow from '../../Images/arrow.svg'
import correctly_underline from '../../Images/correctly_underline.svg'
import game_underlline from '../../Images/game_underlline.svg'

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
                  <h3>Let&apos;s Start By</h3>
                  <h1>Login/Sign up</h1>
                  <p>Login/Sign up with either email or wallet to start your Web3 journey with Truts and earn some XPs!</p>
              </div>
              <div className={styles.login_block2}>
                  <div className={styles.loign_container1} style={{ cursor: "pointer"}} onClick={handleSubmitLogin}>
                      <div className={styles.login_profile} >
                          <Image alt="img" src="https://upload.wikimedia.org/wikipedia/commons/archive/5/53/20161128230037%21Google_%22G%22_Logo.svg" width={0} height={0}/>
                      </div>
                      <p>You can use your Google account to signup/log in</p>
                      <div style={{display: "flex", alignItems: "center", justifyContent: "center", gap: "1rem", border: "1px solid #141414", padding: "0 1rem", borderRadius: "10px", cursor: "pointer"}}>
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
                        <p>Coming Soon</p>
                      </div>
                  </div>

              </div>
          </div>
      </div>
    )
  }

  const handleOnClickBlock3 = () => {
    if(session){
      router.push("/waitlist")
    } else {
      handleJoinClick()
    }
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
    <div style={{display: "flex", flexDirection: "column", alignItems: "center" , justifyContent: "center", maxHeight: "100vh"}}>
        {
         isPopupOpened && <LoginPopup state={isPopupOpened}/>
       }
      <div className={styles.block2}>
            <div className={styles.headline}>
              Join The ActualOne Protocol
            </div>
            <div className={styles.mainHeadline}>
              <p style={{margin: "0"}}>Coming
                <span style={{color: "#ac47ff", position:"relative"}}> Soon</span></p>
            </div>
            {/* <div>
            <p className={styles.subheadline}>Yass!!! You have read that <span style={{position: "relative"}}>correctly <Image src={correctly_underline} className={styles.correctly_underline} height={0} width={0}/></span></p>
            </div> */}
                <div>
                  <h2>Join Our Community</h2>
                  <div style={{display: "flex", alignItems: "center", justifyContent: "center", gap: "2rem"}}>
                        <Link className={styles.socialBtns} href="https://discord.com/invite/RxR9nEY5eU" passHref={true}>
                          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50">
                          <path d="M 41.625 10.769531 C 37.644531 7.566406 31.347656 7.023438 31.078125 7.003906 C 30.660156 6.96875 30.261719 7.203125 30.089844 7.589844 C 30.074219 7.613281 29.9375 7.929688 29.785156 8.421875 C 32.417969 8.867188 35.652344 9.761719 38.578125 11.578125 C 39.046875 11.867188 39.191406 12.484375 38.902344 12.953125 C 38.710938 13.261719 38.386719 13.429688 38.050781 13.429688 C 37.871094 13.429688 37.6875 13.378906 37.523438 13.277344 C 32.492188 10.15625 26.210938 10 25 10 C 23.789063 10 17.503906 10.15625 12.476563 13.277344 C 12.007813 13.570313 11.390625 13.425781 11.101563 12.957031 C 10.808594 12.484375 10.953125 11.871094 11.421875 11.578125 C 14.347656 9.765625 17.582031 8.867188 20.214844 8.425781 C 20.0625 7.929688 19.925781 7.617188 19.914063 7.589844 C 19.738281 7.203125 19.34375 6.960938 18.921875 7.003906 C 18.652344 7.023438 12.355469 7.566406 8.320313 10.8125 C 6.214844 12.761719 2 24.152344 2 34 C 2 34.175781 2.046875 34.34375 2.132813 34.496094 C 5.039063 39.605469 12.972656 40.941406 14.78125 41 C 14.789063 41 14.800781 41 14.8125 41 C 15.132813 41 15.433594 40.847656 15.621094 40.589844 L 17.449219 38.074219 C 12.515625 36.800781 9.996094 34.636719 9.851563 34.507813 C 9.4375 34.144531 9.398438 33.511719 9.765625 33.097656 C 10.128906 32.683594 10.761719 32.644531 11.175781 33.007813 C 11.234375 33.0625 15.875 37 25 37 C 34.140625 37 38.78125 33.046875 38.828125 33.007813 C 39.242188 32.648438 39.871094 32.683594 40.238281 33.101563 C 40.601563 33.515625 40.5625 34.144531 40.148438 34.507813 C 40.003906 34.636719 37.484375 36.800781 32.550781 38.074219 L 34.378906 40.589844 C 34.566406 40.847656 34.867188 41 35.1875 41 C 35.199219 41 35.210938 41 35.21875 41 C 37.027344 40.941406 44.960938 39.605469 47.867188 34.496094 C 47.953125 34.34375 48 34.175781 48 34 C 48 24.152344 43.785156 12.761719 41.625 10.769531 Z M 18.5 30 C 16.566406 30 15 28.210938 15 26 C 15 23.789063 16.566406 22 18.5 22 C 20.433594 22 22 23.789063 22 26 C 22 28.210938 20.433594 30 18.5 30 Z M 31.5 30 C 29.566406 30 28 28.210938 28 26 C 28 23.789063 29.566406 22 31.5 22 C 33.433594 22 35 23.789063 35 26 C 35 28.210938 33.433594 30 31.5 30 Z"></path>
                          </svg>
                        </Link>
                        <Link className={styles.socialBtns} href="https://www.instagram.com/actualone.xyz/" passHref={true}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                        </Link>
                        <Link className={styles.socialBtns} href="https://t.me/Official_ActualOne" passHref={true}>
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50">
                              <path d="M25,2c12.703,0,23,10.297,23,23S37.703,48,25,48S2,37.703,2,25S12.297,2,25,2z M32.934,34.375	c0.423-1.298,2.405-14.234,2.65-16.783c0.074-0.772-0.17-1.285-0.648-1.514c-0.578-0.278-1.434-0.139-2.427,0.219	c-1.362,0.491-18.774,7.884-19.78,8.312c-0.954,0.405-1.856,0.847-1.856,1.487c0,0.45,0.267,0.703,1.003,0.966	c0.766,0.273,2.695,0.858,3.834,1.172c1.097,0.303,2.346,0.04,3.046-0.395c0.742-0.461,9.305-6.191,9.92-6.693	c0.614-0.502,1.104,0.141,0.602,0.644c-0.502,0.502-6.38,6.207-7.155,6.997c-0.941,0.959-0.273,1.953,0.358,2.351	c0.721,0.454,5.906,3.932,6.687,4.49c0.781,0.558,1.573,0.811,2.298,0.811C32.191,36.439,32.573,35.484,32.934,34.375z"></path>
                            </svg>
                        </Link>
                        <Link className={styles.socialBtns} href="https://twitter.com/ActualOnexyz" passHref={true}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                        </Link>
                  </div>  
                </div>

              <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
                  <h2>Subscribe our Newsletter to stay updated</h2>
                  <div className={styles.newletterbtn}>
                      <input type="text" placeholder="Enter your email address" className={styles.emailInput}/>
                      <button>Subscribe</button>
                  </div>
              </div>
            {/* <Image src={left_svg} alt="get Started " className={styles.finalImage}/> */}
        </div>
    </div>    
  );
};

export default HeroSection;
