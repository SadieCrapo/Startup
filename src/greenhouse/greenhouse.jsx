import React from 'react';
import './greenhouse.css';
import './plant-component';
import './plant';
// import '../app.css';

export function Greenhouse({plants}) {
    // const [plants, setPlants] = React.useState([]);
    // localStorage.setItem('plants', plants);
    // localStorage.setItem('plants', [])
    // plantList = localStorage.getItem('plants')
    //     setUserName(userName);

    const PlantComponent = ({ plant }) => {
        return (
            <div className="plant">
                <img src={plant.imageUrl} alt="A plant growing in a pot" />
            </div>
        );
    };

  return (
    // <main className="container-fluid bg-secondary text-center">
    <main className='greenhouse-main'>
            <div className="shelves">
                {plants.map((plant) => (
                <PlantComponent plant={plant} />
                ))}
            </div>
        {/* <div className="shelves">
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
        </div> */}
        <div className="tools">
            <button className="action-button action">Plant</button>
            <button className="action-button action">Feed</button>
            <button className="action-button action">Water</button>
        </div>
    </main>
  );
}