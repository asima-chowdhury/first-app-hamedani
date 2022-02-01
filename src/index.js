import React from 'react';
import ReactDOM from 'react-dom';

import Teacher, {promote} from './teacher';

const element = <h1>Hello World!</h1>;
// console.log(element);

ReactDOM.render(element, document.getElementById('root'));


const teacher = new Teacher("X", "B.Sc");
teacher.walk();
