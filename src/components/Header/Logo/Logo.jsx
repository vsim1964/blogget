import style from './Logo.module.css';
import { ReactComponent as IconLogo } from './img/logo.svg';

export const Logo = () => (
  <a className={style.link} href="/">
    <IconLogo width={30} height={30}/>
  </a>
);
