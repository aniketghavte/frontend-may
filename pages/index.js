import Head from "next/head";
import styles from "@/styles/Home.module.scss";
import Navbar from "@/components/Navbar/Navbar";
import HeroSection from "@/components/HeroSection/HeroSection";
import BountyCollection from "@/components/BountyCollection/BountyCollection";
import Newsletter from "@/components/Newsletter/Newsletter";
import Review_Quotes from "@/components/Review_Quotes/Review_Quotes";
import Blogs from "@/components/Blogs/Blogs";
import Footer from "@/components/Footer/Footer";
import UpdateStrip from "@/components/UpdateStrip/UpdateStrip";
import FeatureComponent from "@/components/FeatureComponent/FeatureComponent";
import Whyus from "@/components/WhyUs/Whyus";

export default function Home() {
  return (
    <>
      <Head>
        <title>ActualOne Protocol</title>
        <meta
          name="description"
          content="Hey Bro! Make sure you drink water and stay hydrated while you are busy building"
        />
        <meta
          name="keywords"
          content="actualone, actual01, actual 101, collaboration, bounty, protocol"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preload" href="path/to/karla-font.woff2" as="font" type="font/woff2" crossorigin="anonymous"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <HeroSection />
        <FeatureComponent />
        <BountyCollection />
        <Whyus/>
        {/* <Blogs /> */}
        <Review_Quotes />
        {/* <Newsletter /> */}
        <UpdateStrip />
      </main>
      <Footer />
    </>
  );
}
