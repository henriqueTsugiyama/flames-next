import styles from '../styles/footer.module.css'

export default function Footer() {
    const date = new Date()
    const year = date.getFullYear()

    return (
        <footer className={`${styles.footer_container} text-red-800 text-md`}>
            <p className='text-left'>Copyright ©{year} Grupo Flames Pirotecnia</p>
            <p className='text-right'>Desenvolvido por Henrique Tsugiyama</p>
        </footer>
    )
}