import styles from "./FeatureComponent.module.scss";
import Image from "next/image";

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
    <div className={styles.FeatureComponent}>
      <div className={styles.col1}>
        <h1>{Heading}</h1>

        {Points.map((item, index) => {
          return (
            <div className={styles.Point} key={index}>
              <div className={styles.PointHeading}>
                <span>&nbsp;</span>
                <div>{item.heading}</div>
              </div>
              <div className={styles.PointDescription}>{item.description}</div>
            </div>
          );
        })}
      </div>
      <div className={styles.col2}>
        {isVideo ? (
          <video autoPlay muted loop controls>
            <source src={Url} type="video/mp4" />
          </video>
        ) : (
          <Image src={Url} alt="a" fill objectFit="cover" />
        )}
      </div>
    </div>
  );
};

export default FeatureComponent;
