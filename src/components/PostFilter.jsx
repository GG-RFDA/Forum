import React from 'react';
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";
// Пропсами принимаем filter (это будет некоторый объект) и функцию setFilter, которая будет изменять фильтр
const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
            <MyInput
                /*
                 * Делаем MyInput управляемым.
                 * Как value для input получаем поле из объекта filter.
                 */
                value={filter.query}
                /*
                 * Реализуем двусторонее связывание.
                 * Возвращаем все поля из объекта, но заменяем нужное. В данном случае заменяем query.
                 */
                onChange={e => setFilter({...filter, query: e.target.value})}
                placeholder="Поиск..."
            />
            <MySelect
                /*
                 * Делаем MySelect управляемым.
                 * Делаем с value то же самое, что и в MyInput.
                 */
                value={filter.sort}
                // В случае с MySelect возвращаем не event, а уже выбранный алгоритм сортировки.
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                defaultValue="Сортировка"
                // Добавляем опции для сортировки, содержащие значение и текст
                options={[
                    {value: 'title', name: 'По названию'},
                    {value: 'body', name: 'По описанию'},
                ]}
            />
        </div>
    );
};

export default PostFilter;