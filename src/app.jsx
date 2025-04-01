import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Backpack } from './backpack/backpack';
import { Field_Guide } from './field-guide/field-guide';
import { Greenhouse } from './greenhouse/greenhouse';
import { AuthState } from './login/authState';

export default function App() {
    const [userName, setUserName] = React.useState(localStorage.getItem('userName') || null);
    const [greenhouseID, setGreenhouseID] = React.useState(localStorage.getItem('greenhouseID') || null);
    const [test, setTest] = React.useState(localStorage.getItem('test') || null);

    const currentAuthState = userName ? AuthState.Authenticated : AuthState.Unauthenticated;
    const [authState, setAuthState] = React.useState(currentAuthState);

    const [plants, setPlants] = React.useState([]);

    function dropdown() {
        document.getElementById("menuDropdown").classList.toggle("show");
        localStorage.setItem('test', test);
        setTest("userName");
    }

    return (
        <BrowserRouter>
            {/* <div className="body bg-dark text-light"> */}
            <div className="body">
                <header className="dropdown">
                    {/* <!-- Navigation elements --> */}
                    <nav className="menu">
                        <menu id="menuDropdown">
                            <li className="nav-item"><NavLink className="nav-link" to="/">Login</NavLink></li>
                            {userName && <li className="nav-item"><NavLink className="nav-link" to="greenhouse">Greenhouse</NavLink></li>}
                            {userName && <li className="nav-item"><NavLink className="nav-link" to="field-guide">Field Guide</NavLink></li>}
                            {userName && <li className="nav-item"><NavLink className="nav-link" to="backpack">Backpack</NavLink></li>}
                        </menu>
                    </nav>
                    <div className="logo">
                        <span onClick={dropdown} className="dropbtn" >LOGO</span>
                    </div>
                    <div className="welcome-user">
                        {greenhouseID && <span>Welcome to {greenhouseID}!</span> || <span>Welcome!</span>}
                    </div>

                </header>

                <Routes>
                    <Route
                        path='/' 
                        element={
                            <Login
                                userName={userName}
                                authState={authState}
                                onAuthChange={(userName, authState) => {
                                    setAuthState(authState);
                                    setUserName(userName);
                                }}
                            />
                        }
                        exact
                    />
                    {/* <Route path='/' element={<Login setUserName={setUserName} setGreenhouseID={setGreenhouseID} />} exact /> */}
                    <Route
                        path='/greenhouse'
                        element={
                            <Greenhouse
                                plants={plants}
                            />
                        }
                    />
                    <Route path='/field-guide' element={<Field_Guide />} />
                    <Route path='/backpack' element={<Backpack />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>

                <footer>
                    <div>
                        <span>Sadie Crapo</span>
                    </div>
                    <div>
                        <a href="https://github.com/SadieCrapo/Startup" className="text-reset">GitHub</a>
                    </div>
                </footer>

            </div>
        </BrowserRouter>
    );
}

function NotFound() {
    return <main className="container-fluid bg-secondary text-center">404: Return to sender. Address unknown.</main>;
}