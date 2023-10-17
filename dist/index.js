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
class Teacher extends Person {
    get fullName() {
        return 'Professor' + super.fullName;
    }
}
const main = () => {
    try {
        const teacher = new Teacher('John', 'Smith');
        console.log(teacher.fullName);
    }
    catch (err) {
        console.log(err);
    }
};
main();
//# sourceMappingURL=index.js.map