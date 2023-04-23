import Link from "next/link";
import Image from "next/image";
import style from "./Login.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useState } from "react";
import { useAuth } from "@/hooks/AuthProvider";
import { faUser } from "@fortawesome/free-solid-svg-icons";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
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
            className={style.input}
          />
        </div>

        <div className={style.inputcontainer}>
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Password"
          className={style.input}
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
