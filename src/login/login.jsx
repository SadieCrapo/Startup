import React from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';
import { Unauthenticated } from './unauthenticated';
import { Authenticated } from './authenticated';
import { AuthState } from './authState';

export function Login({userName, authState, onAuthChange}) {
    // const [greenhouseID, setID] = React.useState('');
    // const [userName, setUserName] = React.useState('');
    // const [password, setPassword] = React.useState('');
    // const navigate = useNavigate();

    // function loginUser() {
    //     localStorage.setItem('userName', userName);
    //     setUserName(userName);
    //     localStorage.setItem('greenhouseID', greenhouseID);
    //     setGreenhouseID(greenhouseID);
    //     navigate('/greenhouse');
    // }

    // function createUser() {
    //     localStorage.setItem('userName', userName);
    //     setUserName(userName);
    //     localStorage.setItem('password', password);
    //     localStorage.setItem('greenhouseID', greenhouseID);
    //     setGreenhouseID(greenhouseID);
    //     navigate('/greenhouse');
    // }

    // function userNameChange(e) {
    //     setUserName(e.target.value)
    // }

    // function idChange(e) {
    //     setID(e.target.value)
    // }
    
  return (
    // <main className="container-fluid bg-secondary text-center">
    <main className='login-main text-center'>
        <h1 className="welcome-message">Welcome to Plantr!</h1>
        {authState === AuthState.Authenticated && (
            <Authenticated 
                userName={userName}
                onLogout={() => {
                    onAuthChange(userName, AuthState.Unauthenticated);
                }}
            />
        )}
        {authState === AuthState.Unauthenticated && (
            <Unauthenticated
                userName={userName}
                onLogin={(loginUsername) => {
                    onAuthChange(loginUsername, AuthState.Authenticated);
                }}
            />
        )}
        {/* <form> */}
            {/* <div className="input-group mb-3"> */}
                {/* <input className="form-control" type="text" onChange={idChange} placeholder="Greenhouse ID" /> */}
            {/* </div> */}
            {/* <div className="input-group mb-3"> */}
                {/* <input className="form-control" type="text" onChange={userNameChange} placeholder="your@email.com" /> */}
            {/* </div> */}
            {/* <div className="input-group mb-3"> */}
                {/* <input className="form-control" type="password" placeholder="password" /> */}
            {/* </div> */}

            {/* <button type="submit" onClick={loginUser} disabled={!greenhouseID || !userName || !password} className="btn action" >Login</button> */}
            {/* <button type="submit" onClick={createUser} disabled={!greenhouseID || !userName || !password} className="btn action">Create</button> */}
        {/* </form> */}
    </main>
  );
}
