import React from 'react';
import './field-guide.css';

export function Field_Guide() {
  return (
    // <main className="container-fluid bg-secondary text-center">
    <main className='field-guide-main'>
        <div className="list">
            <div className="list-item">
                <p>
                    <input type="checkbox" value="checkbox1" />
                    Fold Laundry
                </p>
            </div>

            <div className="list-item">
                <p>
                    <input type="checkbox" value="checkbox1" />
                    Grocery Shopping
                </p>
            </div>

            <div className="list-item">
                <p>
                    <input type="checkbox" value="checkbox1" checked />
                    <s>Study</s>
                    <br />
                    Completed by MysteryUser
                </p>
            </div>

            <div className="list-item">
                <p>
                    <input type="checkbox" value="checkbox1" checked />
                    <s>Wash Dishes</s>
                    <br />
                    Completed by SecretUser16
                </p>
            </div>
        </div>

        <div className="tools">
            <button className="action-button">New Task</button>
        </div>
    </main>
  );
}