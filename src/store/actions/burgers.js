import axios from "axios";


export const setLoaded = (payload) => ({
    type: 'SET_LOADED',
    payload,
})

export const fetchBurgers = (sortBy, category) => (dispatch) => {
    dispatch(setLoaded(false))
    axios.get(`http://localhost:3001/burgers?${category !== null ? `category=${category}` : ''
    }&_sort=${sortBy.type}&_order=${sortBy.order}`)
        .then(({data}) => {
            dispatch(setBurgers(data))
        })
}

export const setBurgers = (items) => ({
    type: "SET_BURGERS",
    payload: items,
})







