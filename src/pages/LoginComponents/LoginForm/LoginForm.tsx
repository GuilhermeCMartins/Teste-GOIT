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
                
            <Link href="#"><li><Image src={'/images/Login/facebook.svg'} width={48} height={48} alt="Facebook"></Image></li></Link>
            <Link href="#"><li><Image src={'/images/Login/google.svg'} width={48} height={48} alt="Instagram"></Image></li></Link>
            <Link href="#"><li><Image src={'/images/Login/instagram.svg'} width={48} height={48} alt="Google"></Image></li></Link>
            </ul>
        </div>
    
    </>
}

export default LoginForm;