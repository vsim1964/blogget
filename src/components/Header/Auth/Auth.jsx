import style from './Auth.module.css';
import { ReactComponent as IconAuth } from './img/login.svg';
export const Auth = () => (
  <button className={style.button}>
    <IconAuth className={style.svg} width={30} height={30}/>
  </button>
);
