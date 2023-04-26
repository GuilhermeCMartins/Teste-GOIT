import Link from 'next/link'
import Image from 'next/image'
import styles from './Style.module.css'
import UserLogged from '@/pages/Components/Navbar/Component/UserLogged'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faUser, faWallet } from '@fortawesome/free-solid-svg-icons'
import { useAuth } from '@/hooks/AuthProvider'
import SearchBarDB from './Searchbar/Searchbar'

function NavbarDB(){
    const { user, isAuthenticated } = useAuth();

    return <>
    <div className={styles.containernav}>
        <SearchBarDB></SearchBarDB>
        <div className={styles.containerlinks}>
            <div className={styles.container}>
                <Link href="/">Home</Link>
                <Link href="/#">MKT Place</Link>
                <Link href="/#">Institucional</Link>
            </div>

            <div className={styles.container}>
                <Link href="/#" className={styles.styledbutton}>R$ Real</Link>
                <Link href="/#" className={styles.styledbutton}><Image src="/images/brasil.png" width={20} height={20} alt="Brasil"></Image>Português</Link>
            </div>
            

            <div className={styles.container}>
                <Link href="#" className={styles.styledicons}><FontAwesomeIcon icon={faWallet} /></Link> 
                {isAuthenticated ? <UserLogged name={user.name} ></UserLogged> : <Link href="/login" className={styles.styledicons}><FontAwesomeIcon icon={faUser} /></Link>  }
                <Link href="#" className={styles.styledicons}><FontAwesomeIcon icon={faCartShopping} /></Link>
            </div>
        </div>
    </div>
    </>
}

export default NavbarDB;