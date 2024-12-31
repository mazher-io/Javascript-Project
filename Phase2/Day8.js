// 1. ES6 Class and Constructor
class Person {
    #privateAge; // Private field (Encapsulation)
    static species = 'Homo Sapiens'; // Static property
  
    constructor(name, age) {
      this.name = name;
      this.#privateAge = age; // Encapsulation with private field
    }
  
    // 2. Class Methods
    greet() {
      console.log(`Hello, my name is ${this.name}.`);
    }
  
    // 3. Getters and Setters
    get age() {
      return this.#privateAge;
    }
    set age(value) {
      if (value > 0) {
        this.#privateAge = value;
      } else {
        console.log('Invalid age');
      }
    }
  
    // 4. Static Method
    static speciesInfo() {
      console.log(`We are ${this.species}.`);
    }
  }
  
  // Create an instance
  const person1 = new Person('John', 25);
  person1.greet(); // Hello, my name is John.
  console.log(person1.age); // 25
  person1.age = 30; // Update age
  console.log(person1.age); // 30
  Person.speciesInfo(); // We are Homo Sapiens.
  
  // 5. Inheritance with extends and super()
  class Employee extends Person {
    constructor(name, age, jobTitle) {
      super(name, age); // Calls parent constructor
      this.jobTitle = jobTitle;
    }
  
    // 6. Method Overriding
    greet() {
      super.greet(); // Call parent method
      console.log(`I work as a ${this.jobTitle}.`);
    }
  }
  
  const emp1 = new Employee('Alice', 28, 'Developer');
  emp1.greet();
  // Hello, my name is Alice.
  // I work as a Developer.
  
  // 7. Polymorphism
  class Animal {
    makeSound() {
      console.log('Animal makes a sound.');
    }
  }
  class Dog extends Animal {
    makeSound() {
      console.log('Bark!');
    }
  }
  class Cat extends Animal {
    makeSound() {
      console.log('Meow!');
    }
  }
  
  const animals = [new Animal(), new Dog(), new Cat()];
  animals.forEach(animal => animal.makeSound());
  // Animal makes a sound.
  // Bark!
  // Meow!
  
  // 8. Abstract Class Simulation
  class Shape {
    constructor() {
      if (new.target === Shape) {
        throw new Error('Cannot instantiate abstract class.');
      }
    }
  
    calculateArea() {
      throw new Error('Method must be implemented in child class.');
    }
  }
  
  class Circle extends Shape {
    constructor(radius) {
      super();
      this.radius = radius;
    }
  
    calculateArea() {
      return Math.PI * this.radius * this.radius;
    }
  }
  
  const circle = new Circle(10);
  console.log(circle.calculateArea()); // 314.159