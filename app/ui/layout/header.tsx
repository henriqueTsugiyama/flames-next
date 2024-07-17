'use client'

import Image from "next/image"
import styles from "../styles/header.module.css"
import Link from "next/link"
import { useEffect } from "react";


export default function Header() {
    useEffect(() => {
        console.log('on effect')
        window.onscroll = function() {onScrollY()}
        const navbar = document.getElementById('navbar')
        const mainContent = document.getElementById('main-content')
        const sticky = navbar?.offsetTop ?? 0

        function onScrollY() {
            if (window.pageYOffset > sticky) {
                navbar?.classList.add(styles.navbar_sticky)
                mainContent?.classList.add(styles.transition_scroll_down)

            } else {
                navbar?.classList.remove(styles.navbar_sticky)
                mainContent?.classList.remove(styles.transition_scroll_down)
            }
        }
    }, []);
    


    return (
        <div id="navbar" className={`${styles.navbar} flex items-center  overflow-hidden`}>
            <div className="flex w-1/2">
                <Image
                src="/flames-logo.png"
                width={120}
                height={60}
                className="hidden md:block"
                alt="Screenshots of the dashboard project showing desktop version"
                />
                <Image
                src="/flames-logo.png"
                width={120}
                height={60}
                className="block md:hidden"
                alt="Screenshots of the dashboard project showing mobile version"
                />
            
            </div>

            <div className="flex justify-end flex-row w-1/2">
                <Link href="/" className="rounded-md px-3 text-md font-medium text-red-700 ml-6 hover:text-yellow-500 decoration-yellow-500" aria-current="page">Home</Link>
                <Link href="/portfolio" className="rounded-md px-3 text-md font-medium text-red-700 ml-6 hover:text-yellow-500 decoration-yellow-500" aria-current="page">Portfolio</Link>
                <Link href="/structure" className="rounded-md px-3 text-md font-medium text-red-700 ml-6 hover:text-yellow-500 decoration-yellow-500" aria-current="page">Estrutura</Link>
                <Link href="/company" className="rounded-md px-3 text-md font-medium text-red-700 ml-6 hover:text-yellow-500 decoration-yellow-500" aria-current="page">Empresa</Link>
                <Link href="/contact" className="rounded-md px-3 text-md font-medium text-red-700 ml-6 hover:text-yellow-500 decoration-yellow-500" aria-current="page">Contato</Link>
            </div>
      </div>
    )
}