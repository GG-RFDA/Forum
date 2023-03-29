import axios from "axios";
// Создаём класс и экспортируем его по умолчанию
export default class PostService {
    /*
     * Создаём статичную асинхронную функцию, возвращающую список постов.
     * Функция будет принимать переменную с ограниченным числом постов на одной странице и номер страницы по умолчанию.
     */
    static async getAll(limit = 10, page = 1){
        // Создаём GET-запрос
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
            // Вторым параметром передаём некоторые опции
            params: {
                _limit: limit,
                _page: page
            }
        })
        return response;
    }
    /*
     * Создаём функцию, которая будет получать посты.
     * Функция принимает параметром id поста.
     */
    static async getById(id){
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/' + id )
        return response;
    }
    /*
     * Создаём функцию, которая будет получать комментарии.
     * Функция так же, как и предыдущая, принимает параметром id поста.
     */
    static async getCommentsByPostId(id) {
         // По этому запросу будет возвращаться список комментариев к конкретному посту по id.
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        return response;
    }
}