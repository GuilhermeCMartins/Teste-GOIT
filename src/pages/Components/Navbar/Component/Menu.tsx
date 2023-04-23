import { useState } from "react";
import Link from "next/link";
import styles from "./Menu.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaAngleDown } from "react-icons/fa";
import { useAuth } from "@/hooks/AuthProvider";
import { faRightFromBracket, faUser } from "@fortawesome/free-solid-svg-icons";

export default function DropdownMenu() {
  const [showMenu, setShowMenu] = useState(false);
  const { user, logout } = useAuth();

  function handleLogout() {
    logout();
  }

  const handleToggle = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <div className={styles.dropdown}>
        <button className={styles.toggleButton} onClick={handleToggle}>
          <FaAngleDown />
        </button>
        <ul className={`${styles.menu} ${showMenu ? styles.showMenu : ""}`}>
            <li>
              <Link href="/" className={styles.link} ><FontAwesomeIcon icon={faUser} />Profile</Link>
            </li>
            <li>
                <button onClick={handleLogout} className={styles.button}><FontAwesomeIcon icon={faRightFromBracket}/>Sair</button>
            </li>
        </ul>
      </div>
    </>
  );
}
