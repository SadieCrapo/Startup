import React from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';

export function Login({setEmail, setGreenhouseID}) {
    const [email, setEmailText] = React.useState('');
    const [greenhouseID, setID] = React.useState('');
    const navigate = useNavigate();

    function loginUser() {
        localStorage.setItem('email', email);
        setEmail(email);
        localStorage.setItem('greenhouseID', greenhouseID);
        setGreenhouseID(greenhouseID);
        navigate('/greenhouse');
    }

    function emailChange(e) {
        setEmailText(e.target.value)
    }

    function idChange(e) {
        setID(e.target.value)
    }
    
  return (
    // <main className="container-fluid bg-secondary text-center">
    <main className='login-main text-center'>
        <h1 className="welcome-message">Welcome to Plantr!</h1>
        <form>
            <div className="input-group mb-3">
                {/* <!-- <span className="input-group-text">ID</span> --> */}
                <input className="form-control" type="text" onChange={idChange} placeholder="Greenhouse ID" />
            </div>
            <div className="input-group mb-3">
                {/* <!-- <span className="input-group-text">@</span> --> */}
                <input className="form-control" type="text" onChange={emailChange} placeholder="your@email.com" />
            </div>
            <div className="input-group mb-3">
                {/* <!-- <span className="input-group-text">🔒</span> --> */}
                <input className="form-control" type="password" placeholder="password" />
            </div>

            <button type="submit" onClick={loginUser} className="btn btn-secondary" >Login</button>
            <button type="submit" className="btn btn-secondary">Create</button>
        </form>
    </main>
  );
}
