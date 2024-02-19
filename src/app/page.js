import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import img1 from "../assets/images/bg1.svg"
import img2 from "../assets/images/bg3.svg"
import img3 from "../assets/images/bg2.svg"
import dis from "../assets/images/dis.svg"
import tele from "../assets/images/twi.svg"
import x from "../assets/images/x.svg"


export default function Home() {
  return (
    <main className={styles.app__main}>
       <div className={styles.bg_images}>
            <Image src={img1} className={styles.bg_img1} alt="bg1" objectFit="cover" />
            <Image src={img2} className={styles.bg_img2} alt="bg1" objectFit="cover" />
            <Image src={img3} className={styles.bg_img3} alt="bg1" objectFit="cover" />
       </div>
       <div className={styles.main_contents}>
            <div>
                <h1 className={styles.heading1}>COMMUNITY CENTRIC IDENTITIES </h1>
                <h1 className={styles.heading2}>Reward based <span>On-chain</span> Identity Solution</h1>
            </div>
            <div>
              <h1 className={styles.heading3}>Coming Soon</h1>
            </div>
            <div className={styles.btns}>
                <input type="email" placeholder="Enter your email" />
                <button>SUBSCRIBE</button>
            </div>
            <div className={styles.socials}>
               <Link href="https://t.me/ActualOnexyz">
                  <Image src={tele} alt="Telegram" width={40} height={40} />
               </Link>
                <Link href="https://twitter.com/ActualOnexyz">
                    <Image src={x} alt="x" width={40} height={40} />
                </Link>
                <Link href="https://discord.com/invite/RxR9nEY5eU">
                    <Image src={dis} alt="discord" width={40} height={40} />
                </Link>
            </div>
       </div>
    </main>
  );
}
