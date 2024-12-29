// All OOP Concepts

// 1. Constructor Functions and Prototypes
function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
  // Adding a method to the prototype
  Person.prototype.greet = function () {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  };
  
  // Creating an object
  const person1 = new Person('Alice', 25);
  person1.greet(); // Hello, my name is Alice and I am 25 years old.
  
  // ------------------------------------------------------------
  
  // 2. Prototypal Inheritance
  const animal = {
    speak() {
      console.log('Animal speaks');
    }
  };
  
  const dog = Object.create(animal); // Inherit from animal
  dog.bark = function () {
    console.log('Dog barks');
  };
  
  dog.speak(); // Animal speaks
  dog.bark(); // Dog barks
  
  // ------------------------------------------------------------
  
  // 3. ES6 Classes and Syntax
  class Vehicle {
    constructor(type, speed) {
      this.type = type;
      this.speed = speed;
    }
    move() {
      console.log(`${this.type} moves at ${this.speed} km/h`);
    }
  }
  
  const car = new Vehicle('Car', 120);
  car.move(); // Car moves at 120 km/h
  
  // ------------------------------------------------------------
  
  // 4. Extending Classes (Inheritance)
  class ElectricCar extends Vehicle {
    constructor(type, speed, battery) {
      super(type, speed); // Calls parent constructor
      this.battery = battery;
    }
    charge() {
      console.log(`Charging battery to ${this.battery}%`);
    }
  }
  
  const tesla = new ElectricCar('Tesla', 150, 100);
  tesla.move(); // Tesla moves at 150 km/h
  tesla.charge(); // Charging battery to 100%
  
  // ------------------------------------------------------------
  
  // 5. Encapsulation and Abstraction
  class Account {
    #balance = 0; // Private field
  
    deposit(amount) {
      if (amount > 0) this.#balance += amount;
    }
    withdraw(amount) {
      if (amount <= this.#balance) this.#balance -= amount;
    }
    getBalance() {
      return this.#balance;
    }
  }
  
  const acc = new Account();
  acc.deposit(500);
  acc.withdraw(200);
  console.log(acc.getBalance()); // 300
  
  // ------------------------------------------------------------
  
  // 6. Polymorphism
  class Animal {
    speak() {
      console.log('Animal speaks');
    }
  }
  
  class Dog extends Animal {
    speak() {
      console.log('Dog barks');
    }
  }
  
  class Cat extends Animal {
    speak() {
      console.log('Cat meows');
    }
  }
  
  const animals = [new Animal(), new Dog(), new Cat()];
  animals.forEach(animal => animal.speak());
  
  // Animal speaks
  // Dog barks
  // Cat meows
  
  // ------------------------------------------------------------
  
  // 7. Static Methods and Properties
  class MathUtils {
    static add(a, b) {
      return a + b;
    }
    static PI = 3.14159; // Static property
  }
  
  console.log(MathUtils.add(2, 3)); // 5
  console.log(MathUtils.PI); // 3.14159
  
  // ------------------------------------------------------------
  
  // 8. Getters and Setters
  class User {
    #password;
  
    get password() {
      return '******'; // Hides actual password
    }
  
    set password(newPassword) {
      if (newPassword.length >= 6) {
        this.#password = newPassword;
        console.log('Password set successfully');
      } else {
        console.log('Password must be at least 6 characters long');
      }
    }
  }
  
  const user1 = new User();
  user1.password = 'secret'; // Password set successfully
  console.log(user1.password); // ******
  
  // ------------------------------------------------------------
  