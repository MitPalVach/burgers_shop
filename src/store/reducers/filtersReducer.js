const initialState = {
    category: null,
    sortBy: 'popular',
}


const filtersReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_SORT_BY':
            return {
                ...state,
                sortBy: action.payload,
                // category: action.category,
            }
        case 'SET_CATEGORY':
            return {
                ...state,
                category: action.payload,
            }
    }
    return state
}

export default filtersReducer