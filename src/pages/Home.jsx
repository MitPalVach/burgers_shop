import React from 'react';
import {BurgerBlock, Categories, SortPopup} from "../components";


const Home = ({items}) => {
    const burgerElements = items.map((obj) => <BurgerBlock key={obj.id}
                                                           {...obj}
    />)

    return (
        <div className="container">
            <div className="content__top">
                {/*Categories*/}
                <Categories items={[
                    'Популярные',
                    'Комбо',
                    'Салаты',
                    'Напитки',
                    'Вегетарианские'
                ]}/>
                {/*SortPopup*/}
                <SortPopup items={[
                    'популярности',
                    'цене',
                    'алфавиту',
                ]}/>
            </div>
            <h2 className="content__title">Все бургеры</h2>
            <div className="content__items">
                {/*BurgerBlock*/}
                {burgerElements}
            </div>
        </div>
    );
};

export default Home;




