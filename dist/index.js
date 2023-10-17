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
    takeTest() {
        console.log('taking a test');
    }
}
const main = () => {
    const student = new Student(1, 'Vineeth', 'Pai');
    //all these properties are available
    console.log(student.fullName);
    // student.firstName
    // student.lastName
    // student.fullName
    // student.studentId
    // student.takeTest()
    // student.walk()
};
main();
//# sourceMappingURL=index.js.map