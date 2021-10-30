const initialState = {
    items: [],
    isLoaded: false,
}


const burgersReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_BURGERS':
            return {
                ...state,
                items: action.payload,
                isLoaded: true,
            }
        case 'SET_LOADED':
            return {
                ...state,
                isLoaded: action.payload
            }
    }
    return state
}

export default burgersReducer