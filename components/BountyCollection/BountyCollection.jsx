import styles from "./BountyCollection.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Frame309 from '../../Images/Frame309.svg'
import Frame12 from '../../Images/Frame12.svg'
import target from '../../Images/board.svg'
import app1 from '../../Images/app1.svg'
import app2 from '../../Images/app2.svg'
import app3 from '../../Images/app3.svg'
import app4 from '../../Images/app4.svg'
import app5 from '../../Images/app5.svg'
import app6 from '../../Images/app6.svg'

const BountyCollection = () => {
  const [Bounties, setBounties] = useState([
    {
      image: "/profile.png",
      title: "A website that shows all the festivals ads by big brands tag - (dev) price pool",
      tags: ["dev"],
      price_pool: "10$",
      link: "/bounty",
      Applicants : "21",
      Applicants_image : app1,
      owner: {
        profile_pic: "/profile.png",
        name: "Ashutosh Wagh",
        link: "/",
      },
    },
    {
      image: "/bounty.webp",
      title: "Prepare a case on the Role of community management in Web3(community)",
      tags: ["community"],
      price_pool: "10$",
      link: "/bounty",
      Applicants : "13",
      Applicants_image : app2,
      owner: {
        profile_pic: "/profile.png",
        name: "Ashutosh Wagh",
        link: "/",
      },
    },
    {
      image: "/blogImg.webp",
      title: "Prepare a list of communities where a SaaS brand can promote themselves(community)",
      tags: ["community"],
      price_pool: "10$",
      link: "/bounty",
      Applicants : "7",
      Applicants_image : app3,
      owner: {
        profile_pic: "/profile.png",
        name: "Ashutosh Wagh",
        link: "/",
      },
    },

    {
      image: "/blogImg.webp",
      title: "study about ActualOne’s  marketing and suggest 3 new ideas they can try to grow (marketing)",
      tags: ["marketing"],
      price_pool: "20$",
      link: "/bounty",
      Applicants : "9",
      Applicants_image : app4,
      owner: {
        profile_pic: "/profile.png",
        name: "Ashutosh Wagh",
        link: "/",
      },
    },
    {
      image: "/profile.png",
      title: "Write a linkdin post why building community important for brands in 2023 (community, web3)",
      tags: ["community", "web3"],
      price_pool: "5$",
      link: "/bounty",
      Applicants : "25",
      Applicants_image : app5,
      owner: {
        profile_pic: "/profile.png",
        name: "Ashutosh Wagh",
        link: "/",
      },
    },
    {
      image: "/bounty.webp",
      title: "Design a campaign to help a brand to its first 1000 community member(marketing)",
      tags: ["marketing"],
      price_pool: "20$",
      link: "/bounty",
      Applicants : "3",
      Applicants_image : app6,
      owner: {
        profile_pic: "/profile.png",
        name: "Ashutosh Wagh",
        link: "/",
      },
    }
  ]);

  const [SortedBounties, setSortedBounties] = useState(Bounties);

  const SortBounties = (Bounties, SortingString) => {
    if (SortingString === "All") {
      return Bounties;
    }

    const SortedBounties = [];

    for (let i = 0; i < Bounties.length; i++) {
      if (Bounties[i].tags.includes(SortingString)) {
        SortedBounties.push(Bounties[i]);
      }
    }

    return SortedBounties;
  };

  const [Tabs, setTabs] = useState(["All"]);

  const [SelectedTab, setSelectedTab] = useState(0);

  useEffect(() => {
    setTabs(["All"]);

    for (let i = 0; i < Bounties.length; i++) {
      const Bounty = Bounties[i];
      const BountyTags = Bounty.tags;

      for (let j = 0; j < BountyTags.length; j++) {
        const Tag = BountyTags[j];

        if (!Tabs.includes(Tag)) {
          setTabs((prevVal) => [...new Set([...prevVal, Tag])]);
        }
      }
    }
  }, [Bounties]);

  return (
    <div className={styles.BountyCollection}>
      <h1>Lets hunt&nbsp;<span style={{color: "#AC47FF"}}>Bounties</span>&nbsp;with us !!! <Image src={target} height={0} width={0} style={{marginLeft: "2rem"}} className={styles.h1_image}/></h1>
      <hr />
      <div className={styles.Tabs}>
        {Tabs.map((item, index) => {
          return (
            <div
              key={index}
              className={
                styles.Tab +
                " " +
                (SelectedTab === index ? styles.SelectedTab : "")
              }
              onClick={() => {
                setSortedBounties(SortBounties(Bounties, item));
                setSelectedTab(index);
              }}
            >
              {item} ({SortBounties(Bounties, item).length})
            </div>
          );
        })}
      </div>

      <div className={styles.Collection}>
        {SortedBounties.length === 0 && (
          <div style={{ fontSize: "1.5rem", marginTop: "2rem" }}>
            No Results Found
          </div>
        )}
        {SortedBounties.map((item, index) => {
          return (
            // <Link href={item.link} className={styles.Bounty} key={index}>
            //   <div
            //     className={styles.BountyImage}
            //     style={{ position: "relative" }}
            //   >
            //     <Image
            //       src={item.image}
            //       alt={"Bounty Image"}
            //       fill
            //       objectFit="cover"
            //     />
            //   </div>
            //   <div className={styles.Owner}>
            //     <div className={styles.ProfilePic}>
            //       <Image
            //         src={item.owner.profile_pic}
            //         alt={"Profile Pic"}
            //         fill
            //         objectFit="cover"
            //       />
            //     </div>
            //     <div className={styles.Name}>{item.owner.name}</div>
            //   </div>
            //   <div className={styles.BountyTitle}>{item.title}</div>
            //   <div className={styles.Tags}>
            //     {item.tags.map((tag, tagIndex) => {
            //       return (
            //         <div key={tagIndex} className={styles.Tag}>
            //           {tag}
            //         </div>
            //       );
            //     })}
            //   </div>
            //   <div className={styles.PricePool}>
            //     <div className={styles.Emoji}>🪙</div>
            //     <div className={styles.PricePoolTitle}>Price Pool:</div>
            //     <span className={styles.Price}>{item.price_pool}</span>
            //   </div>
            // </Link>
            <div className={styles.bountyCard} key={index}>
                <div className={styles.bountyHeader}>
                   <h3>
                     {item.title}
                   </h3>
                   <p>Start Date - 1st May  ·  End Date - 15th May</p>
                </div>
                <div className={styles.bountyTags}>
                  {
                    item.tags.map((tag, key) => {
                      return(
                        <p key={key}>{tag}</p>
                      )
                    })
                  }
                </div>
                <div className={styles.bountyDetails}>
                    {/* <Image src={Frame309} height={0} width={0} style={{width: "100%"}} /> */}
                    <div className={styles.bountyDetails_block}>
                        <div>
                            <p>Applicants:</p>
                            <span className={styles.applicant_span}> <Image src={item?.Applicants_image} height={0} width={0} /> <h3>+ {item.Applicants} others</h3></span>
                        </div>
                        <div>
                          <p>Price Pool:</p>
                          <h2>{item?.price_pool}</h2>
                        </div>
                    </div>
                </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BountyCollection;
