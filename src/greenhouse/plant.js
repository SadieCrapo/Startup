// const Pot = Object.freeze({
//     MARBLE: 'marble',
//     TERRACOTTA: 'terracotta',
//     HANGING: 'hanging'
// });

class Plant {
    constructor(type) {
        this.potType = type;
        this.age = 1;
        this.URL = "./images/" + this.potType + "/sprout.png";
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
    setURL() {
        var imageURL = "./images/" + this.potType;
        switch (this.age) {
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
    setURL() {
        var imageURL = "./images/" + this.potType;
        switch (this.age) {
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
    setURL() {
        var imageURL = "./images/" + this.potType;
        switch (this.age) {
            case 2: this.URL = imageURL + "/seedling.png";
            break;
            case 3: this.URL = imageURL + "/laceleaf-young.png";
            break;
            case 4: this.URL = imageURL + "/laceleaf.png";
            break;
        }
    }
}

// export class Plant {
//     constructor(type) {
//         this.potType = type;
//         // this.species = species;
//         this.age = 1;
//     }

//     grow() {
//         if (this.age < 4) {
//             this.age += 1;
//         }
//     }
// }