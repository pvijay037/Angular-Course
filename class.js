"use strict";
class Employee {
    //constructor method will remove the insalixation variable error
    constructor(id, name, address) {
        this.id = id;
        this.name = name;
        this.address = address;
    }
    getnamewithaddress() {
        //return this.name+" "+this.address;
        return `${this.name} stays at ${this.address}`;
    }
}
//we can pass the parameters in function employee
let john = new Employee(1, "krishna", "hyd");
let address = john.getnamewithaddress();
//john.id=1;
//john.name="vijay";
//john.address="71";
console.log(john);
//deault or parameter constructor
//both constructors can not use at once in typescript
console.log(address);
