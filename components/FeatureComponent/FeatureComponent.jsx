import styles from "./FeatureComponent.module.scss";
import Image from "next/image";
import eyes from '../../Images/eyes.svg'

const FeatureComponent = () => {
  const Heading = "Feature Component";

  const Points = [
    {
      heading: "Stick to your budget",
      description: (
        <>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam
          aliquid repudiandae corrupti et? Quisquam molestias sed corporis
          quaerat.
        </>
      ),
      // "Find the right service for every price point. No hourly rates, just project-based pricing.",
    },
    {
      heading: "Stick to your budget",
      description:
        "Find the right service for every price point. No hourly rates, just project-based pricing.",
    },
    {
      heading: "Stick to your budget",
      description:
        "Find the right service for every price point. No hourly rates, just project-based pricing.",
    },
    {
      heading: "Stick to your budget",
      description:
        "Find the right service for every price point. No hourly rates, just project-based pricing.",
    },
  ];

  const isVideo = true;
  const Url = "/a1.mp4";

  return (
    <div className={styles.app__feature}>
      <div className={styles.feature_block1}>
        <div className={styles.block1_div1}>
          <h2>This is how we play our <span className={styles.role_span}>Role <Image src={eyes} height={0} width={0} /></span></h2>
        </div>
      </div>
      <div className={styles.feature_block2}>
        <div>
          gg
        </div>
      </div>
    </div>
  );
};

export default FeatureComponent;
