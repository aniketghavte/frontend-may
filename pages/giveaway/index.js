'use client';
import { useState, useEffect } from 'react';
import styles from './exclusive.module.css';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import axios from 'axios'
import { Toaster, Toast, toast } from 'react-hot-toast';
import ex_bg from '../../public/ex_bg.jpg'
import Link from 'next/link';

const Giveaway = () => {
  const [twitterLink, setTwitterLink] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [tweetText, setTweetText] = useState('');
  const [userEmail, setUserEmail] = useState('');

  const router = useRouter();
  useEffect(() => {
  }, []);

  const handleShareButtonClick = () => {
    const tweetUrl = '#BeActualOne'; // The URL you want to share
    const encodedTweetText = encodeURIComponent(tweetText);
    const encodedTweetUrl = encodeURIComponent(tweetUrl);
    const twitterShareUrl = `https://twitter.com/intent/tweet?text=${encodedTweetText}&url=${encodedTweetUrl}`;

    window.open(twitterShareUrl, '_blank');
  };
  const isTwitterUrl = (url) => {
    const twitterUrlPattern = /^(?:https?:\/\/)?(?:www\.)?twitter\.com\/(?:#!\/)?[a-zA-Z0-9_]+\/status\/([0-9]+)(?:\/.*)?$/;
    return twitterUrlPattern.test(url);
  };
  const handleSaveChanges = () => {
    console.log('tweet')
    if(twitterLink === ''){
      toast.error('Please Paste the Tweet Url')
      return;
    } else if(userEmail === ''){
        toast.error('Please Enter the Email')
        return;
    } else if(!isTwitterUrl(twitterLink)){
      toast.error('Please Enter the Correct Twitter Url')
      return;
    }
    toast.loading('Saving Data...');
    axios.post('https://www.actualone.xyz/api/hello', {
        userEmail : userEmail,
        twitterLink : twitterLink
      }).then(response => {
        console.log(response);
        toast.dismiss();
        if (response.status === 201) {
          toast.success('Response Saved Successfully');
          setTwitterLink('');
          setTimeout(() => {
          }, 3000);
        }
      })
      .catch(error => {
        console.log(error)
        toast.dismiss()
        toast.error('Error updating profile');
      });
  };

  return (
    
    <div className={styles.app__exclusive}>
        <div className={styles.exclusive_header}>
              <Image src={ex_bg} height={0} width={0} className={styles.exbg}/>
              {/* <div className={styles.exclusive_header_text}>
                 <Image src={ex4} height={0} width={0} className={styles.ex4}/>
                 <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                      <Image src={ex1} height={0} width={0} className={styles.ex2}/>
                      <Image src={ex2} height={0} width={0} className={styles.ex2}/>
                 </div>
                 <Image src={ex3} height={0} width={0} className={styles.ex4}/>
              </div> */}
        </div>
        {/* <div className={styles.container}>
                <h2>Claim your <span>Exclusive NFT</span> in 3 easy steps!!!</h2>

                <h3><span>Step 1 : </span>Explain what’s makes makes you ActualOne.</h3>
                <textarea
                   placeholder="What makes you ActualOne"
                     style={{
                       height: '20vh',
                       background: 'transparent',
                       width: '100%',
                       border: 'none',
                       outline: 'none',
                       fontSize: '1rem',
                       padding: "1rem",
                       wordWrap: 'break-word',
                       borderRadius: '0.625rem',
                        border: '1px solid #525252',
                        opacity:'0.4000000059604645',
                        background: 'var(--secondary-white, #E3E3E3)',
                     }}
                     onChange={e => {
                       e.preventDefault();
                       setTweetText(e.target.value);
                     }}
                   />
                  <h3><span>Step 2 : </span>Make tweet by clicking on below button & Copy Link.</h3>
                  <button className={styles.tweet} onClick={handleShareButtonClick}>Tweet Now</button>
                  <h3><span>Step 3 : </span>Paste the copied link below & Submit it.</h3>
                  <div style={{display:"flex", alignItems: "center", justifyContent:"space-between", gap:"1rem"}} className={styles.submit}>
                    <input placeholder='Paste link to your tweet here...' value={twitterLink} onChange={(e) => setTwitterLink(e.target.value) }  />
                    <button onClick={handleSaveChanges}>Submit Link</button>
                  </div>
        </div> */}

        <div className={styles.container2}>
            <div className={styles.block1}>
                <h1>Though our <span>public beta</span> isn't out yet , we don't want our folks to miss on hot and <span>exclusive opportunities</span></h1>
                <div className={styles.desc_give}>
                    <p>🥁 To celebrate the partnership with the #Web3ConfIndia we're announcing the giveaway 🤩</p>
                    <p>▶ 10 Conference only tickets 🎟 for the <Link href={'https://twitter.com/web3conf_india'} target='_blank'>@web3conf_india</Link> are waiting for you </p>
                </div>
                <hr/>
                <div className={styles.desc_give}>
                    <p><span>Criteria:-</span> 📢 Rules are very simple:</p>
                    <p>▶ Follow <Link href={'https://twitter.com/web3conf_india'} target='_blank'>@web3conf_india</Link> & <Link href={'https://twitter.com/ActualOnexyz'} target='_blank'>@Actualonexyz</Link></p>
                    <p>▶ Tag a patner, fren with whom you would like to go to web3conf</p>
                    <div>
                        <p>▶ OR </p>
                        <p>Create a meme</p>
                        <p>Abba nahi manenge💀</p>
                        <p>Tag <Link href={'https://twitter.com/web3conf_india'} target='_blank'>@web3conf</Link></p>
                    </div>
                    <p>👉 <Link href={'https://twitter.com/web3conf_india'} target='_blank'>@teamweb3conf</Link> will select 10 winners from the comments after verifying the above steps 🙌</p>
                </div>
                <hr/>
                <div className={styles.desc_give}>
                    <p><span>Note:- </span>📢  Comments before 5th August 2023, 🕛 11:59 PM IST will only be considered as valid for #Giveaway entries!</p>
                    <p>🤔 What are you waiting for?</p>
                    <p>🥁 Grab this opportunity to win <Link href={''} target='_blank'>@web3conf_india</Link> tickets for #FREE 🎟</p>
                    <p>Best of luck #LFG🤞</p>
                </div>

                <p></p>
            </div>
            <hr/>
            <div className={styles.block2}>
                <h2>Submit Your Response</h2>
                <div style={{display:"flex", alignItems: "left",flexDirection: "column", justifyContent:"space-between", gap:"1rem"}} className={styles.submit}>
                    <input type='email' placeholder='Your Email' value={userEmail} onChange={(e) => setUserEmail(e.target.value) }  />
                    <input type='text' placeholder='Paste link to your tweet here...' value={twitterLink} onChange={(e) => setTwitterLink(e.target.value) }  />
                    <button onClick={handleSaveChanges}>Submit Link</button>
                </div>
            </div>
        </div>      
        <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default Giveaway;
