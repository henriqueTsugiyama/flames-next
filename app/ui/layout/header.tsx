'use client'

import Image from "next/image"
import styles from "../styles/header.module.css"
import Link from "next/link"
import { useEffect } from "react";

export default function Header() {
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
    
    const whatsappDefaultMessage = 'Olá!%20Poderiam%20me%20ajudar,%20por%20favor?'

    return (
        <div id="navbar" className={`${styles.navbar} flex items-center overflow-hidden z-10`}>
            <div className="flex w-1/2">
                <Image
                src="/flames-logo.png"
                width={160}
                height={80}
                className="hidden md:block"
                alt="Screenshots of the dashboard project showing desktop version"
                />
                <Image
                src="/flames-logo.png"
                width={80}
                height={30}
                className="block md:hidden"
                alt="Screenshots of the dashboard project showing mobile version"
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
}