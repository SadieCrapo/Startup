import React from 'react';
import './backpack.css';

export function Backpack() {
  return (
    // <main className="container-fluid bg-secondary text-center">
    <main>
        <div className="shelves">
            <div className="item">
                <img alt="A rosebush" />
                <p>Rose x3</p>
            </div>
            <div className="item">
                <img alt="A daisy" />
                <p>Daisy x1</p>
            </div>
            <div className="item">
                <img alt="A haworthia plant" />
                <p>Haworthia x2</p>
            </div>
            <div className="item">
                <img alt="A monstera plant" />
                <p>Monstera x4</p>
            </div>
            <div className="item">
                <img src="./images/terracotta-pot.png" width="200" alt="A terracotta pot" />
                <p>Terracotta x1</p>
            </div>
            <div className="item">
                <img alt="A hanging planter" />
                <p>Hanging x3</p>
            </div>
            <div className="item">
                <img alt="A marble pot" />
                <p>Marble x2</p>
            </div>
            <div className="item">
                <img alt="A glass jar" />
                <p>Jar x1</p>
            </div>
        </div>
    </main>
  );
}