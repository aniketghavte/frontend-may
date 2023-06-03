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
        <div className={styles.block1_div2}>
            <h4>Feature 1</h4>
            <p>Actual One a new age aggression  tool  for all those scattered opportunity opportunity which are wide spried throught the vast landscape of internet bringing all the together at one convenient place.</p>
        </div>
        <div className={styles.block1_div2}>
            <h4>Feature 2</h4>
            <p>Experience frictionless monetization with Actual One, a groundbreaking platform that eliminates the need for multiple intermediaries like banks and payment processors. Say goodbye to traditional systems and enjoy a seamless and hassle-free monetization experience.</p>
        </div>
      </div>
      <div className={styles.feature_block2}>
        <div className={styles.block2_div1}>
            <div>
            {isVideo ? (
              <video autoPlay muted loop controls className={styles.video}>
                <source src={Url} type="video/mp4" />
              </video>
            ) : (
              <Image src={Url} alt="a" fill objectFit="cover" />
            )}
          </div>
        </div>
        <div className={styles.block1_div2}>
            <h4>Feature 3</h4>
            <p>Experience a new level of collaboration and turn the gig space into a multiplayer game with our platform. Actual One brings a layer of excitement to working on ideas, making collaboration fun and engaging. Unleash your creativity and join the multiplayer game of opportunity exploration and innovation.</p>
        </div>
      </div>
    </div>
  );
};

export default FeatureComponent;
