import Image from "next/image"
import styles from "../styles/header.module.css"

export default function Header() {
    return (
        <div className={`${styles.shape} p-8`}>
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
    )
}