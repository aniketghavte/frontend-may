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
            <h4>Feature 1 will highlight here</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor ante vel risus auctor iaculis. Nulla ut malesuada turpis. In sed purus aliquam, lacinia velit at, aliquam mauris. Aenean non finibus neque.  Nulla ut malesuada turpis. In sed purus aliquam, lacinia velit at, aliquam mauris. Aenean non finibus neque.</p>
        </div>
        <div className={styles.block1_div2}>
            <h4>Feature 1 will highlight here</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor ante vel risus auctor iaculis. Nulla ut malesuada turpis. In sed purus aliquam, lacinia velit at, aliquam mauris. Aenean non finibus neque.  Nulla ut malesuada turpis. In sed purus aliquam, lacinia velit at, aliquam mauris. Aenean non finibus neque.</p>
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
            <h4>Feature 1 will highlight here</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor ante vel risus auctor iaculis. Nulla ut malesuada turpis. In sed purus aliquam, lacinia velit at, aliquam mauris. Aenean non finibus neque.  Nulla ut malesuada turpis. In sed purus aliquam, lacinia velit at, aliquam mauris. Aenean non finibus neque.</p>
        </div>
      </div>
    </div>
  );
};

export default FeatureComponent;
