'use client';
import { useState, useEffect } from 'react';
import styles from './treasure.module.css'
import Image from 'next/image'
import treasure from '../../public/treasure.jpg'
import { useRouter } from 'next/navigation';
import axios from 'axios'
import { Toaster, Toast, toast } from 'react-hot-toast';
import Link from 'next/link';
const Treasure = () => {

  const [allBounties, setAllBounties] = useState();

  useEffect(() => {
    toast.loading('Getting Data...');
    axios.get('https://www.actualone.xyz/api/treasure/bounty')
    .then(response => {
        console.log(response.data.data);
        toast.dismiss();
        setAllBounties(response.data.data);
      })
      .catch(error => {
        console.log(error)
        toast.dismiss()
        toast.error('Error updating profile');
      });
  }, [])
  
  return (
    <div className={styles.app_treasure}>
      <div className={styles.treasure_header}>
          <Image 
            src={treasure}
            width={0}
            height={0}
          />
      </div>
      <div className={styles.bountyContainer}>
        {
          allBounties?.map((item, key) => {
            return(
              <Link href={`/treasure/${item._id}`} key={key} className={styles.bounty}>
                  <Image
                    loader={({ src }) => src}
                    src={item.banner ? item.banner : treasure}
                    width={0}
                    height={0}
                  />
                  <p>{item?.title}</p>
                  <p><span style={{fontWeight: "600"}}>Reward : </span>{item?.reward}</p>
                  <p><span style={{fontWeight: "600"}}>{item?.organization === "ActualOne Protocol" ? "By" : "In partnership With :"} </span>{item?.organization}</p>
              </Link>
            )
          })
        }
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  )
}

export default Treasure