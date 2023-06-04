import { useEffect, useRef, useState } from "react";
import styles from "./Review_Quotes.module.scss";
import Image from "next/image";
import game_underlline from '../../Images/game_underlline.svg'
import left_arrow from '../../Images/left_arrow.svg'
import right_arrow from '../../Images/right_arrow.svg'
import review_container from '../../Images/review_container.svg'
import profile_iamge from '../../Images/profile_iamge.svg'
import Roshan from '../../Images/roshan.jpg'
import Vankshaia from '../../Images/Vankshaia.jpg'

const Review_Quotes = () => {
  const Reviews = [
    {
      image: Vankshaia,
      name: "Vanshika",
      identity: "Devrel engineer @Biconomy tech evangelist & creator",
      data: "collaboration is the first step towards every successful story. The importance of mapping needs and wants and successfully being able to grasp knowledge, opportunity and experiences",
    },
    {
      image: Roshan,
      name: "Roshan",
      identity: "founder @thefutureofwork • chief @prmsnls",
      data: "opportunity should be permesionless",
    }
  ];

  const [ActiveBlockIndex, setActiveBlockIndex] = useState(0);

  const SwitchInterval = useRef(null);

  useEffect(() => {
    // SwitchInterval.current = setInterval(() => {
    //   setActiveBlockIndex((prevVal) =>
    //     prevVal === Reviews.length - 1 ? 0 : prevVal + 1
    //   );
    // }, 5000);
  }, []);

  return (
    <div className={styles.Review_Quotes}>
      <h1>Here&apos;s what people<span style={{margin: "0", position: "relative", color: "#AC47FF"}}>&nbsp;says&nbsp;<Image src={game_underlline} className={styles.game_underlline} height={0} width={0}/></span> <span/></h1>
      <br />
      <br />
      <div>
          <div
        className={styles.BlockCollection}
        style={{
          width: `${Reviews.length * 100}%`,
          marginLeft: `-${ActiveBlockIndex * 100}%`,
        }}
      >
        {Reviews.map((item, index) => {
          return (
            <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", width: "50%"}} key={index}>
              <div
                key={index}
                className={
                  styles.SingleBlock +
                  " " +
                  (ActiveBlockIndex === index ? styles.ActiveBlock : "")
                } 
                style={{width: "60%", position: "relative", height: "440px"}}
              >
                <Image src={review_container} height={0} width={0} className={styles.review_image}/>
{/*      
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
                    </div> */}
                    <div className={styles.col2}>
                      {/* <div className={styles.Identity}>{item.identity}</div> */}
                      <div className={styles.Data}>&quot; {item.data} &quot;</div>
                    </div>           
                    <div className={styles.reviwe_owner}>
                      <Image src={item.image} width={60} height={60} className={styles.review_profile}/>
                      <div>
                          <h2>{item.name}</h2>
                          <p>{item.identity}</p>
                      </div>
                    </div>
                    {/* <div className={styles.review_block}>
                        <h1 style={{color: "black"}}>HEllo</h1>
                    </div> */}
              </div>         
            </div>

          );
        })}
         </div>    
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
            src={left_arrow}
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
            src={right_arrow}
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
