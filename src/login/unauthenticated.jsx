import React from 'react';
import { useNavigate } from 'react-router-dom';

export function Unauthenticated(props) {
    const [greenhouseID, setID] = React.useState('');
    const [userName, setUserName] = React.useState(localStorage.getItem('userName') || '');
    const [password, setPassword] = React.useState('');
    const navigate = useNavigate();

    async function loginOrCreate(endpoint) {
        const response = await fetch(endpoint, {
            method: 'POST',
            body: JSON.stringify({ userName: userName, password: password, greenhouse: greenhouseID }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
        if (response?.status === 200) {
            localStorage.setItem('userName', userName);
            localStorage.setItem('greenhouseID', greenhouseID);
            props.onLogin(userName);
        } else {
            const body = await response.json();
            setDisplayError(`⚠ Error: ${body.msg}`);
        }
    }

    function loginUser() {
        loginOrCreate('/api/session');
        // localStorage.setItem('userName', userName);
        // // setUserName(userName);
        // localStorage.setItem('greenhouseID', greenhouseID);
        // // setGreenhouseID(greenhouseID);
        // props.onLogin(userName);
        // // props.onLogin(userName, greenhouseID);
        navigate('/greenhouse');
    }

    function createUser() {
        loginOrCreate('/api/user');
        // localStorage.setItem('userName', userName);
        // // setUserName(userName);
        // localStorage.setItem('greenhouseID', greenhouseID);
        // // setGreenhouseID(greenhouseID);
        // props.onLogin(userName);
        // // props.onLogin(userName, greenhouseID);
        navigate('/greenhouse');
    }

    function userNameChange(e) {
        setUserName(e.target.value)
    }

    function passwordChange(e) {
        setPassword(e.target.value)
    }

    function idChange(e) {
        setID(e.target.value)
    }

    return (

        // <main className='login-main text-center'>
        // <h1 className="welcome-message">Welcome to Plantr!</h1>
        <form>
            <div className="input-group mb-3">
                {/* <!-- <span className="input-group-text">ID</span> --> */}
                <input className="form-control" type="text" onChange={idChange} placeholder="Greenhouse ID" />
            </div>
            <div className="input-group mb-3">
                {/* <!-- <span className="input-group-text">@</span> --> */}
                <input className="form-control" type="text" onChange={userNameChange} placeholder="your@email.com" />
            </div>
            <div className="input-group mb-3">
                {/* <!-- <span className="input-group-text">🔒</span> --> */}
                <input className="form-control" type="password" onChange={passwordChange} placeholder="password" />
            </div>

            <button type="submit" onClick={loginUser} disabled={!greenhouseID || !userName || !password} className="btn action" >Login</button>
            <button type="submit" onClick={createUser} disabled={!greenhouseID || !userName || !password} className="btn action">Create</button>
        </form>
    );
}