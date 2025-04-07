const PlantComponent = ({ plant }) => {
    return (
        <div className="plant">
            <img src={plant.imageUrl} onerror="public/images/placeholder.png" alt="A plant growing in a pot" />
            <img src="404.png" onerror="this.src='alt.png';" />
        </div>
    );
};