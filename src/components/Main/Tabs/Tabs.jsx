import style from './Tabs.module.css';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { assignId} from '../../../utils/generateId';
import {debounceRaf} from '../../../utils/debounce';

import { ReactComponent as ArrowIcon } from './img/arrow.svg';
import { ReactComponent as EyeIcon } from './img/eye.svg';
import { ReactComponent as PostIcon } from './img/post.svg';
import { ReactComponent as SaveIcon } from './img/save.svg';
import { ReactComponent as HomeIcon } from './img/home.svg';

const listRubrics = [
  {value: 'Главная', Icon: HomeIcon},
  {value: 'Просмотренные', Icon: EyeIcon},
  {value: 'Сохраненные', Icon: SaveIcon},
  {value: 'Мои посты', Icon: PostIcon},
].map(assignId);

const Tabs = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdown, setIsDropDown] = useState(true);

  const handleResize = () => {
    if (document.documentElement.clientWidth < 768) {
      setIsDropDown(true);
    } else {
      setIsDropDown(false);
    }
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
          Открыть меню
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
                onClick={() => {}}>
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
