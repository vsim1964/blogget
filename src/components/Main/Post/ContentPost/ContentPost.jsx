import style from '../Post.module.css';
import PropTypes from 'prop-types';

const ContentPost = ({postData}) => {
  const {title, author} = postData;
  return (
    <div className={style.content}>
      <h2 className={style.title}>
        <a className={style.linkPost} href='#post'>{title}</a>
      </h2>
      <a className={style.linkAuthor} href='#post'>{author}</a>
    </div>
  );
};
export default ContentPost;

ContentPost.propTypes = {
  postData: PropTypes.object,
};
