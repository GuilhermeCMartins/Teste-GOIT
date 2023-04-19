import Link from "next/link";
import Image from "next/image";
import style from "./Footer.module.css";

function Footer() {
  return (
    <>
      <div className={style.footer}>
        <div className={style.container}>
          <div className={style.info}>
            <Image
              src="/images/logos.png"
              width={163}
              height={45}
              alt="Logo"
            ></Image>
            <p>
              CHRONUS Sports é a sua chance de possuir, vender e negociar NFT’s
              colecionáveis digitais oficiais dos melhores atletas profissionais
              do mundo.
            </p>
            <ul>
              <li>
                <Image
                  src="/images/Social/facebook.png"
                  width={19}
                  height={19}
                  alt="Logo"
                ></Image>
              </li>
              <li>
                <Image
                  src="/images/Social/instagram.png"
                  width={17}
                  height={17}
                  alt="Logo"
                ></Image>
              </li>
              <li>
                <Image
                  src="/images/Social/tiktok.png"
                  width={17}
                  height={20}
                  alt="Logo"
                ></Image>
              </li>
              <li>
                <Image
                  src="/images/Social/twitter.png"
                  width={19}
                  height={16}
                  alt="Logo"
                ></Image>
              </li>
              <li>
                <Image
                  src="/images/Social/linkedin.png"
                  width={17}
                  height={17}
                  alt="Logo"
                ></Image>
              </li>
            </ul>
          </div>
          <div className={style.columns}>
            <h2>Navegar</h2>
            <Link href="#">MKT Place</Link>
          </div>
          <div className={style.columns}>
            <h2>Institucional</h2>
            <Link href="#">Sobre</Link>
            <Link href="#">FAQ</Link>
            <Link href="#">Código de Conduta</Link>
            <Link href="#">Chronus Sports</Link>
          </div>
          <div className={style.columns}>
            <h2>Minha conta</h2>
            <Link href="#">Área do Cliente</Link>
            <Link href="#">Área do Parceiro</Link>
          </div>
        </div>
        <div className={style.span}>
            <span>
                © 2023 CHRONUS Sports - Powered By <Link href="#">Mooh!Tech</Link>
            </span>
            <div className={style.termos}>
                <span><Link href="#">Termos e Condições</Link></span>
                <span><Link href="#">Política de privacidade</Link></span>
            </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
