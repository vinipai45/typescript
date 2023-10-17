"use strict";
//BASE
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return this.firstName + ' ' + this.lastName;
    }
    walk() {
        console.log('walking');
    }
}
//DERIVED 
class Student extends Person {
    constructor(studentId, firstName, lastName) {
        super(firstName, lastName);
        this.studentId = studentId;
    }
}
//DERIVED
class Teacher extends Person {
    get fullName() {
        return 'Professor' + ' ' + super.fullName;
    }
}
//DERIVED
class Principal extends Person {
    get fullName() {
        return 'Principal' + ' ' + super.fullName;
    }
}
const main = (people) => {
    try {
        for (let person of people) {
            console.log(person.fullName);
        }
    }
    catch (err) {
        console.log(err);
    }
};
main([
    new Student(1, 'Vineeth', 'Pai'),
    new Teacher('John', 'Smith'),
    new Principal('Mary', 'Doe')
]);
//# sourceMappingURL=index.js.map