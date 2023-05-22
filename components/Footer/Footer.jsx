import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.Footer}>
      <div className={styles.Logo}>
        ActualOne
        <br />
        Protocol
      </div>
      <div>
         <div></div>
      </div>
      <div>
        <p style={{fontSize: "1.2rem"}}>Contact us At</p>
      </div>
    </div>
  );
};

export default Footer;
