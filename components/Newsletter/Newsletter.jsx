import styles from "./Newsletter.module.scss";
import Image from "next/image";

const Newsletter = () => {
  return (
    <div className={styles.Newsletter}>
      <div>
        <div className={styles.col1}>
          <div className={styles.NewsletterImage}>
            <Image src={"/Newsletter.svg"} alt="" fill objectFit="contain" />
          </div>
        </div>
        <div className={styles.col2}>
          <h1>Newsletter</h1>
          <div className={styles.NewsletterDescription}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi
            veniam corrupti sed labore quibusdam? Accusamus cupiditate sunt
            libero aperiam saepe dolor tenetur eum quisquam asperiores, soluta
            enim ipsum, quos consequuntur?
          </div>
          <input type="text" placeholder="What's Your Email?" />
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
