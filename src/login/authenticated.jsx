import React from 'react';

export function Authenticated(props) {

    function logout() {
        localStorage.removeItem('userName');
        props.onLogout();
    }

    return (
        <div>
            <h4>Hello {props.userName}!</h4>
            <button onClick={() => logout()} className='btn action'>
                Logout
            </button>
        </div>
    )
}