import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Backpack } from './backpack/backpack';
import { Field_Guide } from './field-guide/field-guide';
import { Greenhouse } from './greenhouse/greenhouse';

export default function App() {
    return (
        <BrowserRouter>
            <div className="body bg-dark text-light">
                <header>
                    {/* <!-- Navigation elements --> */}
                    <nav>
                        <menu>
                            <li class="nav-item"><NavLink class="nav-link" to="/">Login</NavLink></li>
                            <li class="nav-item"><NavLink class="nav-link" to="greenhouse">Greenhouse</NavLink></li>
                            <li class="nav-item"><NavLink class="nav-link" to="field-guide">Field Guide</NavLink></li>
                            <li class="nav-item"><NavLink class="nav-link" to="backpack">Backpack</NavLink></li>
                        </menu>
                    </nav>
                    <div class="logo">
                        <span>LOGO</span>
                    </div>
                    <div class="welcome-user">
                        <span>Welcome MysteryUser!</span>
                    </div>

                </header>

                <Routes>
                    <Route path='/' element={<Login />} exact />
                    <Route path='/greenhouse' element={<Greenhouse />} />
                    <Route path='/field-guide' element={<Field_Guide />} />
                    <Route path='/backpack' element={<Backpack />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>

                <footer>
                    <div>
                        <span>Sadie Crapo</span>
                        <a href="https://github.com/SadieCrapo/Startup" class="text-reset">GitHub</a>
                    </div>
                </footer>

            </div>
        </BrowserRouter>
    );
}

function NotFound() {
    return <main className="container-fluid bg-secondary text-center">404: Return to sender. Address unknown.</main>;
  }