import React from "react";
import { Layout } from '../Layout/Layout';
import { Logo } from './Logo/Logo'
import { Search } from './Search/Search'
import { Auth } from './Auth/Auth'

import style from './Header.module.css';

export const Header = () => {
  return (
    <header >
      <Layout>
        <div className={style.gridContainer}>
          <Logo />
          <h1>Заголовок</h1>
          <Search />
          <Auth />
        </div>
      </Layout>
    </header>
  )
}
