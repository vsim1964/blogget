import style from './Tabs.module.css';
import PropTypes from 'prop-types';
import { useState } from 'react';

const Tabs = ({rubrics, setRubrics}) => {
  const [isDropdownOpen] = useState(false);

  const handleClick = id => {
    setRubrics(rubrics.filter(item => item.id !== id));
  };

  return (
    <>
      {isDropdownOpen && <ul className={style.rubrics}>
        {rubrics.map(({value, id}) => (
          <li key={id}>
            <button onClick={() => handleClick(id)}>{value}</button>
          </li>
        ))}
      </ul>}
    </>
  );
};
export default Tabs;

Tabs.propTypes = {
  rubrics: PropTypes.array,
  setRubrics: PropTypes.func,
};
