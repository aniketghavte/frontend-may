import styles from "./BountyCollection.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const BountyCollection = () => {
  const [Bounties, setBounties] = useState([
    {
      image: "/profile.png",
      title: <>Lorem ipsum dolor sit amet conse adipisi liag aignb.</>,
      tags: ["Frontend", "Web Dev", "Full Stack", "abc", "xyz"],
      price_pool: "5 ETH",
      link: "/bounty",
      owner: {
        profile_pic: "/profile.png",
        name: "Ashutosh Wagh",
        link: "/",
      },
    },
    {
      image: "/bounty.webp",
      title: <>Lorem ipsum dolor sit amet conse adipisi liag aignb.</>,
      tags: ["Frontend", "Web Dev", "Full Stack", "abc", "xyz"],
      price_pool: "5 ETH",
      link: "/bounty",
      owner: {
        profile_pic: "/profile.png",
        name: "Ashutosh Wagh",
        link: "/",
      },
    },
    {
      image: "/blogImg.webp",
      title: <>Lorem ipsum dolor sit amet conse adipisi liag aignb.</>,
      tags: ["Frontend", "Web Dev", "Full Stack", "abc", "xyz"],
      price_pool: "5 ETH",
      link: "/bounty",
      owner: {
        profile_pic: "/profile.png",
        name: "Ashutosh Wagh",
        link: "/",
      },
    },

    {
      image: "/blogImg.webp",
      title: <>Lorem ipsum dolor sit amet conse adipisi liag aignb.</>,
      tags: ["Frontend", "Web Dev", "Full Stack", "abc", "xyz"],
      price_pool: "5 ETH",
      link: "/bounty",
      owner: {
        profile_pic: "/profile.png",
        name: "Ashutosh Wagh",
        link: "/",
      },
    },
    {
      image: "/profile.png",
      title: <>Lorem ipsum dolor sit amet conse adipisi liag aignb.</>,
      tags: ["Frontend", "Web Dev", "Full Stack", "abc", "xyz"],
      price_pool: "5 ETH",
      link: "/bounty",
      owner: {
        profile_pic: "/profile.png",
        name: "Ashutosh Wagh",
        link: "/",
      },
    },
    {
      image: "/bounty.webp",
      title: <>Lorem ipsum dolor sit amet conse adipisi liag aignb.</>,
      tags: ["Frontend", "Web Dev", "Full Stack", "abc", "xyz"],
      price_pool: "5 ETH",
      link: "/bounty",
      owner: {
        profile_pic: "/profile.png",
        name: "Ashutosh Wagh",
        link: "/",
      },
    },

    {
      image: "/bounty.webp",
      title: <>Lorem ipsum dolor sit amet conse adipisi liag aignb.</>,
      tags: ["Frontend", "Web Dev", "Full Stack", "abc", "xyz"],
      price_pool: "5 ETH",
      link: "/bounty",
      owner: {
        profile_pic: "/profile.png",
        name: "Ashutosh Wagh",
        link: "/",
      },
    },
    {
      image: "/blogImg.webp",
      title: <>Lorem ipsum dolor sit amet conse adipisi liag aignb.</>,
      tags: ["sample", "Frontend", "Web Dev", "Full Stack", "abc", "xyz"],
      price_pool: "5 ETH",
      link: "/bounty",
      owner: {
        profile_pic: "/profile.png",
        name: "Ashutosh Wagh",
        link: "/",
      },
    },
    {
      image: "/profile.png",
      title: <>Lorem ipsum dolor sit amet conse adipisi liag aignb.</>,
      tags: ["Frontend", "Web Dev", "Full Stack", "abc", "xyz"],
      price_pool: "5 ETH",
      link: "/bounty",
      owner: {
        profile_pic: "/profile.png",
        name: "Ashutosh Wagh",
        link: "/",
      },
    },
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
      <h1>BountyCollection</h1>
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
            <Link href={item.link} className={styles.Bounty} key={index}>
              <div
                className={styles.BountyImage}
                style={{ position: "relative" }}
              >
                <Image
                  src={item.image}
                  alt={"Bounty Image"}
                  fill
                  objectFit="cover"
                />
              </div>
              <div className={styles.Owner}>
                <div className={styles.ProfilePic}>
                  <Image
                    src={item.owner.profile_pic}
                    alt={"Profile Pic"}
                    fill
                    objectFit="cover"
                  />
                </div>
                <div className={styles.Name}>{item.owner.name}</div>
              </div>
              <div className={styles.BountyTitle}>{item.title}</div>
              <div className={styles.Tags}>
                {item.tags.map((tag, tagIndex) => {
                  return (
                    <div key={tagIndex} className={styles.Tag}>
                      {tag}
                    </div>
                  );
                })}
              </div>
              <div className={styles.PricePool}>
                <div className={styles.Emoji}>🪙</div>
                <div className={styles.PricePoolTitle}>Price Pool:</div>
                <span className={styles.Price}>{item.price_pool}</span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default BountyCollection;
