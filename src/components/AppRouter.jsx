import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import About from "../pages/About";
import Posts from "../pages/Posts";
import Error from "../pages/Error";

const AppRouter = () => {
    return (
        /*
         * Описываем пути к страницам, где в качестве элементов указываем ранее созданные компоненты.
         * В случае, если пользователь в адресной строке укажет неверный путь к странице, то web-приложения переведёт пользователя на страницу Posts.
         */
        <Routes>
                <Route>
                    <Route path="/about" element ={<About />} />
                    <Route path="/posts" element ={<Posts />} />
                    <Route path="/error" element ={<Error />} />
                </Route>
            <Route path='*' element={<Navigate replace to="/posts" />} />
        </Routes>
    );
};

export default AppRouter;