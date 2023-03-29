import React from 'react';
// Импортирум стили для модального окна
import cl from './MyModal.module.css';
/*
 * Т.к. MyModal не может сам регулировать видимость, то этим будет управлять родительский компонент, в котором модальное окно используется.
 * Пропсами будем ожидать следующее:
 * 1) Пропс visible, который отвечает за видимость модального окна.
 * 2) Функцию setVisible, которая будет скрывать модальное окно при нажатии на тёмную область.
 */
const MyModal = ({children, visible, setVisible}) => {
    // Создаём переменную rootClasses и добавим класс myModal по умолчанию
    const rootClasses = [cl.myModal]
    // Создаём условие, где в случае, если модальное окно видно, то в переменную rootClasses добавляем класс active
    if (visible) {
        rootClasses.push(cl.active);
    }

    return (
        /*
         * join возвращает строку, где два класса будут склеяны по пробелу.
         * Реализуем закрытие модального окна при помощи функции setVisible в случае, если пользователь нажал на тёмную область.
         * Добавляем класс myModalContent на корневой div.
         * Реализуем предотвращение всплытия события при помощи функции stopPropagation.
         * Предыдущее действие нужно для того, чтобы при нажатии на контентную часть модальное окно не закрывалось.
         * Добавляем пропс children для того, чтобы можно было помещать в модальное окно всё, что захотим.
         */
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
            <div className={cl.myModalContent} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default MyModal;