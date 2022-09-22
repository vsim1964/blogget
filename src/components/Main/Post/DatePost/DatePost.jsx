import style from '../Post.module.css';
import PropTypes from 'prop-types';
import {formatDate} from '../../../../utils/formatDate';

const DatePost = ({postData}) => {
  const {date} = postData;
  return (
    <time className={style.date} dateTime={date}>{formatDate(date)}</time>
  );
};
export default DatePost;

DatePost.propTypes = {
  postData: PropTypes.object,
};
