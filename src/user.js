class User {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

function printName(user){
    console.log(`Your name is: ${user.name}`);
}

function printAge(user){
    console.log(`Your age is: ${user.age}`);
}