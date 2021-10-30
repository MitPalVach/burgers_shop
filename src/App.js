import React from "react";
import './app.scss'
import {Header} from "./components";
import {Cart, Home} from "./pages";
import {Route} from "react-router-dom";


function App() {
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
