import React, {useEffect, useState} from 'react';
// Импортируем хук useParams из пакета 'react-router-dom'
import {useParams} from 'react-router-dom';
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import Loader from "../components/UI/Loader/Loader";
const PostIdPage = () => {
    // Используем хук useParams
    const params = useParams()
    /*
     * Создаём состояние, в которое помещаем то, что вернёт сервер (пост по id).
     * По умолчанию будет пустой массив.
     */
    const [post, setPost] = useState({});
    // Создаём состояние под комментарии
    const [comments, setComments] = useState([]);
    /*
     * Используем хук useFetching, возвращающий массив.
     * Первый элемент - это некоторая функция.
     * Второй элемент - это индикатор загрузки.
     * Третий элемент - это ошибка.
     * В качестве параметра хук принимает callback, который будет возвращён в виде обёртки первым элементом массива.
     * Функция будет асинхронной.
     */
    const [fetchPostById, isLoading, error] = useFetching(async (id) => {
        // Внутри коллбэка используем PostService и метод getById.
        const response = await PostService.getById(id)
        setPost(response.data);
    })
    const [fetchComments, isComLoading, comError] = useFetching(async (id) => {
        const response = await PostService.getCommentsByPostId(id)
        // После того, как был получен ответ от сервера, помещаем поле data в состояние
        setComments(response.data);
    })
    // Используем хук useEffect, где на первую отрисовку компонента получаем данные с сервера
    useEffect(() => {
        /*
         * Функции, которые вернули хуки, вызываем в useEffect.
         * Получаем id из параметров в момент, когда функции вызываем.
         */
        fetchPostById(params.id)
        fetchComments(params.id)
    }, [])
    return (
        /*
         * Добавим в заголовок h1 id поста, который открыл пользователь.
         * Далее обрабатываем индикацию загрузки.
         * Создаём условие, где в случае, если isLoading равно true, показываем Loader.
         * В обратном случае показываем блок div.
         */
        <div>
            <h1>Вы открыли страницу поста с ID = {params.id}</h1>
            {isLoading
                ? <Loader/>
                // Выводим информацию о посте (id и название)
                : <div>{post.id}. {post.title}</div>
            }
            <h1>
                Комментарии
            </h1>
            {isComLoading
            /*
             * Далее необходимо отрисовать комментарии.
             * Проверяем, загружаются ли комментарии.
             * Если да, то отрисовываем Loader.
             * В обратном случае блок div.
             * С помощью функции map по массиву комментариев итерируемся.
             * Для каждого комментария создаём шаблон.
             * В блоке h5 добавляем email пользователя, а в блоке div - тело комментария.
             */
                ? <Loader/>
                : <div>
                    {comments.map(comm =>
                        <div style={{marginTop: 15}}>
                            <h5>{comm.email}</h5>
                            <div>{comm.body}</div>
                        </div>
                    )}
                </div>
            }
        </div>
    );
};

export default PostIdPage;