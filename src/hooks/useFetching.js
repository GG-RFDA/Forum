import {useState} from "react";
/*
 * Экспортируем стрелочную функцию.
 * Аргментом функция будет принимать callback.
 */
export const useFetching = (callback) => {
    /*
     * Создаём состояние, отвечаюшее за загрузку.
     * По умолчанию состояние будет равно false.
     */
    const [isLoading, setIsLoading] = useState(false);
    /*
     * Создаём состояние, отвечаюшее за обработку ошибок.
     * По умолчанию состояние будет пустой строкой.
     * На случай, если ошибка произошла, в состояние будем помещать текст.
     */
    const [error, setError] = useState('');
    /*
     * Создаём функцию.
     * Чтобы аргументы попали в функцию, необходимо в функции их принять.
     */
    const fetching = async (...args) => {
        // Оборачиваем в конструкцию try..catch..finally, чтобы отлавливать ошибки
        try {
            setIsLoading(true)
            /*
             * Вызываем callback, который принимаем аргументом.
             * Поскольку это будет асинхронная функция, указываем await.
             * Передаём аргументы в callback потому, что коллбэком может быть любая функция с любым количеством аргументов.
             */
            await callback(...args)
        } catch (e) {
            // Если ошибка произошла, помещаем сообщение из ошибки
            setError(e.message);
        } finally {
            /*
             * В finally, независимо от того, произошла ошибка или нет, состояние будет равно false.
             * Это сделано для того, чтобы убрать анимацию загрузки.
             */
            setIsLoading(false)
        }
    }
    // Из хука возвращаем функцию fetching (чтобы в нужном месте могли вызвать), состояние isLoading и ошибку
    return [fetching, isLoading, error]
}