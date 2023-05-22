'use client'
import React, {useEffect, useState} from 'react'
import Image from 'next/image';
import styles from '../../styles/waitlist.module.scss'
import axios from 'axios';
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { stringify } from 'query-string';
import {Toaster, Toast, toast} from 'react-hot-toast'
import waitlist_pic from '../../public/waitlistpic.svg';
import line from '../../public/line.svg'
import getStarted from '../../public/getStarted.svg'
import joinWaitlistImage from '../../Images/claim_username.svg'
import finalImage from '../../public/finalImage.svg'
const Waitlist = () => {
  const [user, setUser] = useState();          
  const [newUserName, setNewUserName] = useState()
    const router = useRouter();
    const { data: session } = useSession()
    console.log("session", session);
    console.log(session?.token?.email)

    useEffect(() => {
        const checkSession = async () => {
          if (!session) {
            router.push('/'); 
          } else {
            axios.get('https://xy2s9f3v4f.execute-api.ap-south-1.amazonaws.com/dev/api/waitlist/getuser', {
              params :{
                email: session.token.email
              }
            })
            .then(function (response) {
              setUser(response?.data?.profile?.data?.user)
              console.log(response);
            })
            .catch(function (error) {
              console.log(error);
            });
          }
        };
    
        checkSession();
      }, []);
    

      const handleSetUserName = () => {
        if(!newUserName || newUserName === ""){
          toast.error("Enter Valid UserName")
        } else {
          axios.post('https://xy2s9f3v4f.execute-api.ap-south-1.amazonaws.com/dev/api/waitlist/updateUser', {
            email: session.token.email,
            updatedData: {
              username: newUserName
            }
            })
            .then(function (response) {
              setUser(response?.data?.profile?.data?.user)
              console.log(response);
              toast.success("UserName Sucessfully Updated")
            })
            .catch(function (error) {
              console.log(error);
            });
        }
        
      }
    // componentDidMount() = () => {

    //   };
    //    handleShareButtonClick()
    // }
      const handleShareButtonClick = () => {
          const tweetText = 'Hey, I just get into the the ActualOne Waitlist Join!'; // The text you want to share on Twitter
          const tweetUrl = 'https://actualone.xyz'; // The URL you want to share
          const params = new URLSearchParams();
          params.set('text', tweetText);
          params.set('url', tweetUrl);
          const twitterShareUrl = `https://twitter.com/share?${params.toString()}`;


          router.push(twitterShareUrl);
         
      }
    // useEffect(() => {
      
    // }, [window])
    



    
   

  return (
    <div className={styles.app__waitlist}>
          <div style={{display: "flex", flexDirection: "column", alignItems: "center" , justifyContent: "center"}}>
      <div className={styles.block2}>
            <div className={styles.headline}>
              Join The ActualOne Protocol&apos;s Waitlist
            </div>
            <div className={styles.mainHeadline}>
              <p style={{margin: "0"}}>Yoo, 
                  Your Made Into The&nbsp;
                <span style={{color: "#ac47ff"}}> 
                Waitlist
                </span></p>

            </div>
            <div>
              <p style={{fontSize: "1.2rem", fontWeight: "600"}}>Your Current Positon on the Waitlist</p>
            </div>
            <div className={styles.block3}>
                  
                  <div className={styles.waitlistDiv}v>
                   <div>#{user?.waitlistRank}</div>
                  </div>
   
            </div>
            <div style={{marginTop: "1rem", display: "flex", flexDirection: "column", alignItems: "center",justifyContent: "center",width: "80%", textAlign: "center"}}>
              <p style={{fontSize: "1.2rem", fontWeight: "600"}}>Level up your waitlist game, by Sharing it to your Social, <span style={{cursor: "pointer", color: "#ac47ff"}} onClick={handleShareButtonClick}>Share</span></p>
            </div>
            <div style={{marginTop: "1rem", display:"flex", justifyContent:"center", alignItems: "center", flexDirection: "column"}}>
              {
                user?.username ? <>
                  <div className={styles.block3_new_2}>
                      <div className={styles.waitlistDiv_new}>
                      <div style={{display: "flex", gap: "0"}}>actualone.xyz/{user?.username}</div>
                      </div>
                  </div>                  
                </> : <>
                  <p style={{fontSize: "1.2rem", fontWeight: "600"}}>Till, then Secure Your UserName with Us</p>
                  <div className={styles.block3_new}>
                      <div className={styles.waitlistDiv_new}>
                        
                           <div style={{display: "flex", gap: "0"}}>actualone.xyz/<input placeholder='username' required value={newUserName} onChange={(e) => setNewUserName(e.target.value)}/></div>
                       
                     
                      </div>
      
                      <button type='submit' onClick={() => handleSetUserName()}>Get</button>
                
                  </div>                
                </>
              }

            </div>
            <Image src={finalImage} alt="get Started " className={styles.finalImage}/>
        </div>
    </div> 
    <Toaster       
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          success: {
            iconTheme: {
              primary: '#141414',
              secondary: '#ac47ff',
            },
          },
        }}
        />
    </div>
  )
}

export default Waitlist