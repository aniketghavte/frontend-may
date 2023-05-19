import { useEffect, useRef, useState } from "react";
import styles from "./Review_Quotes.module.scss";
import Image from "next/image";

const Review_Quotes = () => {
  const Reviews = [
    {
      image: "/profile.png",
      identity: "Tim and Dan Joo, Co-Founder | Hearfest",
      data: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt eum laborum, dicta ut, provident quibusdam dolore ducimus repellat mollitia eius rerum non illum dolorem id sequi esse quas excepturi obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      image: "/profile.png",
      identity: "Tim and Dan Joo, Co-Founder | Hearfest",
      data: "orem ipsum dolor sit amet consectetur adipisicinsssg elit. Deserunt eum laborum, dicta ut, provident quibusdam dolore ducimus repellat mollitia eius rerum non illum dolorem id sequi esse quas excepturi obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      image: "/profile.png",
      identity: "Tim and Dan Joo, Co-Founder | Hearfest",
      data: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt eum laborum, dicta ut, provident quibusdam dolore ducimus repellat mollitia eius rerum non illum dolorem id sequi esse quas excepturi obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      image: "/profile.png",
      identity: "Tim and Dan Joo, Co-Founder | Hearfest",
      data: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt eum laborum, dicta ut, provident quibusdam dolore ducimus repellat mollitia eius rerum non illum dolorem id sequi esse quas excepturi obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      image: "/profile.png",
      identity: "Tim and Dan Joo, Co-Founder | Hearfest",
      data: "orem ipsum dolor sit amet consectetur adipisicinsssg elit. Deserunt eum laborum, dicta ut, provident quibusdam dolore ducimus repellat mollitia eius rerum non illum dolorem id sequi esse quas excepturi obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      image: "/profile.png",
      identity: "Tim and Dan Joo, Co-Founder | Hearfest",
      data: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt eum laborum, dicta ut, provident quibusdam dolore ducimus repellat mollitia eius rerum non illum dolorem id sequi esse quas excepturi obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ];

  const [ActiveBlockIndex, setActiveBlockIndex] = useState(0);

  const SwitchInterval = useRef(null);

  useEffect(() => {
    SwitchInterval.current = setInterval(() => {
      setActiveBlockIndex((prevVal) =>
        prevVal === Reviews.length - 1 ? 0 : prevVal + 1
      );
    }, 5000);
  }, []);

  return (
    <div className={styles.Review_Quotes}>
      <h1>Reviews</h1>
      <br />
      <br />
      <div
        className={styles.BlockCollection}
        style={{
          width: `${Reviews.length * 100}%`,
          marginLeft: `-${ActiveBlockIndex * 100}%`,
        }}
      >
        {Reviews.map((item, index) => {
          return (
            <div
              key={index}
              className={
                styles.SingleBlock +
                " " +
                (ActiveBlockIndex === index ? styles.ActiveBlock : "")
              }
            >
              <div className={styles.col1}>
                <div
                  className={styles.Review_Quotes_Image}
                  style={{ position: "relative" }}
                >
                  <Image
                    src={item.image}
                    alt={"profile_pic"}
                    fill
                    objectFit="cover"
                  />
                </div>
              </div>
              <div className={styles.col2}>
                <div className={styles.Identity}>{item.identity}</div>
                <div className={styles.Data}>&quot; {item.data} &quot;</div>
              </div>
            </div>
          );
          0;
        })}
      </div>
      {/*  */}
      <button
        className={styles.PrevButton}
        onClick={() => {
          setActiveBlockIndex((prevVal) =>
            prevVal === 0 ? Reviews.length - 1 : prevVal - 1
          );

          clearInterval(SwitchInterval.current);
          SwitchInterval.current = setInterval(() => {
            setActiveBlockIndex((prevVal) =>
              prevVal === Reviews.length - 1 ? 0 : prevVal + 1
            );
          }, 5000);
        }}
      >
        <div>
          <Image
            src={"/CTA_Arrow2.svg"}
            alt={"profile_pic"}
            fill
            objectFit="contain"
          />
        </div>
      </button>
      <button
        className={styles.NextButton}
        onClick={() => {
          setActiveBlockIndex((prevVal) =>
            prevVal === Reviews.length - 1 ? 0 : prevVal + 1
          );

          clearInterval(SwitchInterval.current);
          SwitchInterval.current = setInterval(() => {
            setActiveBlockIndex((prevVal) =>
              prevVal === Reviews.length - 1 ? 0 : prevVal + 1
            );
          }, 5000);
        }}
      >
        <div>
          <Image
            src={"/CTA_Arrow2.svg"}
            alt={"profile_pic"}
            fill
            objectFit="contain"
          />
        </div>
      </button>
    </div>
  );
};

export default Review_Quotes;
