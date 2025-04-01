const Pot = Object.freeze({
    MARBLE: 'marble',
    TERRACOTTA: 'terracotta',
    HANGING: 'hanging'
});

class Plant {
    constructor(type) {
        this.potType = type;
        this.age = 1;
        this.URL = "./images/" + this.potType + "/sprout.png";
    }

    grow() {
        if (this.age < 4) {
            this.age += 1;
            setURL()
        }

    }

    setURL() {
        this.URL = "./images/" + this.potType + "/seedling.png";
    }
}

class Monstera extends Plant {
    setURL() {
        imageURL = "./images/" + this.potType;
        switch (this.age) {
            case 2: this.URL = imageURL + "/seedling.png";
            case 3: this.URL = imageURL + "/monstera-young.png";
            case 4: this.URL = imageURL + "/monstera.png";
        }
    }
}

class Daisy extends Plant {
    setURL() {
        imageURL = "./images/" + this.potType;
        switch (this.age) {
            case 2: this.URL = imageURL + "/seedling.png";
            case 3: this.URL = imageURL + "/daisy-young.png";
            case 4: this.URL = imageURL + "/daisy.png";
        }
    }
}

class Daisy extends Plant {
    setURL() {
        imageURL = "./images/" + this.potType;
        switch (this.age) {
            case 2: this.URL = imageURL + "/seedling.png";
            case 3: this.URL = imageURL + "/daisy-young.png";
            case 4: this.URL = imageURL + "/daisy.png";
        }
    }
}

export class Plant {
    constructor(type) {
        this.potType = type;
        // this.species = species;
        this.age = 1;
    }

    grow() {
        if (this.age < 4) {
            this.age += 1;
        }
    }
}