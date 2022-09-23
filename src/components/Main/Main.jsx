import { Layout } from '../Layout/Layout';
import style from './Main.module.css';
import Tabs from './Tabs';
import List from './List';
import { assignId} from '../../utils/generateId';
import { useState } from 'react';

const listRubrics = [
  {value: 'Главная'},
  {value: 'Просмотренные'},
  {value: 'Сохраненные'},
  {value: 'Мои посты'},
].map(assignId);

export const Main = () => {
  const [rubrics, setRubrics] = useState(listRubrics);
  const addRubric = () => {
    // setRubrics(rubrics.concat(assignId({value: 'Новая рубрика'})));
    setRubrics([...rubrics, assignId({value: 'Новая рубрика'})]);
  };
  return (
    <main>
      <Layout classname={style.main}>
        <button onClick={addRubric}>addRubric</button>
        <Tabs rubrics={rubrics} setRubrics={setRubrics}/>
        <List/>
      </Layout>
    </main>
  );
};
