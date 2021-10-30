import axios from "axios";


export const setLoaded = (payload) => ({
    type: 'SET_LOADED',
    payload,
})


export const fetchBurgers = () => (dispatch) => {
    dispatch(setLoaded(false))
    axios.get('http://localhost:3001/burgers')
        .then(({data}) => {
            dispatch(setBurgers(data))
        })
}

export const setBurgers = (items) => ({
    type: "SET_BURGERS",
    payload: items,
})







