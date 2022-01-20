
/*
  EXAMPLE TASK:
    - Write an Airplane class whose constructor initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` property of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property gets set to true.
        + If a plane lands, its `isFlying` property gets set to false.
*/

// EXAMPLE SOLUTION CODE:
class Airplane {
  constructor(name) {
    this.name = name;
    this.isFlying = false;
  }
  takeOff() {
    this.isFlying = true;
  }
  land() {
    this.isFlying = false;
  }
}

/*
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
*/

/*
  TASK 1
    X - Write a Person class whose constructor initializes `name` and `age` from arguments.
    X - All instances of Person should also initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + When eating an edible, it should be pushed into the `stomach`.
        + The `eat` method should have no effect if there are 10 items in the `stomach`.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` should empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.stomach = [];
  }
  eat(edible) {
    if(this.stomach.length < 10) {
    this.stomach.push(edible);
    }
  }
  poop() {
    this.stomach = [];
  }
  toString() {
    return `${this.name}, ${this.age}`;
  }
}

const spencer = new Person ('Spencer', 22);

spencer.eat('🍔');
spencer.eat('🍔');

//console.log('Spencer stomach after eating:', spencer.stomach);

spencer.poop();

//console.log('Spencer stomach after pooping:', spencer.stomach);







/*
  TASK 2
    X - Write a Car class whose constructor initializes `model` and `milesPerGallon` from arguments.
    X - All instances built with Car:
        X + should initialize with a `tank` at 0
        X + should initialize with an `odometer` at 0
    X - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
    X - Give cars ability to `.drive(distance)`. The distance driven:
        X + Should cause the `odometer` to go up.
        X + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/

class Car {
  constructor(model, milesPerGallon) {
    this.model = model;
    this.milesPerGallon = milesPerGallon;
    this.tank = 0;
    this.odometer = 0;
  }
  fill(gallons) {
    this.tank = this.tank + gallons;
  }
  drive(distance) {
    const driveableMiles = this.tank * this.milesPerGallon;
    if(distance <= driveableMiles) {
      this.odometer = this.odometer + distance;
      this.tank = this.tank - (distance/this.milesPerGallon);
    } else {
      this.odometer = this.odometer + driveableMiles;
      this.tank = 0;
      return `I ran out of fuel at ${this.odometer} miles!`
    }
  }
}


const truck = new Car('Dodge', 15);
truck.fill(2);
truck.drive(10);

//console.log(truck);







/*
  TASK 3
    - Write a Lambdasian class.
    - Its constructor takes a single argument - an object with the following keys:
        + name
        + age
        + location
    - Its constructor should initialize `name`, `age` and `location` properties on the instance.
    - Instances of Lambdasian should be able to `.speak()`:
        + Speaking should return a phrase `Hello my name is {name}, I am from {location}`.
        + {name} and {location} of course come from the instance's own properties.
*/
class Lambdasian {
  constructor(arg) {
    this.name = arg.name;
    this.age = arg.age;
    this.location = arg.location;
  }
  speak() {
    return `Hello my name is ${this.name}, I am from ${this.location}`
  }
}


const lambdaPerson = new Lambdasian ({
  name: 'Spencer',
  age: '22',
  location: 'Orem'
})

//console.log(lambdaPerson.speak());


/*
  TASK 4
    X - Write an Instructor class extending Lambdasian.
    X - Its constructor takes a single argument - an object with the following keys:
        X + All the keys used to initialize instances of Lambdasian.
        X + `specialty`: what the instance of Instructor is good at, i.e. 'redux'
        X + `favLanguage`: i.e. 'JavaScript, Python, Elm etc.'
        X + `catchPhrase`: i.e. `Don't forget the homies`.
    X - The constructor calls the parent constructor passing it what it needs.
    X - The constructor should also initialize `specialty`, `favLanguage` and `catchPhrase` properties on the instance.
    - Instructor instances have the following methods:
        + `demo` receives a `subject` string as an argument and returns the phrase 'Today we are learning about {subject}' where subject is the param passed in.
        + `grade` receives a `student` object and a `subject` string as arguments and returns '{student.name} receives a perfect score on {subject}'
*/
class Instructor extends Lambdasian {
  constructor(x) {
    super(x);
    this.specialty = x.specialty;
    this.favLanguage = x.favLanguage;
    this.catchPhrase = x.catchPhrase;
  }
  demo(subject) {
    return `Today we are learning about ${subject}`
  }
  grade(student, subject) {
    //console.log('test', student.name);
    return `${student.name} receives a perfect score on ${subject}`
  }
}

const teacher = new Instructor ({
  name: 'Brooklyn',
  age: '24',
  location: 'Orem',
  specialty: 'Doing her nails',
  favLanguage: 'English',
  catchPhrase: 'I am tired'
})

// console.log(teacher.grade('John', 'Math'));





/*
  TASK 5
    X - Write a Student class extending Lambdasian.
    X - Its constructor takes a single argument -  an object with the following keys:
        X + All the keys used to initialize instances of Lambdasian.
        X + `previousBackground` i.e. what the Student used to do before BloomTech
        X + `className` i.e. CS132
        X + `favSubjects`. i.e. an array of the student's favorite subjects ['HTML', 'CSS', 'JS']
    X - The constructor calls the parent constructor passing to it what it needs.
    X - The constructor should also initialize `previousBackground`, `className` and `favSubjects` properties on the instance.
    - Student instances have the following methods:
        X + `listSubjects` a method that returns all of the student's favSubjects in a single string: `Loving HTML, CSS, JS!`.
        + `PRAssignment` a method that receives a subject as an argument and returns `student.name has submitted a PR for {subject}`
        + `sprintChallenge` similar to PRAssignment but returns `student.name has begun sprint challenge on {subject}`
*/
class Student extends Lambdasian {
  constructor(arg) {
    super(arg);
    this.previousBackground = arg.previousBackground;
    this.className = arg.className;
    this.favSubjects = arg.favSubjects;
  }
  listSubjects() {
    return `Loving ${this.favSubjects}`;
  }
  PRAssignment(subject) {
    return `${this.name} has submitted a PR for ${subject}`;
  }
  sprintChallenge(subject) {
    return `${this.name} has begun sprint challenge on ${subject}`
  }
}


const student = new Student ({
  name: 'Nate',
  age: '23',
  location: 'Bluffdale',
  previousBackground: 'Pharmasist and Insruance',
  className: 'Web52',
  favSubjects: ['Javascript', 'CSS', 'Halo']
});



//console.log(teacher.grade(student, 'English'));
// console.log(student.listSubjects());
// console.log(student.PRAssignment('Math'));
// console.log(student.sprintChallenge('History'));



/*
  TASK 6
    X- Write a ProjectManager class extending Instructor.
    X- Its constructor takes a single argument - an object with the following keys:
        X + All the keys used to initialize instances of Instructor.
        X + `gradClassName`: i.e. CS1
        X + `favInstructor`: i.e. Sean
    X - Its constructor calls the parent constructor passing to it what it needs.
    X - The constructor should also initialize `gradClassName` and `favInstructor` properties on the instance.
    - ProjectManager instances have the following methods:
        + `standUp` a method that takes in a slack channel and returns `{name} announces to {channel}, @channel standy times!`
        + `debugsCode` a method that takes in a student object and a subject and returns `{name} debugs {student.name}'s code on {subject}`
*/
class ProjectManager extends Instructor {
  constructor(argument) {
    super(argument);
    this.gradClassName = argument.gradClassName;
    this.favInstructor = argument.favInstructor;
  }
  standUp(channel) {
    return `${this.name} announces to ${channel}, @channel standy times!`
  }
  debugsCode(student, subject) {
    return `${this.name} debugs ${student.name}'s code on ${subject}`
  }
}
/*
  STRETCH PROBLEM (no tests!)
    - Extend the functionality of the Student by adding a prop called grade and setting it equal to a number between 1-100.
    - Now that our students have a grade build out a method on the Instructor (this will be used by _BOTH_ instructors and PM's) that will randomly add or subtract points to a student's grade. _Math.random_ will help.
    - Add a graduate method to a student.
      + This method, when called, will check the grade of the student and see if they're ready to graduate from BloomTech
      + If the student's grade is above a 70% let them graduate! Otherwise go back to grading their assignments to increase their score.
*/


//End of Challenge
/* 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 */
function foo(){
  return 'bar';
}

module.exports = {
  foo,
  Person,
  Car,
  Lambdasian,
  Instructor,
  Student,
  ProjectManager
}
