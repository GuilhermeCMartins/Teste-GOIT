import Email from "./Email";
import styles from './Styles.module.css'

function Newsletter(){
    return <>
        <div className={styles.container}>
            <h1>Newsletter</h1>
            <p>Inscreva-se na nossa newsletter para ficar por dentro de todas  as <br/> novidades, lançamentos, drops e dicas do Chronus Sports</p>
            <Email/>
        </div>
    </>
}

export default Newsletter;