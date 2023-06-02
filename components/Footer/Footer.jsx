import styles from "./Footer.module.scss";
import Image from "next/image";
import Link from "next/link";
import {AiOutlineInstagram} from "react-icons/ai"
import {AiOutlineTwitter} from "react-icons/ai"
import {AiFillLinkedin} from "react-icons/ai"
import footer_hero from "../../Images/footer_hero.svg"
import footer_arrow from "../../Images/footer_arrow.svg"

const Footer = () => {
  const handleSubscribeNewsLetter = () => {
  
  }
  return (
    <div className={styles.app__footer}>
         <div className={styles.Footer}>
            <div className={styles.Logo}>
              <div>
                  <h2>ActualOne</h2>
                  <br />
                  <h2>Protocol</h2>
                  <h5>We are taking opportunities to a multiplayer game, wanna know how lets dive in together!!!</h5>
              </div>
              <div className={styles.logo_block2}>
                <div className={styles.sub_btn}>
                  <h4 >Subscribe our Newsletter to stay updated</h4>
                    <form>
                  <div className={styles.block3} onSubmit={handleSubscribeNewsLetter}>
                        <div className={styles.waitlistDiv}>
                        <input placeholder="Enter Your mail" type="email" />
                      </div>
                      <button type="submit" >Subscribe</button>             

                  </div>
                    </form>

                </div>
              </div>
            </div>
            <div className={styles.footer_tags}>
              <div className={styles.footer_tag}>
                  <h6>Quick Links</h6>
                  <div style={{display: "flex", flexDirection: "column", gap: "1rem", marginTop: "2rem"}}>
                      <Link href={`/`}>Back to top</Link>
                      <Link href={`/`}>About us</Link>
                      <Link href={`/`}>Our team</Link>
                      <Link href={`mailto:actualone.xyz@gmail.com`}>contact@actualone.xyz</Link>          
                  </div>

              </div>
              <div className={styles.footer_tag}>
                  <h6>Socials</h6>
                  <div style={{display: "flex", flexDirection: "column", gap: "1rem", marginTop: "2rem"}}>
                      <Link href={`/`}>Twitter</Link>
                      <Link href={`/`}>Instagram</Link>
                      <Link href={`/`}>Discord</Link>
                      <Link href={`/`}>Telegram</Link>
                      <Link href={`/`}>Medium</Link>          
                  </div>
              </div>


            </div>
        </div> 

        <p className={styles.copyrights}>©️ 2023 ActualOne Protocol. All Rights Reserved</p>

        <div className={styles.footer_hero}> 
            <div>
                 <h1>Opportunities</h1>         
            </div>
                <Image src={footer_arrow} width={0} height={0} className={styles.footer_arrow}/>            
            <div>
                <Image src={footer_hero} width={0} height={0} className={styles.footer_hero_image}/>
            </div>
        </div>
    </div>

  );
};

export default Footer;
