import styles from "./UpdateStrip.module.scss";
import Marquee from "react-fast-marquee";

const UpdateStrip = () => {
  const UpdateTexts = [
    "Bounty",
    "Monetization",
    "Upcoming updates goes here",
    "Bounty",
    "Monetization",
    "Upcoming updates goes here",
    "Bounty",
    "Monetization",
    "Upcoming updates goes here",
  ];

  return (
    <Marquee className={styles.UpdateStrip} pauseOnHover={true}>
      {UpdateTexts.map((item, index) => (
        <>
          <span style={{ color: "#FFD335" }} key={index}>
            &nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;
          </span>
          <span>{item}</span>
        </>
      ))}
    </Marquee>
  );
};

export default UpdateStrip;
