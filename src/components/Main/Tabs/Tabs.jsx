import style from './Tabs.module.css';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { assignId} from '../../../utils/generateId';
import {debounceRaf} from '../../../utils/debounce';

import { ReactComponent as ArrowIcon } from './img/arrow.svg';
import { ReactComponent as BestIcon } from './img/best.svg';
import { ReactComponent as HotIcon } from './img/hot.svg';
import { ReactComponent as TopIcon } from './img/top.svg';
import { ReactComponent as HomeIcon } from './img/home.svg';

const listRubrics = [
  {value: 'Главная', Icon: HomeIcon},
  {value: 'Топ', Icon: TopIcon},
  {value: 'Лучшие', Icon: BestIcon},
  {value: 'Горячие', Icon: HotIcon},
].map(assignId);

const Tabs = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdown, setIsDropdown] = useState(true);
  const [isItemMenu, setItemMenu] = useState('Открыть меню');

  const handleResize = () => {
    if (document.documentElement.clientWidth < 768) {
      setIsDropdown(true);
    } else {
      setIsDropdown(false);
    }
  };

  const handleClickMenu = (value) => {
    setIsDropdownOpen(false);
    setItemMenu(value);
  };

  useEffect(() => {
    const debounceResize = debounceRaf(handleResize);
    debounceResize();
    window.addEventListener('resize', debounceResize);
    return () => {
      window.removeEventListener('resize', debounceResize);
    };
  }, []);

  return (
    <div className={style.container}>
      {isDropdown && (
        <div className={style.wrapperBtn}>
          <button
            className={style.btn}
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
            {isItemMenu}
            <ArrowIcon width={15} heigyn={15}/>
          </button>
        </div>
      )}

      {(isDropdownOpen || !isDropdown) && (
        <ul className={style.rubrics} onClick={() => setIsDropdownOpen(false)}>
          {listRubrics.map(({value, id, Icon}) => (
            <li className={style.item} key={id}>
              <button
                className={style.btn}
                onClick={() => handleClickMenu(value)}>
                {value}
                {Icon && <Icon width={25} height={25} />}
              </button>
            </li>))}
        </ul>
      )}
    </div>
  );
};
export default Tabs;

Tabs.propTypes = {
  rubrics: PropTypes.array,
  setRubrics: PropTypes.func,
};
