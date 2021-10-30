import React from 'react';
import {Button} from '../index';
import {Link} from "react-router-dom";


const Header = () => {
    return (
        <div className="header">
            <div className="container">
                <Link to={'/'}>
                    <div className="header__logo">
                        <img width="38" src="https://www.svgrepo.com/show/32704/burger.svg" alt="Burgers logo"/>
                        <div>
                            <h1>Burgers shop</h1>
                            <p>Бургер - это тот же бутерброд, только вкуснее</p>
                        </div>
                    </div>
                </Link>
                <div className="header__cart">
                    {/*Button*/}
                    <Link to={'/cart'}>
                        <Button className={'button--cart'} children={'880 ₽'}/>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Header;