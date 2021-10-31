const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0,
}


const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_BURGER_CART': {
            const newItems = {
                ...state.items,
                [action.payload.id]: !state.items[action.payload.id]
                    ? [action.payload]
                    : [...state.items[action.payload.id], action.payload]
            }
            const allBurgers = [].concat.apply([], Object.values(newItems)) // из newItems вытаскиваем все бургеры
            const totalPrice = allBurgers.reduce((sum, obj) => obj.price + sum, 0) // пробегаемся по всем бургерам и вытаскиваем цены и суммируем их
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