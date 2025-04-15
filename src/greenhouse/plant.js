class Plant {
    constructor(potType, plantType="", age=1, URL="") {
        this.potType = potType;
        this.plantType = plantType;
        this.age = age;
        this.URL = URL;
    }

    grow() {
        if (this.age < 4) {
            this.age += 1;
            this.setURL()
        }

    }

    setURL() {
        this.URL = "./images/" + this.potType + "/seedling.png";
    }
}

export class Monstera extends Plant {
    constructor(potType, age=1, URL="") {
        super(potType, "monstera", age, URL);
        if (this.URL == "") {
            this.setURL();
        }
    }

    setURL() {
        var imageURL = "./images/" + this.potType;
        switch (this.age) {
            case 1: this.URL = imageURL + "/sprout.png";
            break;
            case 2: this.URL = imageURL + "/seedling.png";
            break;
            case 3: this.URL = imageURL + "/monstera-young.png";
            break;
            case 4: this.URL = imageURL + "/monstera.png";
            break;
        }
    }
}

export class Daisy extends Plant {
    constructor(potType, age=1, URL="") {
        super(potType, "daisy", age, URL);
        if (this.URL == "") {
            this.setURL();
        }
    }

    setURL() {
        var imageURL = "./images/" + this.potType;
        switch (this.age) {
            case 1: this.URL = imageURL + "/sprout.png";
            break;
            case 2: this.URL = imageURL + "/seedling.png";
            break;
            case 3: this.URL = imageURL + "/daisy-young.png";
            break;
            case 4: this.URL = imageURL + "/daisy.png";
            break;
        }
    }
}

export class Laceleaf extends Plant {
    constructor(potType, age=1, URL="") {
        super(potType, "laceleaf", age, URL);
        if (this.URL == "") {
            this.setURL();
        }
    }

    setURL() {
        var imageURL = "./images/" + this.potType;
        switch (this.age) {
            case 1: this.URL = imageURL + "/sprout.png";
            break;
            case 2: this.URL = imageURL + "/seedling.png";
            break;
            case 3: this.URL = imageURL + "/laceleaf-young.png";
            break;
            case 4: this.URL = imageURL + "/laceleaf.png";
            break;
        }
    }
}