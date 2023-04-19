import Link from 'next/link'
import Image from 'next/image'

function LoginForm(){
    return <>
        <div>
            <input type="text" />
            <input type="text" />
            <Link href="#"></Link>
            <button>Entrar</button>
        </div>

        <div>
            <p>cotinuar como</p>
            <ul>
                <li><Image src={'/images/social/instagram.png'} width={30} height={30} alt="Facebook"></Image></li>
                <li><Image src={'/images/social/instagram.png'} width={30} height={30} alt="Instagram"></Image></li>
                <li><Image src={'/images/social/instagram.png'} width={30} height={30} alt="Google"></Image></li>
            </ul>
        </div>
    
    </>
}

export default LoginForm;