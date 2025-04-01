const PlantComponent = ({ plant }) => {
    return (
        <div className="plant">
            <img src={plant.imageUrl} alt="A plant growing in a pot" />
        </div>
    );
};