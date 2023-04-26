import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import styles from './Searchbar.module.css'

const SearchBarDB = () => {
  return (
    <div className={styles.searchcontainer}>
      <FontAwesomeIcon className={styles.searchicon} icon={faSearch} />
      <input className={styles.searchinput} type="text" placeholder="Search" aria-label="Search" />
    </div>
  );
};

export default SearchBarDB;
