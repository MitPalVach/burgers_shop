const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0,
}
const getTotalPrice = (arr) => arr.reduce((sum, obj) => obj.price + sum, 0);


const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_BURGER_CART': {
            const currentBurgerItems = !state.items[action.payload.id]
                ? [action.payload]
                : [...state.items[action.payload.id].items, action.payload]
            const newItems = {
                ...state.items,
                [action.payload.id]: {
                    items: currentBurgerItems,
                    totalPrice: getTotalPrice(currentBurgerItems),
                },
            }
            const items = Object.values(newItems).map(obj => obj.items)
            const allBurgers = [].concat.apply([], items)
            const totalPrice = getTotalPrice(allBurgers)
            return {
                ...state,
                items: newItems,
                totalCount: [].concat.apply([], Object.values(newItems)).length,
                totalPrice,
            }
        }

        default:
            return state
    }
}

export default cartReducer