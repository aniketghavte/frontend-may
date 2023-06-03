import React, { useState } from 'react';
import Image from 'next/image';
import styles from './Whyus.module.scss';
import whyus_line from '../../Images/whyUs_line.svg';
import actuone_profile from '../../Images/actuone_profile.svg';

const Whyus = () => {
  const [currentVideo, setCurrentVideo] = useState(0);

  const isVideo = true;
  const Url = ['/a1.mp4', 'vid.mp4', ''];

  const handleNextClick = () => {
    if (currentVideo === 2) {
      setCurrentVideo(0);
    } else {
      setCurrentVideo(currentVideo + 1);
    }
    console.log(currentVideo)
  };

  const handlePrevClick = () => {
    if (currentVideo === 0) {
      setCurrentVideo(2);
    } else {
      setCurrentVideo(currentVideo - 1);
    }
    console.log(currentVideo)
  };

  return (
    <div className={styles.app__whyus}>
      <div className={styles.whyus_block1}>
        <div style={{position: "relative"}} className={styles.video_div}>  
            <div className={styles.video_h2}>
                <Image src={actuone_profile} width={0} height={0} style={{zIndex: "5"}}/>
                <h2>Why ActualOne Protocol ?</h2>        
            </div>

          {isVideo ? (
            <video autoPlay muted loop controls className={styles.video}>
              
              <source src={Url[currentVideo]} type="video/mp4" />
            </video>
          ) : (
            <Image src={Url[currentVideo]} alt="a" fill objectFit="cover" />
          )}
        </div>
        {/* <div style={{ display: 'flex', justifyContent: 'space-around', gap: '1rem' }}>
          <div className={styles.btn_prev} onClick={handlePrevClick}>
            <p>Previous</p>
          </div>
          <div className={styles.btn_next} onClick={handleNextClick}>
            <p>Next</p>
          </div>
        </div> */}
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
