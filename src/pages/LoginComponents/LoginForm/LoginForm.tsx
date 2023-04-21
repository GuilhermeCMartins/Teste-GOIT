import Link from 'next/link'
import Image from 'next/image'
import style from './Login.module.css'
import InputUser from './InputUserForm';
import InputPassword from './InputPasswordForm';

function LoginForm(){
    return <>
        <div className={style.inputcontainer}>
            <InputUser></InputUser>
            <InputPassword></InputPassword>
            <Link href="#">Resetar senha</Link>
            <button>Entrar</button>
        </div>

        <div className={style.listsocials}>
            <div className={style.divider}>
                <span>continuar como</span>
            </div>
            <ul>
                
                <li><Image src={'/images/Login/facebook.svg'} width={30} height={30} alt="Facebook"></Image></li>
                <li><Image src={'/images/Login/google.svg'} width={30} height={30} alt="Instagram"></Image></li>
                <li><Image src={'/images/Login/instagram.svg'} width={30} height={30} alt="Google"></Image></li>
            </ul>
        </div>
    
    </>
}

export default LoginForm;