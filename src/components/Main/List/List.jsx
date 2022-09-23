import style from './List.module.css';
import Post from '../Post';

const List = () => {
  const listData = [
    {
      id: 111,
      thumbnails: '',
      title: 'Lorem ipsum dolor sit 1',
      author: 'Nick1',
      ups: 144,
      date: '2001-01-21T09:45:00.002'
    },
    {
      id: 222,
      thumbnails: '',
      title: 'Lorem ipsum dolor sit 2',
      author: 'Nick2',
      ups: 244,
      date: '2002-02-22T09:45:00.002'
    },
    {
      id: 333,
      thumbnails: '',
      title: 'Lorem ipsum dolor sit 3',
      author: 'Nick3',
      ups: 344,
      date: '2003-03-23T09:45:00.002'
    },
    {
      id: 444,
      thumbnails: '',
      title: 'Lorem ipsum dolor sit 4',
      author: 'Nick4',
      ups: 444,
      date: '2004-04-24T09:45:00.002'
    },
    {
      id: 555,
      thumbnails: '',
      title: 'Lorem ipsum dolor sit 5',
      author: 'Nick5',
      ups: 544,
      date: '2005-05-25T09:45:00.002'
    },
  ];

  return (
    <ul className={style.list}>
      {listData.map((listData) => (
        <Post key={listData.id} postData={listData} />
      ))}
    </ul>
  );
};
export default List;


// <ul className={style.list}>
// <Post postData={listData[0]} />
// <Post postData={listData[1]} />
// <Post postData={listData[2]} />
// <Post postData={listData[3]} />
// <Post postData={listData[4]} />
// </ul>
