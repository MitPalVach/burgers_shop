import React, {useState} from 'react';
import cn from 'classnames';
import Button from "../Button/Button";


const BurgerBlock = ({id, name, price, imageUrl, types, sizes, onClickAddBurger, addedCount}) => {
    const availableTypes = ['традиционный', 'острый']
    const availableSizes = ['mini', 'medium', 'KING size']
    const [activeType, setActiveType] = useState(types[0])
    const [activeSize, setActiveSize] = useState(1)

    const onAddBurger = () => {
        const obj = {
            id, name, imageUrl, price,
            size: availableSizes[activeSize],
            type: availableTypes[activeType],
        }
        onClickAddBurger(obj)
    }
    // Type
    const onSelectType = (index) => {
        setActiveType(index)
    }
    const availableTypesElements = availableTypes.map((type, index) =>
        <li key={type}
            onClick={() => onSelectType(index)}
            className={cn({
                active: activeType === index,
                disabled: !types.includes(index),
            })}
        >{type}</li>)
    // Size
    const onSelectSize = (index) => {
        setActiveSize(index)
    }
    const availableSizesElements = availableSizes.map((size, index) =>
        <li key={size}
            onClick={() => onSelectSize(index)}
            className={cn({
                active: activeSize === index,
                disabled: !sizes.includes(size),
            })}
        >{size}</li>)

    return (
        <div className="burger-block">
            <img
                className="burger-block__image"
                src={imageUrl}
                alt="burger"
            />
            <h4 className="burger-block__title">{name}</h4>
            <div className="burger-block__selector">
                <ul>
                    {availableTypesElements}
                </ul>
                <ul>
                    {availableSizesElements}
                </ul>
            </div>
            <div className="burger-block__bottom">
                <div className="burger-block__price">от {price} ₽</div>
                <Button onClick={onAddBurger}
                        className="button button--outline button--add">
                    <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                            fill="white"
                        />
                    </svg>
                    <span>Добавить</span>
                    {addedCount && <i>{addedCount}</i>}
                </Button>
            </div>
        </div>
    );
};

export default BurgerBlock;