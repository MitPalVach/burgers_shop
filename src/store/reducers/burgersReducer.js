const initialState = {
    items: [],
    isLoaded: false,
}


const burgersReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_BURGERS':
            return {
                ...state, items: action.payload
            }
    }
    return state
}

export default burgersReducer