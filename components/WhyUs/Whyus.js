import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './Whyus.module.scss';
import whyus_line from '../../Images/whyUs_line.svg';
import actuone_profile from '../../Images/actuone_profile.svg';
import whywe_prop from '../../Images/whywe_prop.svg';

const Whyus = () => {
  const [currentFeed, setCurrentFeed] = useState(0);

  const isVideo = true;
  const Url = ['/a1.mp4', 'vid.mp4', ''];

  const handleNextClick = () => {
    if (currentFeed === 3) {
      setCurrentFeed(0);
    } else {
      setCurrentFeed(currentFeed + 1);
    }
    console.log(currentFeed)
  };

  const handlePrevClick = () => {
    if (currentFeed === 0) {
      setCurrentFeed(3);
    } else {
      setCurrentFeed(currentFeed - 1);
    }
    console.log(currentFeed)
  };

  const feeds = ["Hello guys, we are builders building ActualOne Protocol wid 3", "And we are going to tell you the story behind Actualone Protocol", "Bunch of friends alway fall in the rabbit hole of monetization and opportunity , started with a college club and build  a community along teh way ,and built a platform along with the community" , "This is how we came into picture... Now its time to make it... \n Lfg"]
 
  useEffect(() => {
    const interval = setInterval(() => {
      if (currentFeed === 2) {
        setCurrentFeed(0);
      } else {
        setCurrentFeed((prevFeed) => prevFeed + 1);
      }
    }, 7000);

    return () => {
      clearInterval(interval);
    };
  }, [currentFeed]);
  
  return (
    <div className={styles.app__whyus}>
      <div className={styles.whyus_block1}>
        <div style={{position: "relative"}} className={styles.video_div}>  
            <div className={styles.feed_navigation}>
                {
                    feeds.map((item, index) => {
                        return(<hr style={{background: currentFeed >= index ? "white" : ""}} key={index}/>)
                    })
                }
            </div>
            <div className={styles.video_h2}>
                <Image src={actuone_profile} width={0} height={0} style={{zIndex: "5"}}/>
                <h2>Why ActualOne Protocol ?</h2>        
            </div>

          {/* {isVideo ? (
            <video autoPlay muted loop controls className={styles.video}>
              
              <source src={Url[currentFeed]} type="video/mp4" />
            </video>
          ) : (
            <Image src={Url[currentFeed]} alt="a" fill objectFit="cover" />
          )} */}
          <div className={styles.instaFeed}>
                <h1>{feeds[currentFeed]}</h1>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-around', gap: '1rem' , marginTop: "1rem"}}>
          <div className={styles.btn_prev} onClick={handlePrevClick}>
            <p>Previous</p>
          </div>
          <div className={styles.btn_next} onClick={handleNextClick}>
            <p>Next</p>
          </div>
        </div>
            <Image src={whywe_prop} width={0} height={0} className={styles.whywe_prop} />
      </div>
      <div className={styles.whyus_block2}>
        <h1>
          <span style={{ color: '#595959' }}>
            Why us <Image src={whyus_line} height={0} width={0} className={styles.whyus_line} />
          </span>{' '}
          Why we
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor ante vel risus auctor iaculis. Nulla ut
          malesuada turpis. In sed purus aliquam, lacinia velit at, aliquam mauris. Aenean non finibus neque. Aenean non
          finibus neque.
        </p>

      </div>
    </div>
  );
};

export default Whyus;