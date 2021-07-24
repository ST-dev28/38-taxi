class Taxi {
    constructor (personName) {
    this.personName = personName;
    this.kmPrice = 100;
    this.distance = 0;
    this.priceTotal = 0;
    }

    intro() {
        console.log(`Sveiki, as ${this.personName} ir kilometro kaina su manimi yra ${(this.kmPrice / 100).toFixed(2)} Eur.`);
    }

    updatePrice(newPrice) {
            this.kmPrice  = newPrice * 100;
            console.log(`${this.personName} nustate nauja kilometro kaina - ${(this.kmPrice / 100).toFixed(2)}Eur.`);
    }

    ride(distance) {
        this.distance += distance;
        this.priceTotal += distance * this.kmPrice;
    }

    stats() {
            console.log(`${this.personName} nuvaziavo ${this.distance} km ir uzdirbo ${(this.priceTotal/ 100).toFixed(2)} Eur.`);  
    }
}

module.exports = Taxi;