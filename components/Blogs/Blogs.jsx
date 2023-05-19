import styles from "./Blogs.module.scss";
import Image from "next/image";
import Link from "next/link";

const Blogs = () => {
  const Blogs = [
    {
      image: "",
      heading: "Lorem ipsum dolor sit amet consectetur",
      subheading:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque voluptate fuga illum?",
      link: "/",
    },
    {
      image: "",
      heading: "Lorem ipsum dolor sit amet consectetur",
      subheading:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque voluptate fuga illum?",
      link: "/",
    },
    {
      image: "",
      heading: "Lorem ipsum dolor sit amet consectetur",
      subheading:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque voluptate fuga illum?",
      link: "/",
    },
  ];

  return (
    <div className={styles.Blogs}>
      <h1>Blogs</h1>

      <div className={styles.BlogCollection}>
        {Blogs.map((item, index) => {
          return (
            <Link href={item.link} key={index} className={styles.Blog}>
              <div
                className={styles.BlogImage}
                style={{ position: "relative" }}
              >
                <Image src={"/blogImg.webp"} alt={""} fill objectFit="cover" />
              </div>
              <div className={styles.BlogHeading}>{item.heading}</div>
              <div className={styles.BlogTags}>{item.subheading}</div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Blogs;
