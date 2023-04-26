import { useAuth } from "@/hooks/AuthProvider";
import Image from "next/image";
import Link from "next/link";
import styles from "./Styles.module.css";

function CardPrincipal() {
  const { user } = useAuth();

  return (
    <>
    
      <section className={styles.container}>
      <Image
          src="/images/Dashboard/user.svg"
          width={46}
          height={58}
          alt="1"
          className={styles.image}
        ></Image>
         
        <div className={styles.usercontent}>
          <p className={styles.username}>{user?.name}</p>
          <div className={styles.id}>
            <p className={styles.userid}>{user?.id ? user.id : 'Admin'}</p>
            <p className={styles.userid}>{user?.role ? user.role : 'Admin'}</p>
          </div>
          <div className={styles.links}>
          <Link href="/">
            <Image
              src="/images/Social/facebook.png"
              width={20}
              height={20}
              alt="Facebook"
            ></Image>
          </Link>
          <Link href="/">
            <Image
              src="/images/Social/instagram.png"
              width={20}
              height={20}
              alt="Instagram"
            ></Image>
          </Link>
          <Link href="/">
            <Image
              src="/images/Social/twitter.png"
              width={20}
              height={20}
              alt="Twitter"
            ></Image>
          </Link>
        </div>
        </div>

        
      </section>
    </>
  );
}

export default CardPrincipal;
