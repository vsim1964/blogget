import style from './Tabs.module.css';
import PropTypes from 'prop-types';

const Tabs = ({rubrics}) => (
  <ul className={style.rubrics}>
    {rubrics.map((value, id) => (
      <li key={id}>
        <button>{value}</button>
      </li>
    ))}
  </ul>
);
export default Tabs;

Tabs.propTypes = {
  rubrics: PropTypes.array,
};
