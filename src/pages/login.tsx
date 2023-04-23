import style from "./LoginComponents/LoginForm/Login.module.css";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import RegisterForm from "./LoginComponents/RegisterForm/RegisterForm";
import RegisterText from "./LoginComponents/RegisterForm/RegisterText";
import LoginForm from "./LoginComponents/LoginForm/LoginForm";
import LoginText from "./LoginComponents/LoginForm/LoginText";
import { AuthProvider } from "@/hooks/AuthProvider";

export default function Login() {
  const [isRegistering, setIsRegistering] = useState(true);

  const handleToggleForm = () => {
    setIsRegistering(!isRegistering);
  };

  return (
      <div className={style.container}>
        <div className={style.containerleft}>
          <Link href="/">
            <Image
              src="/images/Login/home.png"
              width={32}
              height={32}
              alt="Home"
            ></Image>
          </Link>
          <div className={style.footerleft}>
            <div className={style.termsleft}>
              <p>© 2022 Chronus Sports - Powered By</p>
              <h4>Mooh!Tech</h4>
            </div>
            <div className={style.terms}>
              <span>Terms and conditions</span>
              <span>Privacy policy</span>
            </div>
          </div>
        </div>
        <div className={style.containerright}>
          <div className={style.main}>
            {isRegistering ? (
              <RegisterText></RegisterText>
            ) : (
              <LoginText></LoginText>
            )}

            <div className={style.containerbutton}>
              <div className={isRegistering ? style.inactive : style.active}>
                <button
                  onClick={handleToggleForm}
                  className={isRegistering ? style.inactive : style.active}
                >
                  Log-in
                </button>
              </div>
              <div className={isRegistering ? style.active : style.inactive}>
                <button
                  onClick={handleToggleForm}
                  className={isRegistering ? style.active : style.inactive}
                >
                  Registrar
                </button>
              </div>
            </div>

            {isRegistering ? (
              <RegisterForm></RegisterForm>
            ) : (
              <LoginForm></LoginForm>
            )}
          </div>
        </div>
      </div>
  );
}
