import React from "react";
import { Link } from "react-router-dom";

import "./navigation.styles.scss";

const Navigation = (props) => (
  <div className="header">
    <div className='options'>
      <Link className="option" to="/popular">
        Популярни
      </Link>
      <Link className="option" to="/statistics">
        Статистика
      </Link>
      <Link className="option" to="/my-tests">
        Моите тестове
      </Link>
      <Link className="option" to="/create-test">
        Създай тест
      </Link>
      <Link className="option" to="/">
        Вход/изход
      </Link>
      </div>
  </div>
);

export default Navigation;
