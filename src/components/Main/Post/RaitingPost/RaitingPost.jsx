import style from '../Post.module.css';
import PropTypes from 'prop-types';


const RaitingPost = ({postData}) => {
  const {ups} = postData;
  return (
    <div className={style.raiting}>
      <button className={style.up} aria-label="Повысить Рейтинг"></button>
      <p className={style.ups}>{ups}</p>
      <button className={style.down} aria-label="Понизить рейтинг"></button>
    </div>
  );
};
export default RaitingPost;

RaitingPost.propTypes = {
  postData: PropTypes.object,
};
