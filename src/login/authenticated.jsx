import React from 'react';

export function Authenticated(props) {

    function logout() {
        fetch('/api/session', {
            method: 'DELETE',
        })
            .catch(() => {
                // Logout failed. Assuming offline
            })
            .finally(() => {
                localStorage.removeItem('userName');
                localStorage.removeItem('greenhouseID');
                props.onLogout();
            });
    }

    return (
        <div>
            <h4>Hello {localStorage.getItem('userName')}!</h4>
            <button onClick={() => logout()} className='btn action'>
                Logout
            </button>
        </div>
    )
}