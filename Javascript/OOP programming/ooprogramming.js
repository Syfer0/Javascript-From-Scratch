// Task 1: Code a Person class
class Person{
    constructor(name = "Tom", age = 20, energy = 100) {
        this.name = name;
        this.age = age;
        this.energy = energy;

    }
    sleep() {
        this.energy += 10;
    }
    dpsometihingFun() {
        this.energy -= 10;
    }
    
}
// Task 2: Code a Worker class
class Worker extends Person{
    constructor(xp = 0, hourlywage = 10) {
        super(name, age, energy)
        this.xp = xp;
        this.hourlywage = hourlywage;
    }
    goTOwork() {
        this.energy += 10
    }
}
// Task 3: Code an intern object, run methods
function intern() {
    var intern = new Worker('Bob', 21, 110, 0, 10);
    intern.goToWork();
    return intern;
}

// Task 4: Code a manager object, methods
function manager() {
    var manager = new Worker('Alice', 30, 120, 100, 30);
    manager.doSomethingFun();
    return manager;
}