import {Person} from './person';

export function promote(){}
// export class Teacher extends Person{
export default class Teacher extends Person{
    constructor(name, degree){
        super(name);
        this.degree = degree;
    }
    tecah(){
        console.log("teach");
    }
}
