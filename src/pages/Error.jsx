import React from 'react';

const Error = () => {
    return (
        // Добавляем надпись в теге h1 и задаём красный цвет
        <div>
            <h1 style={{color: 'red'}}>
                Вы перешли на несуществующую страницу!
            </h1>
        </div>
    );
};

export default Error;