import { useAuth } from "@/hooks/AuthProvider";
import styles from "./Styles.module.css";
import DropdownMenu from "./Menu";
import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";


interface User {
  name: string;
}

export default function UserLogged(_user: User) {
  const { user, logout } = useAuth();

  function handleLogout() {
    logout();
  }


  return (
    <>
      <div className={styles.container}>
        <Link href="/" className={styles.styledicons}><FontAwesomeIcon icon={faUser} /></Link> 
        <p className={styles.nome}>{user?.name}</p>
        <DropdownMenu></DropdownMenu>
      </div>
      
    </>
  );
}
