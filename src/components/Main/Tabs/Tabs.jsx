import style from './Tabs.module.css';

const Tabs = () => (
  <ul className={style.tabs}>
    <li><a href="/">Главная</a></li>
    <li><a href="/">Просмотренные</a></li>
    <li><a href="/">Сохраненные</a></li>
    <li><a href="/">Мои посты</a></li>
  </ul>
);

export default Tabs;
