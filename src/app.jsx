import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Backpack } from './backpack/backpack';
import { Field_Guide } from './field-guide/field-guide';
import { Greenhouse } from './greenhouse/greenhouse';

export default function App() {
    const [email, setEmail] = React.useState(localStorage.getItem('email') || null);
    const [greenhouseID, setGreenhouseID] = React.useState(localStorage.getItem('greenhouseID') || null);
    const [test, setTest] = React.useState(localStorage.getItem('test') || null);

    function dropdown() {
        document.getElementById("menuDropdown").classList.toggle("show");
        localStorage.setItem('test', test);
        setTest("email");
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
                            {email && <li className="nav-item"><NavLink className="nav-link" to="greenhouse">Greenhouse</NavLink></li>}
                            {email && <li className="nav-item"><NavLink className="nav-link" to="field-guide">Field Guide</NavLink></li>}
                            {email && <li className="nav-item"><NavLink className="nav-link" to="backpack">Backpack</NavLink></li>}
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
                    <Route path='/' element={<Login setEmail={setEmail} setGreenhouseID={setGreenhouseID} />} exact />
                    <Route path='/greenhouse' element={<Greenhouse />} />
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