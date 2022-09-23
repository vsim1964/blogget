import { Layout } from '../Layout/Layout';
import style from './Main.module.css';
import Tabs from './Tabs';
import List from './List';
import { assignId} from '../../utils/generateId';

const listRubrics = [
  {value: 'Главная'},
  {value: 'Просмотренные'},
  {value: 'Сохраненные'},
  {value: 'Мои посты'},
].map(assignId);

export const Main = () => (
  <main>
    <Layout classname={style.main}>
      <Tabs rubrics={listRubrics}/>
      <List/>
    </Layout>
  </main>
);
