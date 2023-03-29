import React from 'react';
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        /*
         * Добавляем класс navbar в блок div.
         * Добавляем класс navbar__links в блок div.
         * Для исправления обновления страницы во время перехода по ссылке используем компонент Link из пакета react-router-dom и пропс to.
         * Все переходы по ссылкам должны происходить без обновлений, иначе будет нарушен принцип Single Page Application (SPA).
         */
        <div className ="navbar">
            <div className ="navbar__links">
                <Link to="/about">О сайте</Link>
                <Link to="/posts">Посты</Link>
            </div>
        </div>
    );
};

export default Navbar;