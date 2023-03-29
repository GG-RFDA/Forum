// React импортируем в каждый файл, где создаём компонент
import React from 'react';
// Импортируем стили
import './styles/App.css';
import {BrowserRouter, Routes, Route, Link, Navigate} from "react-router-dom";
import Navbar from "./components/UI/Navbar/Navbar";
import AppRouter from "./components/AppRouter";

function App() {
    return (
        /*
         * Чтобы реализовать routing, необходимо web-приложение обернуть в компонент BrowserRouter.
         * BrowserRouter будет отслеживать изменения пути и перерисовывать компоненты.
         * Добавляем компонент с навигационной панелью (Navbar).
         * Добавляем компонент с маршрутизацией.
         */
        <BrowserRouter>
            <Navbar/>
            <AppRouter/>
        </BrowserRouter>
    );
}

export default App;
