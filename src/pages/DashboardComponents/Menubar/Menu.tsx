import styles from './Style.module.css'
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

function Menu(){
    const router = useRouter();
    
    /*MUDAR TUDO PRA MAP*/

    return <>

        <div className={styles.container}>
            <div className={styles.image}>
                <Image src="/images/Dashboard/logo.svg" width={163} height={45} alt='Logo' ></Image>
            </div>
            <ul>
                <li className={router.pathname === '/painel' ? styles.active : styles.inactive}><Image src="/images/Dashboard/Paineldecontrole.svg" width={24} height={24} alt='Logo'></Image><Link href='/painel'>Painel de Controle</Link></li>
                <li className={router.pathname === '/dashboard' ? styles.active : styles.inactive}><Image src="/images/Dashboard/perfil.svg" width={24} height={24} alt='Logo'></Image><Link href='/dashboard'>Perfil</Link></li>
                <li className={router.pathname === '/' ? styles.active : styles.inactive}><Image src="/images/Dashboard/Segurança.svg" width={24} height={24} alt='Logo'></Image><Link href='/'>Segurança</Link></li>
                <li className={router.pathname === '/' ? styles.active : styles.inactive}><Image src="/images/Dashboard/Carteira.svg" width={24} height={24} alt='Logo'></Image><Link href='/'>Carteira</Link></li>
                <li className={router.pathname === '/' ? styles.active : styles.inactive}><Image src="/images/Dashboard/Cadastro.svg" width={24} height={24} alt='Logo'></Image><Link href='/'>Cadastro complementar</Link></li>
                <li className={router.pathname === '/' ? styles.active : styles.inactive}><Image src="/images/Dashboard/mkt.svg" width={24} height={24} alt='Logo'></Image><Link href='/'>MKT Place Personalizado</Link></li>
                <li className={router.pathname === '/' ? styles.active : styles.inactive}><Image src="/images/Dashboard/config.svg" width={24} height={24} alt='Logo'></Image><Link href='/'>Configurações</Link></li>
                <li className={router.pathname === '/' ? styles.active : styles.inactive}><Image src="/images/Dashboard/Integração.svg" width={24} height={24} alt='Logo'></Image><Link href='/'>Sair</Link></li>
            </ul>
        </div>
    </>
}

export default Menu;