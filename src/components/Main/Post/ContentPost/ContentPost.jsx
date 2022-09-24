import style from '../Post.module.css';
import PropTypes from 'prop-types';
import {Text} from '../../../../UI/Text/Text';

const ContentPost = ({postData}) => {
  const {title, author} = postData;
  return (
    <div className={style.content}>
      <Text
        As='h2'
        size={18}
        tsize={24}
        className={style.title}>
        <Text As="a"
          className={style.linkPost}
          href='#post'>
          {title}</Text>
      </Text>
      <Text
        As='a'
        size={12}
        tsize={14}
        color='orange'
        className={style.linkAuthor}
        href='#author'>
        {author}
      </Text>
    </div>
  );
};
export default ContentPost;

ContentPost.propTypes = {
  postData: PropTypes.object,
};
