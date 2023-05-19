import styles from "./HeroSection.module.scss";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className={styles.HeroSection}>
      <div className={styles.col1}>
        <h1>Discover opportunities to collaborate</h1>
        <h2>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati
          qui praesentium cumque porro unde quisquam fugit atque natus magni
          quidem. Voluptatem repellendus consectetur quisquam aperiam optio
          quidem accusantium. Architecto, fugiat.
        </h2>
        <div className={styles.JoinInput}>
          <div>actualone.xyz/</div>
          <input type="text" placeholder="Username" />
          <button>Join</button>
        </div>
      </div>
      <div className={styles.col2}>
        <div className={styles.HeroImage} style={{ position: "relative" }}>
          {/* <Image
            src={"/human.png"}
            alt="HeroSection Image"
            fill
            objectFit="contain"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
