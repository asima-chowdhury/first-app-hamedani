export class Person {
    constructor(name){
        this.name = name;
    }
    walk(){
        console.log("walk");
    }
}
const person = new Person("Asima");
// person.walk();