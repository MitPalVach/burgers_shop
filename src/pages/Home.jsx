import React from 'react';
import {BurgerBlock, Categories, SortPopup} from "../components";
import {useDispatch, useSelector} from "react-redux";
import {setCategory} from "../store/actions/filters";


const categoryNames = ['Популярные', 'Комбо', 'Салаты', 'Напитки', 'Вегетарианские']
const sortItems = [{name: 'популярности', type: 'popular'},
    {name: 'цене', type: 'price'},
    {name: 'алфавиту', type: 'alphabet'}]
const Home = () => {
    const dispatch = useDispatch()
    const items = useSelector(({burgers}) => burgers.items)

    const onSelectCategory = React.useCallback((index) => {
        dispatch(setCategory(index))
    }, [])

    const burgerElements = items.map((obj) =>
        <BurgerBlock key={obj.id} {...obj}/>)

    return (
        <div className="container">
            <div className="content__top">
                {/*Categories*/}
                <Categories items={categoryNames} onClickItem={onSelectCategory}/>
                {/*SortPopup*/}
                <SortPopup items={sortItems}/>
            </div>
            <h2 className="content__title">Все бургеры</h2>
            <div className="content__items">
                {/*BurgerBlock*/}
                {items && burgerElements}
            </div>
        </div>
    );
};

export default Home;




