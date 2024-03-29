import React from 'react';
import {getPagesArray} from "../../utils/pages";
 // Для создания массива необходимо знать общее кол-во страниц, номер текущей страницы и функцию, которая изменяет номер текущей страницы
const Pagination = ({totalPages, page, changePage}) => {
    // Формируем массив
    let pagesArray = getPagesArray(totalPages);
    return (
        /*
         * На основании полученного массива можем нарисовать кнопки с номерами страниц.
         * Добавляем в блок div класс со стилями.
         * С помощью функции map по массиву итерируемся.
         */
        <div className="page__wrapper">
            {pagesArray.map(p =>
                <span
                /*
                 * Реализуем обработку нажатия на span.
                 * Вешаем слушатель события и изменяем состояние page.
                 * Аргументом передаём номер страницы, на который нажал пользователь.
                 */
                    onClick={() => changePage(p)}
                    // Добавляем ключ, получаемый по номеру страницы, т.к. он всегда уникальный
                    key={p}
                    /*
                     * Добавляем класс с условием:
                     * 1) Если элемент итерации функции map равняется номеру текущей страницы, то в добавляем стили page page__current
                     * 2) Если номера не равны, то добавляем стиль page.
                     */
                    className={page === p ? 'page page__current' : 'page'}>
                        {p}
                    </span>
            )}
        </div>
    );
};

export default Pagination;