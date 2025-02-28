import React from 'react';
import './greenhouse.css';
// import '../app.css';

export function Greenhouse() {
  return (
    // <main className="container-fluid bg-secondary text-center">
    <main className='greenhouse-main'>
        <div className="shelves">
            <div className="plant">
                <img alt="A plant growing in a pot" />
            </div>
            <div className="plant">
                <img alt="A plant growing in a pot" />
            </div>
            <div className="plant">
                <img alt="A plant growing in a pot" />
            </div>
            <div className="plant">
                <img alt="A plant growing in a pot" />
            </div>
            <div className="plant">
                <img alt="A plant growing in a pot" />
            </div>
            <div className="plant">
                <img alt="A plant growing in a pot" />
            </div>
            <div className="plant">
                <img alt="A plant growing in a pot" />
            </div>
            <div className="plant">
                <img alt="A plant growing in a pot" />
            </div>
            <div className="plant">
                <img alt="A plant growing in a pot" />
            </div>
            <div className="plant">
                <img alt="A plant growing in a pot" />
            </div>
            <div className="plant">
                <img alt="A plant growing in a pot" />
            </div>
            <div className="plant">
                <img alt="A plant growing in a pot" />
            </div>
        </div>
        <div className="tools">
            <button className="action-button action">Plant</button>
            <button className="action-button action">Feed</button>
            <button className="action-button action">Water</button>
        </div>
    </main>
  );
}