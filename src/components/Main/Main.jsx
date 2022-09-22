import { Layout } from '../Layout/Layout';
import style from './Main.module.css';
import Tabs from './Tabs';
import List from './List';

export const Main = () => (
  <main>
    <Layout classname={style.main}>
      <Tabs/>
      <List/>
    </Layout>
  </main>
);
