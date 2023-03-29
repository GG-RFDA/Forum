import React, {useState} from "react";
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/Button/MyButton";
// Передаём в функцию пропс create
const PostForm = ({create}) => {
    /*
     * Создаём состояние по умолчанию, где возвращаем не просто строку, а объект.
     * Это сделано по нескольким причинам:
     * 1) Полей для ввода информации может быть больше, чем условно 2 поля. Формы бывают достаточно сложные.
     * 2) Чтобы не было необходимости создавать для каждого input отдельное состояние.
     * У объекта будет 2 поля: title и body, т.е. название и описание поста.
     * Инициализируем поля с пустыми строками.
     */
    const [post, setPost] = useState({title: '', body: ''})
    // Создаём стрелочную функцию добавления постов (стрелочная функция создана в качестве примера).
    const addNewPost = (e) => {
        /*
         * У event вызываем функцию preventDefault, предотвращая поведение браузера по умолчанию.
         * Это сделано для того, чтобы страница не обновлялась при добавлении новой записи.
         */
        e.preventDefault()
        // Создаём новый объект
        const newPost = {
            /*
             * Добавляем id записи, который получаем из текущей Date (id всегда должен быть уникальным).
             * Date получаем в миллисекундах.
             */
            ...post, id: Date.now()
        }
        /*
         * Производим деструктуризацию пропсов.
         * Вызываем функцию create.
         * Вызываем новый пост.
         */
        create(newPost)
        /*
         * После создания поста необходимо очищать input.
         * Для этого в следующей строчке обнуляем состояние.
         */
        setPost( {title: '',body: ''})
    }

    return (
            <form>
                <MyInput
                    /*
                     * Ниже представлены примеры управляемых компонентов.
                     * Такие компоненты принимают текущее значение в качестве пропсов и коллбэк для изменения значения.
                     * Реализуем двусторонее связывание, т.е. в MyInput связываем value с состоянием title.
                     * Двусторонее связывание данных означает следующее:
                     * 1) Данные, которые изменяем в представлении, обновляют состояние.
                     * 2) Данные в состоянии обновляют представление.
                     */
                    value={post.title}
                    /*
                     * Реализуем функцию onChange для того, чтобы отслеживать, как пользователь что-то вводит.
                     * Из event, из поля target достаём поле value.
                     * В функции onChange вызываем функцию setPost.
                     * В setPost передаём объект, в котором делаем следующее:
                     * 1) Разворачиваем старый пост (все поля, которые там есть).
                     * 2) Перезатираем нужное для нас поле конкретно в input.
                     * 3) Остальной объект оставляем в неизменном виде.
                     */
                    onChange={e => setPost({...post, title: e.target.value})}
                    type="text"
                    placeholder="Название поста"
                />
                <MyInput
                    // Аналогично реализуем тот же алгоритм, что и в первом input.
                    value={post.body}
                    onChange={e => setPost({...post, body: e.target.value})}
                    type="text"
                    placeholder="Описание поста"
                />
                <MyButton onClick={addNewPost}>Создать пост</MyButton>
            </form>
    );
};

export default PostForm;