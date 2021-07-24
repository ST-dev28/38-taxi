class Taxi {
    constructor (personName) {
    this.personName = personName;
    this.kmPrice = 100;
    this.price = 0;
    }

    intro() {
        const pricePerKm = (this.kmPrice / 100).toFixed(2);
        this.pricePerKm = pricePerKm;
        console.log(`Sveiki, as ${this.personName} ir kilometro kaina su manimi yra ${pricePerKm} Eur.`);
    }

    updatePrice(newPrice) {
            this.pricePerKm  = newPrice.toFixed(2);
            console.log(`${this.personName} nustate nauja kilometro kaina - ${this.pricePerKm}Eur.`);
    }

    ride(distance) {
        this.distance = distance;
        this.price = (this.distance * this.kmPrice / 100).toFixed(2);
        //console.log(this.price);
    }

    stats() {
            const drivePrice = this.distance * this.pricePerKm;
            //console.log(drivePrice);
            this.drivePrice = drivePrice.toFixed(2);
            console.log(`${this.personName} nuvaziavo ${this.distance} km ir uzdirbo ${this.drivePrice} Eur.`);  
    }
}

module.exports = Taxi;