import styles from "./Blogs.module.scss";
import Image from "next/image";
import Link from "next/link";
import note from '../../Images/note.svg'
import blog from '../../Images/blog.svg'

const Blogs = () => {
  const Blogs = [
    {
      image: "",
      heading: "Lorem ipsum dolor sit amet consectetur",
      subheading:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      link: "/",
    },
    {
      image: "",
      heading: "Lorem ipsum dolor sit amet consectetur",
      subheading:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      link: "/",
    },
    {
      image: "",
      heading: "Lorem ipsum dolor sit amet consectetur",
      subheading:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      link: "/",
    },
  ];

  return (
    <div className={styles.Blogs}>
      <h1>Read our&nbsp;<span style={{color: "#AC47FF"}}>Blogs</span>&nbsp;to stay updated<Image src={note} height={0} width={0} style={{marginLeft: "2rem"}} className={styles.h1_image}/></h1>
      <div className={styles.BlogCollection}>
        {Blogs.map((item, index) => {
          return (
            <div key={index} className={styles.Blog}>
              <div
                className={styles.BlogImage}
                style={{ position: "relative" }}
              >
                <Image src={blog} alt={""} fill objectFit="cover" />
              </div>
              <div className={styles.blog_tags}>
                <div className={styles.blog_tag}>
                    <p>Podcast</p>
                </div>
                <div className={styles.blog_tag}>
                    <p>Web3</p>
                </div>
                <div className={styles.blog_tag}>
                    <p>NFT</p>
                </div>
              </div>
              <div className={styles.BlogHeading}>{item.heading}</div>
              <div className={styles.BlogTags}>{item.subheading}</div>
              <Link href={`/`} className={styles.readBtn}>
                  <h3>Read More</h3>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blogs;
