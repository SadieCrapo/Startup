import React from 'react';
import './login.css';

export function Login() {
  return (
    // <main className="container-fluid bg-secondary text-center">
    <main className='login-main text-center'>
        <h1 className="welcome-message">Welcome to Plantr!</h1>
        <form method="get" action="./greenhouse.html">
            <div className="input-group mb-3">
                {/* <!-- <span className="input-group-text">ID</span> --> */}
                <input className="form-control" type="text" placeholder="Greenhouse ID" />
            </div>
            <div className="input-group mb-3">
                {/* <!-- <span className="input-group-text">@</span> --> */}
                <input className="form-control" type="text" placeholder="your@email.com" />
            </div>
            <div className="input-group mb-3">
                {/* <!-- <span className="input-group-text">🔒</span> --> */}
                <input className="form-control" type="password" placeholder="password" />
            </div>

            <button type="submit" className="btn btn-primary">Login</button>
            <button type="submit" className="btn btn-secondary">Create</button>
        </form>
    </main>
  );
}