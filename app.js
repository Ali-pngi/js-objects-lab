


const montage = {
    gameface : 'Grr 🫡',
    readyForThis: 'yeah',
    victorySound: 'taDaaa'
}

console.log(montage);
console.log(montage.victorySound);

const homeTown = {
    name: 'tunbridge wells',
    population: 115700,
    country: {
        name: 'england',
        population: 56000000,
    }
}

console.log(homeTown.name)
console.log(homeTown.population)

console.log(homeTown.country.name)
console.log(homeTown.country.population)





function character(Name, Movie) {
    this.name = Name;
    this.movie = Movie;
};


const characterArray= [new character('Gimli', 'Lord of the rings'), 
    new character('Big Lebowski', 'The Big Leboski'),
    new character('Boba Fett', 'Star wars: Empire Strikes back')]

    
    function textToLog(object){
        console.log(`I am ${object.name} from the film ${object.movie}.`);
    }
    
    console.log(characterArray[0].name)   
    characterArray.forEach(textToLog);




    const friendlyMonkey= {
        name: 'Kevin',
        species: 'cappuchin',
        foodsEaten: [],
        eatSomething(food){
            this.foodsEaten.push(food)
        },
        introduce(){
            return `Hi! My name is ${this.name}. I am a ${this.species}, and i just ate ${this.foodsEaten}.`; }
        }

    friendlyMonkey.eatSomething('fruit')

    friendlyMonkey.introduce()

    console.log(friendlyMonkey.introduce())



    const labratory = {
        monster: {},
        experiment(partName, partValue){
            this.monster[partName] = partValue;

        }

    }

    labratory.experiment('mandibles', 'nasty little jaws');
    labratory.experiment('headCount', 3);
    labratory.experiment('teeth', { colour: 'yellow', density: 13 });

    console.log(labratory.monster);