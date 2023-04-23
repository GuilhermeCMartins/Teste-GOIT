import { useAuth } from "@/hooks/AuthProvider";
import styles from "./Styles.module.css";
import DropdownMenu from "./Menu";


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
        <p className={styles.nome}>{user?.name}</p>
        <DropdownMenu></DropdownMenu>
      </div>
      
    </>
  );
}
