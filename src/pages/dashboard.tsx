import Footer from "./Components/Footer/Footer";
import Address from "./DashboardComponents/Address/Address";
import CardPrincipal from "./DashboardComponents/CardPrincipal/Card";
import CreditCard from "./DashboardComponents/CreditCard/CreditCard";
import Info from "./DashboardComponents/Info/Info";
import Menu from "./DashboardComponents/Menubar/Menu";
import NavbarDB from "./DashboardComponents/NavbarDashboard/NavbarDB";
import Preferences from "./DashboardComponents/Preferences/Preferences";
import styles from './DashboardComponents/Style.module.css'

function Dashboard(){


    return <>
    <div className={styles.page}>
        <div className={styles.section}>
            <Menu></Menu>
            <div className={styles.container}>
                <NavbarDB></NavbarDB>
                <CardPrincipal></CardPrincipal>
                <div className={styles.main}>
                    <div className={styles.info}>
                        <Info></Info>
                        <Preferences></Preferences>
                    </div>
                    <div className={styles.address}>
                        <Address></Address>
                        <CreditCard></CreditCard>
                    </div>
                </div>
            </div>
        </div>  
        <Footer></Footer>
    </div>
    </>
}

export default Dashboard;