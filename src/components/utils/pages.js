// Создаём функцию getPageCount, принимающую аргументами общее кол-во элементов и лимит
export const getPageCount = (totalCount, limit) => {
    // Возвращаем необходимое количество страниц, поделив общее кол-во элементов на лимит, и округляем результат в большую сторону
    return Math.ceil(totalCount / limit)
}
// Создаём функцию, принимающую аргументом общее количество страниц
export const getPagesArray = (totalPages) => {
    // Создаём массив, который в конечном итоге будем возвращать
    let result = [];
    // Массив заполняем числами от одного до количества страниц
    for (let i = 0; i < totalPages; i++) {
        result.push(i + 1)
    }
    return result;
}