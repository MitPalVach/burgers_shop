import React, {useState} from 'react';


const Categories = ({items}) => {
    const [activeItem, setActiveItem] = useState(null)

    const onSelectItem = (index) => {
        setActiveItem(index)
    }
    const menuElements = items.map((item, index) =>
        <li key={`${item}_${index}`}
            className={activeItem === index ? 'active' : ''}
            onClick={() => onSelectItem(index)}
        >{item}</li>)

    return (
        <div className="categories">
            <ul>
                <li className={activeItem === null ? 'active' : ''} onClick={()=> onSelectItem(null)}>Все</li>
                {menuElements}
            </ul>
        </div>
    );
};

export default Categories;