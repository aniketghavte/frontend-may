import styles from "./Footer.module.scss";
import Link from "next/link";
import {AiOutlineInstagram} from "react-icons/ai"
import {AiOutlineTwitter} from "react-icons/ai"
import {AiFillLinkedin} from "react-icons/ai"

const Footer = () => {
  const handleSubscribeNewsLetter = () => {
  
  }
  return (
    <div className={styles.Footer}>
      <div className={styles.Logo}>
        ActualOne
        <br />
        Protocol
      </div>
      <div>
        <h2 style={{letterSpacing: "0.5px"}}>Subscribe To our NewLetter</h2>
          <form>
        <div className={styles.block3} onSubmit={handleSubscribeNewsLetter}>
              <div className={styles.waitlistDiv}>
              <input placeholder="Email" type="email" />
            </div>
            <button type="submit" >Subscribe</button>             

        </div>
          </form>

      </div>
      <div>
        <p style={{fontSize: "1.2rem"}}>Contact us At</p>
        <p style={{color: "#b765fb", marginTop: '-1rem'}}><a style={{textDecoration: "none", color: "#b765fb"}} href={`mailto:actualone.xyz@gmail.com`}>actualone.xyz@gmail.com</a></p>
        <div style={{display: "flex", justifyContent: "space-between"}}>
          <Link href={`https://www.instagram.com/actualone.xyz/`}><AiOutlineInstagram style={{fontSize: "2rem"}} className={styles.socialIcon}/></Link>      
          <Link href={`https://twitter.com/ActualOnexyz`}><AiOutlineTwitter style={{fontSize: "2rem"}} className={styles.socialIcon}/></Link>   
          <Link href={`https://www.linkedin.com/company/actualone-xyz/`}><AiFillLinkedin style={{fontSize: "2rem"}} className={styles.socialIcon}/></Link>       
        </div>

      </div>
    </div>
  );
};

export default Footer;
