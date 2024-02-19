"use client"
import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import Image from 'next/image';
import logo from '../../assets/images/actual_logo.svg'
import name from '../../assets/images/actual_name.svg'
import { usePathname } from 'next/navigation';
import Link from 'next/link';
export default function Navbar() {

    const pathname = usePathname();
    
    const [active, setActive] = useState('home');
    useEffect(() => {
        if (pathname.split("/").includes('home')) {
            setActive('home');
        } else if (pathname.split("/").includes('about')) {
            setActive('about');
        } else if (pathname.split("/").includes('products')) {
            setActive('products');
        }
    }, [pathname]);
     
  return (
    <div className={styles.app_navbar}>
        <div className={styles.navbar_block1}>
            <Image src={logo} alt="logo" width={100} height={100} />
            <Image src={name} alt="name" width={100} height={100} />
        </div>
        {/* <div className={styles.navbar_block2}>
            <button style={{color : active === "home" ? "#b979fd" : "", borderBottom: active === "home" ? "2px solid #b979fd" : ""}}>
                <Link href={"/"}>Home</Link>
            </button>
            <button style={{color : active === "about" ? "#b979fd" : "", borderBottom: active === "about" ? "2px solid #b979fd" : ""}}>
            <Link href={"/about"}>About</Link>
            </button>
            <button style={{color : active === "products" ? "#b979fd" : "", borderBottom: active === "products" ? "2px solid #b979fd" : ""}}>
            <Link href={"/products"}>Products</Link>
            </button>
        </div> */}
        <div className={styles.navbar_block3}>
            <Link href={"https://calendly.com/apoorav_vyas"} target='_blank'>
                <button>
                    Contact
                </button>
            </Link>
        </div>
    </div>
  )
}
