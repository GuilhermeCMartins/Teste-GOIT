import Link from "next/link";
import Image from "next/image";
import style from "./Login.module.css";
import { toast } from 'react-toastify';


import { useState } from "react";
import { useAuth } from "@/hooks/AuthProvider";


function LoginForm() {
  const [errorUser, setUserError] = useState(true);
  const [errorPassword, setPasswordError] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if(!username){
        setUserError(false);
        toast.error('Preencha o campo usuário.');
        return 
    }

    if(!password){
        setPasswordError(false);
        toast.error('Preencha o campo password.');
        return 
    }

    await login(username, password);
  }

  return (
    <>
      <form className={style.inputcontainer} onSubmit={handleSubmit}>
        <div className={style.inputcontainer}>
          <input
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            placeholder="Username"
            className={errorUser ? style.input : style.inputerror}
          />
        </div>

        <div className={style.inputcontainer}>
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Password"
          className={errorPassword ? style.input : style.inputerror}
        />

        </div>
        <button type="submit">Log in</button>
      </form>

      <div className={style.listsocials}>
        <div className={style.divider}>
          <span>continuar como</span>
        </div>
        <ul>
          <Link href="#">
            <li>
              <Image
                src={"/images/Login/facebook.svg"}
                width={48}
                height={48}
                alt="Facebook"
              ></Image>
            </li>
          </Link>
          <Link href="#">
            <li>
              <Image
                src={"/images/Login/google.svg"}
                width={48}
                height={48}
                alt="Instagram"
              ></Image>
            </li>
          </Link>
          <Link href="#">
            <li>
              <Image
                src={"/images/Login/instagram.svg"}
                width={48}
                height={48}
                alt="Google"
              ></Image>
            </li>
          </Link>
        </ul>
      </div>
    </>
  );
}

export default LoginForm;
