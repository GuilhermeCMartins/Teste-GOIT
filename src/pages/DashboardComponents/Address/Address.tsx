import { useAuth } from '@/hooks/AuthProvider';
import styles from './styles.module.css'

function Address(){
    const { user } = useAuth();

    return <>
        <div className={styles.section}>
            <div className={styles.inputtext}>
                <h2>Endereço principal</h2>
                <div className={styles.address}>
                    <p>{user?.address.zipcode}</p>
                    <p>{user?.address.street}</p>
                    <p>{user?.address.number}</p>
                    <p>{user?.address.complement}</p>
                    <p>{user?.address.neighborhood}</p>
                    <p>{user?.address.city}</p>
                    <p>{user?.address.state}</p>
                    <p>{user?.address.country}</p>
                </div>
                <div className={styles.buttons}>
                    <button>Alterar</button>
                    <button>Remover</button>    
                </div>
            </div>
            <div className={styles.inputtext}>
                <h2>Endereço de cobrança</h2>
                <div className={styles.address}>
                    <p>{user?.address.zipcode}</p>
                    <p>{user?.address.street}</p>
                    <p>{user?.address.number}</p>
                    <p>{user?.address.complement}</p>
                    <p>{user?.address.neighborhood}</p>
                    <p>{user?.address.city}</p>
                    <p>{user?.address.state}</p>
                    <p>{user?.address.country}</p>
                </div>
                <div className={styles.buttons}>
                    <button>Alterar</button>
                    <button>Remover</button>    
                </div>
            </div>
        </div>
    </>
}

export default Address;