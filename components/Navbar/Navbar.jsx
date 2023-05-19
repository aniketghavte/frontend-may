import styles from "./Navbar.module.scss";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className={styles.Navbar}>
      <div className={styles.Logo}>
        ActualOne
        <br />
        Protocol
      </div>
      <form className={styles.SearchBox}>
        <input type="text" placeholder="Search" name="search" />
        <button>
          <Image
            src="/search.png"
            alt=""
            width={16}
            height={16}
            objectFit="contain"
          />
        </button>
      </form>

      {/* <div className={styles.NavLinks}>a</div> */}

      <div className={styles.NavButtons}>
        <button className={styles.JoinButton}>Join</button>
      </div>
    </nav>
  );
};

export default Navbar;
