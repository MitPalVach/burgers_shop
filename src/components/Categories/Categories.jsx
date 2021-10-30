import React from 'react';


const Categories = React.memo(function Categories({activeCategory, items, onClickCategory}) {

    const menuElements = items.map((item, index) =>
        <li key={`${item}_${index}`}
            className={activeCategory === index ? 'active' : ''}
            onClick={() => onClickCategory(index)}
        >{item}</li>)

    return (
        <div className="categories">
            <ul>
                <li className={activeCategory === null ? 'active' : ''} onClick={() =>
                    onClickCategory(null)}>Все
                </li>
                {menuElements}
            </ul>
        </div>
    );
})

export default Categories;