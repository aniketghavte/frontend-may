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
    toast.loading('Saving Data...');
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
                    src={item.banner ? item.banner : treasure}
                  />
                  <p>{item?.title}</p>
                  <p>{item?.pricePool}</p>
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