import React from 'react';
import MyButton from "./UI/Button/MyButton";
// Импортируем хук useNavigate
import {useNavigate} from 'react-router-dom';
/*
 * Компонент может принимать в себя некоторые входные данные. Эти данные в контексте React называются пропсами.
 * Пропсы - это некоторые аргументы/параметры, которые может принимать компонент извне, но обмен пропсами идет сверху вниз.
 * Для большей наглядности в блоке strong прописываем id, чтобы сразу видели, что страница изменилась.
 */
const PostItem = (props) => {
    // Переходы на другие страницы можно осуществлять при помощи специального объекта
    const router = useNavigate()
    return (
        /*
         * Добавляем в блоки div классы post, post__content и post__btns.
         * Помещаем в тег strong id и название поста.
         * Тег strong необходим для того, чтобы указать важность отмеченного текста.
         * В блок div помещаем содержание поста.
         * Создаём кнопки и вешаем на них слушатели событий.
         */
        <div className="post">
            <div className="post__content">
                <strong>{props.post.id}. {props.post.title}</strong>
                <div>
                    {props.post.body}
                </div>
            </div>
            <div className="post__btns">
                <MyButton onClick={() => router(`/posts/${props.post.id}`)}>
                    Открыть
                </MyButton>
                <MyButton onClick={() => props.remove(props.post)}>
                    Удалить
                </MyButton>
            </div>
        </div>
    );
}

export default PostItem;