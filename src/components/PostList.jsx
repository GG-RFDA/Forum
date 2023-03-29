import React from 'react';
import PostItem from "./PostItem";
import {CSSTransition, TransitionGroup} from "react-transition-group";
/*
 * Поскольку пропсы - это объекты, то сразу можно сделать деструктуризацию и вытащить нужные поля.
 * Чтобы заголовок постов был динамический (т.е. мог изменяться), добавляем пропс title в PostList.
 */
const PostList = ({posts, title, remove}) => {
    /*
     * Добавляем надпись, которая появляется в случае, если все посты удалены.
     * Подобный функционал называется "условная отрисовка".
     * Указываем условие, т.е. проверяем длину массива.
     */
    if(!posts.length) {
        return (
            /*
             * Воспользуемся заголовком h1.
             * Выравниваем надпись по центру.
             * Если в массиве ничего нет, то возвращается надпись ниже.
             */
            <h1 style={{textAlign: 'center'}}>
                Посты не найдены!
            </h1>
        )
    }
    return (
        /*
         * Прописываем title в теге h1.
         * Помимо самого поста, передаём в PostItem номер элемента в массиве.
         * Получаем номер элемента из индекса и добавляем единицу к индексу, чтобы отчёт начинался не с нуля.
         * Добавляем компонент TransitionGroup для создания плавных анимаций.
         */
        <div>
            <h1 style={{textAlign: 'center'}}>
                {title}
            </h1>
            <TransitionGroup>
                {posts.map((post, index) =>
                    // Добавляем компонент CSSTransition, позволяющий контролировать скорость анимации
                    <CSSTransition
                        // Ключ необходимо использовать на корневом элементе списка
                        key={post.id}
                        timeout={500}
                        // Указываем классовое имя (оно нужно для написания стилей)
                        classNames="post"
                    >
                    <PostItem remove = {remove} number={index + 1} post={post} />
                    </CSSTransition>
                )}
            </TransitionGroup>
        </div>
    );
};

export default PostList;