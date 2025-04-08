import React from "react";
import { Daisy } from "./plant";
import { Monstera } from "./plant";
import { Laceleaf } from "./plant";

export function PlantingActive({plantInventory, potInventory, decreaseInventoryFromPlanting, addPlant, setPlantingInactive}) {
    const [plantType, setPlantType] = React.useState("daisy");
    const [potType, setPotType] = React.useState("terracotta");

    function plantTypeChange(e) {
        setPlantType(e.target.value)
    }

    function potTypeChange(e) {
        setPotType(e.target.value)
    }

    function createNewPlant(e) {
        e.preventDefault();
        if (plantInventory[plantType] > 0 && potInventory[potType] > 0) {
            decreaseInventoryFromPlanting(plantType, potType);
            var plant;
            switch (plantType) {
                case "daisy": plant = new Daisy(potType);
                break;
                case "monstera": plant = new Monstera(potType);
                break;
                case "laceleaf": plant = new Laceleaf(potType);
                break;
            }
            console.log(plant);
            addPlant(plant);
        }

        setPlantingInactive();
    }

    return (
        <div className="active-parent">
            <form className="planting-form" onSubmit={createNewPlant}>
                <div className="plant-list column">
                    {/* <span className="row"> */}
                        {/* <input type="radio" id="daisy" name="plant-type" value="daisy" onChange={plantTypeChange} /> */}
                        <label>
                            <input className="planting-form-input" type="radio" id="daisy" name="plant-type" value="daisy" onChange={plantTypeChange} />
                            Daisy
                        </label>
                    {/* </span> */}
                    {/* <span className="row">
                        <input type="radio" id="daisy" name="plant-type" value="daisy" onChange={plantTypeChange} />
                        <label>Daisy</label>
                    </span> */}
                    {/* <br /> */}
                    {/* <span className="row"> */}
                        {/* <input type="radio" id="monstera" name="plant-type" value="monstera" onChange={plantTypeChange} /> */}
                        <label>
                            <input className="planting-form-input" type="radio" id="monstera" name="plant-type" value="monstera" onChange={plantTypeChange} />
                            Monstera
                        </label>
                    {/* </span> */}
                    {/* <br /> */}
                    {/* <span className="row"> */}
                        {/* <input type="radio" id="laceleaf" name="plant-type" value="laceleaf" onChange={plantTypeChange} /> */}
                        <label>
                            <input className="planting-form-input" type="radio" id="laceleaf" name="plant-type" value="laceleaf" onChange={plantTypeChange} />
                            Laceleaf
                        </label>
                    {/* </span> */}
                </div>
                <div className="pot-list column">
                    {/* <span className="row"> */}
                        {/* <input type="radio" id="terracotta" name="pot-type" value="terracotta" onChange={potTypeChange} /> */}
                        <label>
                            <input className="planting-form-input" type="radio" id="terracotta" name="pot-type" value="terracotta" onChange={potTypeChange} />
                            Terracotta
                        </label>
                    {/* </span> */}
                    {/* <br /> */}
                    {/* <span className="row"> */}
                        {/* <input type="radio" id="marble" name="pot-type" value="marble" onChange={potTypeChange} /> */}
                        <label>
                            <input className="planting-form-input" type="radio" id="marble" name="pot-type" value="marble" onChange={potTypeChange} />
                            Marble
                        </label>
                    {/* </span> */}
                    {/* <br /> */}
                    {/* <span className="row"> */}
                        {/* <input type="radio" id="hanging" name="pot-type" value="hanging" onChange={potTypeChange} /> */}
                        <label>
                            <input className="planting-form-input" type="radio" id="hanging" name="pot-type" value="hanging" onChange={potTypeChange} />
                            Hanging
                        </label>
                    {/* </span> */}
                </div>
                <div className="preview column">
                    <img className="preview-image" src={`./images/${potType}/${plantType}.png`}
                        onError={(e) => {
                        e.target.src = "./images/placeholder.png";
                        }}
                        width="300"
                        alt="Plant in pot"
                    />
                    {/* <img src="./images/terracotta-pot.png" /> */}
                    {/* <img src="./images/" + potType + "/" + plantType + ".png" */}
                    <input className="btn action" type="submit" />
                </div>
            </form>
        </div>
    );
}