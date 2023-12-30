import styles from "./Footer.module.scss";
import Image from "next/image";
import Link from "next/link";
import {AiOutlineInstagram} from "react-icons/ai"
import {AiOutlineTwitter} from "react-icons/ai"
import {AiFillLinkedin} from "react-icons/ai"
import footer_hero from "../../Images/footer_hero.svg"
import footer_arrow from "../../Images/footer_arrow.svg"
import {Toaster, Toast, toast} from 'react-hot-toast'
const Footer = () => {
  const handleSubscribeNewsLetter = (e) => {
    e.preventDefault();
    toast.success("Successfully Subscribe To New Letter")
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
                    <form onSubmit={handleSubscribeNewsLetter}>
                  <div className={styles.block3} >
                        <div className={styles.waitlistDiv}>
                        <input placeholder="Enter Your mail" type="email" required />
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
                      <Link href={`/aboutus`}>About us</Link>
                      <Link href={`/treasure`}>Treasure Hunt</Link>
                      {/* <Link href={`/`}>Our team</Link> */}
                      <Link href={`mailto:actualone.xyz@gmail.com`}>contact@actualone.xyz</Link>          
                  </div>

              </div>
              <div className={styles.footer_tag}>
                  <h6>Socials</h6>
                  <div style={{display: "flex", flexDirection: "column", gap: "1rem", marginTop: "2rem"}}>
                      <Link href={`https://twitter.com/ActualOnexyz`}>Twitter</Link>
                      <Link href={`https://www.instagram.com/actualone.xyz/`}>Instagram</Link>   
                      <Link href={`https://actualone-protocol.beehiiv.com/subscribe`}>Blogs</Link>   
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
        <Toaster       
        position="top-center"
        reverseOrder={false}
        />
    </div>

  );
};

export default Footer;
