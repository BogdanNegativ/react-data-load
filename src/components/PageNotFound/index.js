// PageNotFound.jsx
import React from 'react';

const PageNotFound = () => {
    return (
        <div>
            <h2>Error 404</h2>
            <p>Сторінка не знайдена</p>
            <p>Неправильно набрана адреса або такої сторінки на сайті більше не існує.</p>
            <a href="/">Перейти на головну сторінку</a>
        </div>
    );
}

export default PageNotFound;
