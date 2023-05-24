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
        <p style={{fontSize: "1.2rem"}}>Contact us At</p>
        <p style={{color: "#b765fb", marginTop: '-1rem'}}><a style={{textDecoration: "none", color: "#b765fb"}} href={`mailto:actualone.xyz@gmail.com`}>actualone.xyz@gmail.com</a></p>
      </div>
    </div>
  );
};

export default Footer;
