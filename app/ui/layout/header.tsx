'use client'

import Image from "next/image"
import styles from "../styles/header.module.css"
import Link from "next/link"
import { useEffect, useState } from "react";
import { Bars4Icon } from "@heroicons/react/24/outline";
import clsx from "clsx";

export default function Header() {
    const [dimensions, setDimensions] = useState({
        width: 0,
        height: 0,
      });

    const [expand, setExpand] = useState(false)
      
    // define navbar position
    useEffect(() => {
        window.onscroll = function() {onScrollY()}
        const navbar = document.getElementById('navbar')
        const sticky = navbar?.offsetTop ?? 0

        function onScrollY() {
            if (window.pageYOffset > sticky) {
                navbar?.classList.add(styles.navbar_sticky)

            } else {
                navbar?.classList.remove(styles.navbar_sticky)
            }
        }
    }, []);

    // define dimensions of screen
    useEffect(() => {
        setDimensions({ width: window.innerWidth, height: window.innerHeight });

        const handleResize = () => {
            setDimensions({ width: window.innerWidth, height: window.innerHeight });

        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    
    const whatsappDefaultMessage = 'Olá!%20Poderiam%20me%20ajudar,%20por%20favor?'

    return (
        <div id="navbar" className={`${styles.navbar}`}>
            {dimensions.width > 1100 ?
            (
                <div className="flex w-full">
                    <div className="flex w-1/2">
                        <Image
                        src="/flames-logo.png"
                        width={160}
                        height={80}
                        className="block"
                        alt="Screenshots of the dashboard project showing desktop version"
                        />
                    </div>
                    <div className="flex justify-end items-center flex-row w-3/4 text-xl font-bold color-normal">
                        <Link href="/" className="rounded-md px-3  ml-6 hover:text-yellow-500 decoration-yellow-500" aria-current="page">Home</Link>
                        <Link href="/empresa" className="rounded-md px-3 ml-6 hover:text-yellow-500 decoration-yellow-500" aria-current="page">Empresa</Link>
                        <Link href="/portfolio" className="rounded-md px-3 ml-6 hover:text-yellow-500 decoration-yellow-500" aria-current="page">Portfólio</Link>
                        <Link href="/estrutura" className="rounded-md px-3 ml-6 hover:text-yellow-500 decoration-yellow-500" aria-current="page">Estrutura</Link>
                        <Link href="/loja" className="rounded-md px-3 ml-6 hover:text-yellow-500 decoration-yellow-500" aria-current="page">Loja</Link>
                        <Link href="/contato" className="rounded-md px-3 ml-6 hover:text-yellow-500 decoration-yellow-500" aria-current="page">Contato</Link>
                        <p className="font-bold px-5"> | </p>
                        <a href="https://www.instagram.com/flamespirotecnia?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="/blank">
                            <Image
                                src="/icons-instagram.svg"
                                height={35}
                                width={35}
                                alt="Whatsapp"
                            />
                        </a>
                        <a href={`https://api.whatsapp.com/send?phone=5511999403978&text=${whatsappDefaultMessage}`} target="#blank" className="text-white">
                            <Image
                                src="/icons-whatsapp.svg"
                                height={35}
                                width={35}
                                alt="Whatsapp"
                                className="ml-6"
                            />
                        </a>
                    </div>
                </div>

            )
            :
            (
                <div className={`${styles.navbar_mobile}`}>
                    <Image
                    src="/flames-logo.png"
                    width={120}
                    height={30}
                    className="block"
                    alt="Screenshots of the dashboard project showing mobile version"
                    />
                    <Bars4Icon className={`h-6 w-6 text-gray-500`} onClick={() => setExpand(!expand)}/>
                </div>
            )
            }
            <div className={`
                ${styles.navbar_mobile_content}
                ${expand && dimensions.width < 1100 && styles.content_expand}`}>
                <Link href="/" className={`${styles.navbar_mobile_content_item} px-3  hover:text-yellow-500 decoration-yellow-500`} aria-current="page">Home</Link>
                <Link href="/empresa" className={`${styles.navbar_mobile_content_item} px-3 hover:text-yellow-500 decoration-yellow-500`} aria-current="page">Empresa</Link>
                <Link href="/portfolio" className={`${styles.navbar_mobile_content_item} px-3 hover:text-yellow-500 decoration-yellow-500`} aria-current="page">Portfólio</Link>
                <Link href="/estrutura" className={`${styles.navbar_mobile_content_item} px-3 hover:text-yellow-500 decoration-yellow-500`} aria-current="page">Estrutura</Link>
                <Link href="/loja" className={`${styles.navbar_mobile_content_item} px-3 hover:text-yellow-500 decoration-yellow-500`} aria-current="page">Loja</Link>
                <Link href="/contato" className={`${styles.navbar_mobile_content_item} px-3 hover:text-yellow-500 decoration-yellow-500`} aria-current="page">Contato</Link>
                <div className={`${styles.social_media_container}`}>
                    <a href="https://www.instagram.com/flamespirotecnia?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="/blank">
                        <Image
                            src="/icons-instagram.svg"
                            height={35}
                            width={35}
                            alt="Instagram"
                            className=""

                        />
                    </a>
                    <a href={`https://api.whatsapp.com/send?phone=5511999403978&text=${whatsappDefaultMessage}`} target="#blank" className="text-white">
                        <Image
                            src="/icons-whatsapp.svg"
                            height={35}
                            width={35}
                            alt="Whatsapp"
                            className="ml-6"
                        />
                    </a>
                </div>
        </div>
      </div>
    )
}