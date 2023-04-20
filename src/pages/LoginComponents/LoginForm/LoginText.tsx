import style from './Login.module.css'

function LoginText(){
    return <>
        <div className={style.logintext}>
            <h1>Bem vindo!</h1>
            <p>Por favor, faça login ou registre-se.</p>
        </div>
    
    </>
}

export default LoginText;