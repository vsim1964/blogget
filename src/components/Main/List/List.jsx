import style from './List.module.css';
import Post from '../Post';

const List = () => {
  const postData = {
    thumbnails: '',
    title: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique, natus ipsa. Officiis, corrupti fugiat voluptatum harum, libero ex molestias saepe velit neque nihil, distinctio mollitia repudiandae amet dolore quasi atque.',
    author: 'Nick',
    ups: 244,
    date: '2002-02-24T09:45:00.002'
  };

  return (
    <ul className={style.list}>
      <Post postData={postData} />
    </ul>
  );
};

export default List;
