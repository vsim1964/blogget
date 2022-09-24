import style from '../Post.module.css';
import PropTypes from 'prop-types';
import { Text } from '../../../../UI/Text/Text';

const RaitingPost = ({postData}) => {
  const {ups} = postData;
  return (
    <div className={style.raiting}>
      <button className={style.up} aria-label="Повысить Рейтинг"></button>
      <Text
        As='p'
        size={16}
        lineHeight='18.4'
      >
        {ups}
      </Text>
      <button className={style.down} aria-label="Понизить рейтинг"></button>
    </div>
  );
};
export default RaitingPost;

RaitingPost.propTypes = {
  postData: PropTypes.object,
};
