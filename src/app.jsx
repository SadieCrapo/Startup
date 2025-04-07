import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Backpack } from './backpack/backpack';
import { Field_Guide } from './field-guide/field-guide';
import { Greenhouse } from './greenhouse/greenhouse';
import { AuthState } from './login/authState';
import { PlantingState } from './greenhouse/plantingState';

export default function App() {
    const [userName, setUserName] = React.useState(localStorage.getItem('userName') || null);
    const [greenhouseID, setGreenhouseID] = React.useState(localStorage.getItem('greenhouseID') || null);
    const [test, setTest] = React.useState(localStorage.getItem('test') || null);

    const currentAuthState = userName ? AuthState.Authenticated : AuthState.Unauthenticated;
    const [authState, setAuthState] = React.useState(currentAuthState);

    const [plantingState, setPlantingState] = React.useState(PlantingState.Inactive);
    const [plants, setPlants] = React.useState([]);

    const [list, setList] = React.useState([]);

    const [plantInventory, setPlantInventory] = React.useState(() => {
        return {
            daisy: Number(localStorage.getItem('daisy')) || 0,
            monstera: Number(localStorage.getItem('monstera')) || 0,
            laceleaf: Number(localStorage.getItem('laceleaf')) || 0,
        };
    });

    const [potInventory, setPotInventory] = React.useState(() => {
        return {
            terracotta: Number(localStorage.getItem('terracotta')) || 0,
            marble: Number(localStorage.getItem('marble')) || 0,
            hanging: Number(localStorage.getItem('hanging')) || 0,
        };
    });

    const [foodInventory, setFoodInventory] = React.useState(() => {
        return {
            food: Number(localStorage.getItem('food')) || 0,
            water: Number(localStorage.getItem('water')) || 0,
        };
    });

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
                        <span onClick={dropdown} className="dropbtn" >
                            {/* LOGO */}
                            <img src="./images/Plantr-Logo-White.png" height="80" />
                        </span>
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
                                // onAuthChange={(userName, greenhouseID, authState) => {
                                    setAuthState(authState);
                                    // setGreenhouseID(greenhouseID);
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
                                plantingState={plantingState}
                                plantInventory={plantInventory}
                                potInventory={potInventory}
                                foodInventory={foodInventory}
                                decreaseInventoryFromFeeding={(foodType) => {
                                    setFoodInventory(prev => {
                                        return {
                                            ...prev,
                                            [foodType]: prev[foodType] - 1,
                                        }
                                    })
                                }}
                                decreaseInventoryFromPlanting={(plant, pot) => {
                                    // onAuthChange={(userName, greenhouseID, authState) => {
                                        // setAuthState(authState);
                                        // setGreenhouseID(greenhouseID);
                                        // setUserName(userName);
                                        setPlantInventory(prev => {
                                            return {
                                                ...prev,
                                                [plant]: prev[plant] - 1
                                            };
                                        });
                                        setPotInventory(prev => {
                                            return {
                                                ...prev,
                                                [pot]: prev[pot] - 1
                                            };
                                        });
                                    }}
                                addPlant={(plant) => {
                                    setPlants((prev) => [...prev, plant]);
                                    console.log(plants);
                                }}
                                setPlantingActive={() => {
                                    setPlantingState(PlantingState.Active);
                                }}
                                setPlantingInactive={() => {
                                    setPlantingState(PlantingState.Inactive);
                                }}
                            />
                        }
                    />
                    {/* <Route path='/field-guide' element={<Field_Guide />} /> */}
                    <Route
                        path='/field-guide'
                        element={
                            <Field_Guide
                                list={list}
                                addTask={(task) => {
                                    // list.push(task);
                                    // setList(list);
                                    setList([...list, task]);
                                }}
                                plantInventory={plantInventory}
                                potInventory={potInventory}
                                foodInventory={foodInventory}

                                increaseInventory={(plant, pot) => {
                                    // onAuthChange={(userName, greenhouseID, authState) => {
                                        // setAuthState(authState);
                                        // setGreenhouseID(greenhouseID);
                                        // setUserName(userName);
                                        setPlantInventory(prev => {
                                            return {
                                                ...prev,
                                                [plant]: (prev[plant] || 0) + 1
                                            };
                                        });
                                        setPotInventory(prev => {
                                            return {
                                                ...prev,
                                                [pot]: (prev[pot] || 0) + 1
                                            };
                                        });
                                        setFoodInventory(prev => {
                                            return {
                                                ...prev,
                                                food: (prev.food || 0) + 1,
                                                water: (prev.water || 0) + 1,
                                            }
                                        })
                                    }}
                            />
                        }
                    />
                    <Route
                        path='/backpack'
                        element={
                            <Backpack
                                plantInventory={plantInventory}
                                potInventory={potInventory}
                                foodInventory={foodInventory}
                            />
                        }
                    />
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