import Footer from "./Components/Footer/Footer";
import Menu from "./DashboardComponents/Menubar/Menu";
import styles from './PainelComponents/Style.module.css'

function Painel(){
    return <>
        <div className={styles.section}>
            <Menu></Menu>
            <div className={styles.container}>
                <div>
                    <div>
                        
                    </div>
                    <div>
                        
                    </div>
                </div>
            </div>
        </div>  
        <Footer></Footer>
    </>
}

export default Painel;