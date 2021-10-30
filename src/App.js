import React, {useEffect, useState} from "react";
import './app.scss'
import {Header} from "./components";
import {Cart, Home} from "./pages";
import {Route} from "react-router-dom";
import axios from "axios";


function App() {
    const [burgers, setBurgers] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3000/db.json')
            .then(resp => {
                setBurgers(resp.data.burgers)
            })
        // fetch('http://localhost:3000/db.json')  // тоже самое
        //     .then(res => res.json())
        //     .then(json => {
        //         setBurgers(json.burgers)
        //     })
    }, [])

    return (
        <div className="wrapper">
            {/*Header*/}
            <Header/>
            <div className="content">
                <Route exact path={'/'} render={() => <Home items={burgers}/>}/>
                <Route path={'/cart'} render={() => <Cart/>}/>
            </div>
        </div>


    );
}

export default App;
