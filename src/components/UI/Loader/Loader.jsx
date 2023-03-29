import React from 'react';
// Импортируем стили для компонента Loader
import cl from './Loader.module.css'
const Loader = () => {
    return (
        // Указываем на корневой блок div класс со стилями для компонента Loader
        <div className={cl.loader}>
            
        </div>
    );
};

export default Loader;