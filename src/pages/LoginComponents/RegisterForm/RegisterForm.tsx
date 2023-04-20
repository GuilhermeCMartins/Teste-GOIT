import style from './Register.module.css'
import CheckboxImage from '../Checkbox/Checkbox'

function RegisterForm(){
    return <>
        <div className={style.form}>
        <h3>Escolha o tipo de registro</h3>
            <div className={style.containerOptions}>
        <div className={style.cards}>
            <CheckboxImage src='/images/Login/Vector.png' width={63} height={82} id='Investidor'></CheckboxImage>
        </div>
        <div className={style.cards}>
            <CheckboxImage src='/images/Login/Vector2.png' width={63} height={82} id='Atleta'></CheckboxImage>
        </div>
            <div className={style.cards}>
             <CheckboxImage src='/images/Login/Vector3.png' width={63} height={82} id='Colecionador'></CheckboxImage>
            </div>
        </div>

        <button className={style.button}>Proximo</button>
        
        </div> 
    </>    
}

export default RegisterForm;