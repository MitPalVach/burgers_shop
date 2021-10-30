import React from "react";
import './app.scss'
import {Header} from "./components";
import {Cart, Home} from "./pages";
import {Route} from "react-router-dom";
import axios from "axios";
import {useDispatch} from "react-redux";
import {setBurgers} from "./store/actions/burgers";


function App() {
    const dispatch = useDispatch()

    React.useEffect(() => {
        axios.get('http://localhost:3001/burgers')
            .then(({data}) => {
                dispatch(setBurgers(data))
            })
    }, [])

    return (
        <div className="wrapper">
            {/*Header*/}
            <Header/>
            <div className="content">
                <Route exact path={'/'} component={Home}/>
                <Route path={'/cart'} component={Cart}/>
            </div>
        </div>
    );
}


export default App
