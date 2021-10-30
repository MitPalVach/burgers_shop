import React from 'react';
import {BurgerBlock, BurgersLoading, Categories, SortPopup} from "../components";
import {useDispatch, useSelector} from "react-redux";
import {setCategory, setSortBy} from "../store/actions/filters";
import {fetchBurgers} from "../store/actions/burgers";


const categoryNames = ['Популярные', 'Говядина', 'Курица', 'Салаты', 'Морепродукты']
const sortItems = [{name: 'популярности', type: 'popular'},
    {name: 'цене', type: 'price'},
    {name: 'алфавиту', type: 'alphabet'}]

const Home = () => {
    const dispatch = useDispatch()
    const items = useSelector(({burgers}) => burgers.items)
    const isLoaded = useSelector(({burgers}) => burgers.isLoaded)
    const {category, sortBy} = useSelector(({filters}) => filters)

    React.useEffect(() => {
        dispatch(fetchBurgers())
    }, [category, sortBy])

    const onSelectCategory = React.useCallback((index) => {
        dispatch(setCategory(index))
    }, [])
    const onSelectSortType = React.useCallback((type) => {
        dispatch(setSortBy(type))
    }, [])

    const burgerElements = items.map((obj) =>
        <BurgerBlock key={obj.id} {...obj} isLoading={true}/>)

    return (
        <div className="container">
            <div className="content__top">
                {/*Categories*/}
                <Categories activeCategory={category} items={categoryNames} onClickCategory={onSelectCategory}/>
                {/*SortPopup*/}
                <SortPopup activeSortType={sortBy} items={sortItems} onClickSortType={onSelectSortType}/>
            </div>
            <h2 className="content__title">Все бургеры</h2>
            <div className="content__items">
                {/*BurgerBlock*/}
                {isLoaded
                    ? burgerElements
                    : Array(14).fill(0).map((_, index) =>
                        <BurgersLoading key={index}/>)}
            </div>
        </div>
    );
};

export default Home;




