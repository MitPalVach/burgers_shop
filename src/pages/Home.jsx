import React from 'react';
import {BurgerBlock, BurgersLoading, Categories, SortPopup} from "../components";
import {useDispatch, useSelector} from "react-redux";
import {setCategory, setSortBy} from "../store/actions/filters";
import {fetchBurgers} from "../store/actions/burgers";
import {addBurgerToCart} from "../store/actions/cart";


const categoryNames = ['Говядина', 'Курица', 'Роллы', 'Морепродукты']
const sortItems = [{name: 'популярности', type: 'popular', order: 'desc'},
    {name: 'цене', type: 'price', order: 'asc'},
    {name: 'алфавиту', type: 'name', order: 'asc'}]

const Home = () => {
    const dispatch = useDispatch()
    const items = useSelector(({burgers}) => burgers.items)
    const cartItems = useSelector(({cart}) => cart.items)
    const isLoaded = useSelector(({burgers}) => burgers.isLoaded)
    const {category, sortBy} = useSelector(({filters}) => filters)

    React.useEffect(() => {
        dispatch(fetchBurgers(sortBy, category))
    }, [category, sortBy])

    const onSelectCategory = React.useCallback((index) => {
        dispatch(setCategory(index))
    }, [])
    const onSelectSortType = React.useCallback((type) => {
        dispatch(setSortBy(type))
    }, [])
    const handleAddBurgerToCart = (obj) => {
        dispatch(addBurgerToCart(obj))
    }
    const burgerElements = items.map((obj) =>
        <BurgerBlock key={obj.id}
                     onClickAddBurger={handleAddBurgerToCart}
                     addedCount={cartItems[obj.id] && cartItems[obj.id].items.length}
                     {...obj}
        />)

    return (
        <div className="container">
            <div className="content__top">
                {/*Categories*/}
                <Categories activeCategory={category} items={categoryNames} onClickCategory={onSelectCategory}/>
                {/*SortPopup*/}
                <SortPopup activeSortType={sortBy.type} items={sortItems} onClickSortType={onSelectSortType}/>
            </div>
            <h2 className="content__title">Все бургеры</h2>
            <div className="content__items">
                {/*BurgerBlock*/}
                {isLoaded
                    ? burgerElements
                    : Array(15).fill(0).map((_, index) =>
                        <BurgersLoading key={index}/>)}
            </div>
        </div>
    );
};

export default Home;




