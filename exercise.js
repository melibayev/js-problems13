// 1
class Triangle {
    #leftSide;
    #rightSide;
    #width;
  
    getLeftSide() {
      return this.#leftSide;
    }
  
    getRightSide() {
      return this.#rightSide;
    }
  
    getWidth() {
      return this.#width;
    }
  
    setSides(a, b, c) {
      this.#leftSide = a;
      this.#rightSide = b;
      this.#width = c;
    }
  }

  
//  2
class Employee {
    #id;
    #firstName;
    #lastName;
    #salary;
  
    getId() {
      return this.#id;
    }
  
    getFirstName() {
      return this.#firstName;
    }
  
    getLastName() {
      return this.#lastName;
    }
  
    getSalary() {
      return this.#salary;
    }
  
    setId(id) {
      this.#id = id;
    }
  
    setFirstName(fName) {
      this.#firstName = fName;
    }
  
    setLastName(lName) {
      this.#lastName = lName;
    }
  
    setSalary(s) {
      this.#salary = s;
    }
  
    getFullName() {
      return `${this.#firstName} ${this.#lastName}`;
    }
  
    getAnnualSalary() {
      return this.#salary * 12;
    }
  
    raiseSalary(percent) {
      this.#salary += (this.#salary * percent) / 100;
    }
  }


//  3
class CustomDate {
    #day;
    #month;
    #year;
  
    getDay() {
      return this.#day;
    }
  
    getMonth() {
      return this.#month;
    }
  
    getYear() {
      return this.#year;
    }
  
    setDay(day) {
      this.#day = day;
    }
  
    setMonth(month) {
      this.#month = month;
    }
  
    setYear(year) {
      this.#year = year;
    }
  
    getISOdate() {
      const day = this.#day.toString().padStart(2, '0');
      const month = this.#month.toString().padStart(2, '0');
      return `${day}-${month}-${this.#year}`;
    }
  }

  
//   4
class Time {
    #hour;
    #minute;
    #second;
  
    getHour() {
      return this.#hour;
    }
  
    getMinute() {
      return this.#minute;
    }
  
    getSecond() {
      return this.#second;
    }
  
    setHour(hour) {
      this.#hour = hour;
    }
  
    setMinute(minute) {
      this.#minute = minute;
    }
  
    setSecond(second) {
      this.#second = second;
    }
  
    nextSecond() {
      this.#second++;
      if (this.#second >= 60) {
        this.#second = 0;
        this.#minute++;
        if (this.#minute >= 60) {
          this.#minute = 0;
          this.#hour++;
          if (this.#hour >= 24) {
            this.#hour = 0;
          }
        }
      }
    }
  
    previousSecond() {
      this.#second--;
      if (this.#second < 0) {
        this.#second = 59;
        this.#minute--;
        if (this.#minute < 0) {
          this.#minute = 59;
          this.#hour--;
          if (this.#hour < 0) {
            this.#hour = 23;
          }
        }
      }
    }
  }
  
  

//   5
class Shape {
    constructor(color, filled) {
      this.color = color;
      this.filled = filled;
    }
  
    getColor() {
      return this.color;
    }
  
    setColor(color) {
      this.color = color;
    }
  
    isFilled() {
      return this.filled;
    }
  
    setFilled(filled) {
      this.filled = filled;
    }
  }
  
  class Circle extends Shape {
    constructor(color, filled, radius) {
      super(color, filled);
      this.radius = radius;
    }
  
    getRadius() {
      return this.radius;
    }
  
    setRadius(radius) {
      this.radius = radius;
    }
  
    getArea() {
      return Math.PI * this.radius * this.radius;
    }
  
    getPerimeter() {
      return 2 * Math.PI * this.radius;
    }
  }
  
  class Rectangle extends Shape {
    constructor(color, filled, width, height) {
      super(color, filled);
      this.width = width;
      this.height = height;
    }
  
    getWidth() {
      return this.width;
    }
  
    setWidth(width) {
      this.width = width;
    }
  
    getHeight() {
      return this.height;
    }
  
    setHeight(height) {
      this.height = height;
    }
  
    getArea() {
      return this.width * this.height;
    }
  
    getPerimeter() {
      return 2 * (this.width + this.height);
    }
  }

  
//   6
class Person {
    constructor(name, address) {
      this.name = name;
      this.address = address;
    }
  
    getName() {
      return this.name;
    }
  
    setName(name) {
      this.name = name;
    }
  
    getAddress() {
      return this.address;
    }
  
    setAddress(address) {
      this.address = address;
    }
  }
  
  class Student extends Person {
    constructor(name, address, faculty, year, university) {
      super(name, address);
      this.faculty = faculty;
      this.year = year;
      this.university = university;
    }
  
    getFaculty() {
      return this.faculty;
    }
  
    getYear() {
      return this.year;
    }
  
    getUniversity() {
      return this.university;
    }
  
    setFaculty(faculty) {
      this.faculty = faculty;
    }
  
    setYear(year) {
      this.year = year;
    }
  
    setUniversity(university) {
      this.university = university;
    }
  }
  
  class Employee extends Person {
    constructor(name, address, salary, work) {
      super(name, address);
      this.salary = salary;
      this.work = work;
    }
  
    getSalary() {
      return this.salary;
    }
  
    getWork() {
      return this.work;
    }
  
    setSalary(salary) {
      this.salary = salary;
    }
  
    setWork(work) {
      this.work = work;
    }
  }

  
//   7
class Animal {
    constructor(name, speed, weight) {
      this.name = name;
      this.speed = speed;
      this.weight = weight;
    }
  }
  
  class Mammal extends Animal {
    constructor(name, speed, weight, legs) {
      super(name, speed, weight);
      this.legs = legs;
    }
  
    getLegs() {
      return this.legs;
    }
  
    setLegs(legs) {
      this.legs = legs;
    }
  }
  
  class Fish extends Animal {
    constructor(name, speed, weight, size) {
      super(name, speed, weight);
      this.size = size;
    }
  
    getSize() {
      return this.size;
    }
  
    setSize(size) {
      this.size = size;
    }
  }
  
  class Cat extends Mammal {
    getSound() {
      return 'Meow';
    }
  }
  
  class Dog extends Mammal {
    getSound() {
      return 'Woof';
    }
  }
  
  class Whale extends Fish {
    getSound() {
      return 'Poof';
    }
  }
  
  class Shark extends Fish {
    getSound() {
      return 'Sheef';
    }
  }
  

//   8
class ObjectUtils {
    static customKeys(obj) {
      return Object.keys(obj);
    }
  
    static customValues(obj) {
      return Object.values(obj);
    }
  
    static customEntries(obj) {
      return Object.entries(obj);
    }
  }

class NumberUtils {
    static customIsInteger(num) {
      return Number.isInteger(num);
    }
  }

class ArrayUtils {
    static customIsArray(arr) {
      return Array.isArray(arr);
    }
  }
  
  
//   9
class CustomArray {
    constructor(array) {
      if (!CustomArray.isNumberArray(array)) {
        throw new Error('Invalid array. All elements must be numbers.');
      }
      this.array = array;
    }
  
    static isNumberArray(array) {
      return array.every((element) => typeof element === 'number');
    }
  
    static sum(arr) {
      return arr.reduce((sum, current) => sum + current, 0);
    }
  
    static max(arr) {
      return Math.max(...arr);
    }
  
    static min(arr) {
      return Math.min(...arr);
    }
  }
  
  
//   10
class Person {
    constructor(housePrice, housesNumber, carPrice, carsNumber, bankAccount) {
      this.housePrice = housePrice;
      this.housesNumber = housesNumber;
      this.carPrice = carPrice;
      this.carsNumber = carsNumber;
      this.bankAccount = bankAccount;
    }
  
    getWealth() {
      return (
        this.housePrice * this.housesNumber +
        this.carPrice * this.carsNumber +
        this.bankAccount
      );
    }
  }
  
  class RichPerson extends Person {
    constructor(
      housePrice,
      housesNumber,
      carPrice,
      carsNumber,
      bankAccount,
      companyPrice,
      companiesNumber,
      investigation
    ) {
      super(housePrice, housesNumber, carPrice, carsNumber, bankAccount);
      this.companyPrice = companyPrice;
      this.companiesNumber = companiesNumber;
      this.investigation = investigation;
    }
  
    getWealth() {
      return (
        super.getWealth() +
        this.companyPrice * this.companiesNumber +
        this.investigation
      );
    }
  }
  