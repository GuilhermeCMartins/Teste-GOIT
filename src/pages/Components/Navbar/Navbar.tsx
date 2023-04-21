import Link from "next/link";
import Image from "next/image"
import Searchbar from '../Searchbar/Searchbar'
import { faUser, faWallet, faCartShopping  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './Navbar.module.css'



function Navbar(){
    return <>
            <div className={styles.containernav}>
            <div className={styles.container}>
                <Image src="/images/logos.png" width={110} height={30} alt="logo"></Image>
                <Searchbar/>
            </div>

            <div className={styles.containerlinks}>
                <Link href="/">Home</Link>
                <Link href="/#">MKT Place</Link>
                <Link href="/#">Institucional</Link>
            </div>

            <div className={styles.container}>
                <Link href="/parceiros" className={styles.styledlink}>Área de Parceiro</Link>
                <Link href="/clientes" className={styles.styledlink}>Área do Clientes</Link>
                <Link href="/#" className={styles.styledbutton}>R$ Real</Link>
                <Link href="/#" className={styles.styledbutton}><Image src="/images/brasil.png" width={20} height={20} alt="Brasil"></Image>Português</Link>
            </div>
            

            <div className={styles.container}>
                <Link href="#" className={styles.styledicons}><FontAwesomeIcon icon={faWallet} /></Link>
                <Link href="/login" className={styles.styledicons}><FontAwesomeIcon icon={faUser} /></Link>
                <Link href="#" className={styles.styledicons}><FontAwesomeIcon icon={faCartShopping} /></Link>
            </div>
        </div>
    </>
}

export default Navbar;