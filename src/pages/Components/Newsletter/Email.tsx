import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import styles from './EmailStyle.module.css'



const Email = () => {
  return (
    <div className={styles.emailcontainer}>
      <input className={styles.emailinput} type="text" placeholder="Endereço de e-mail" aria-label="Email" />
      <FontAwesomeIcon className={styles.emailicon  } icon={faArrowRight}></FontAwesomeIcon>
    </div>
  );
};

export default Email;
