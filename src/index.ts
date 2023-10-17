//BASE
class Person {
    constructor(
        public firstName: string,
        public lastName: string,
    ) { }

    get fullName(): string {
        return this.firstName + ' ' + this.lastName
    }

    walk(): void {
        console.log('walking')
    }

}

//DERIVED 
class Student extends Person {

    constructor(
        public studentId: number,
        firstName: string,
        lastName: string,
    ) {
        super(firstName, lastName)
    }
}


//DERIVED

class Teacher extends Person {

    override get fullName(): string {
        return 'Professor' + ' ' + super.fullName
    }
}

//DERIVED

class Principal extends Person {

    override get fullName(): string {
        return 'Principal' + ' ' + super.fullName
    }
}

const main = (people: Person[]): void => {
    try {

        for (let person of people) {
            console.log(person.fullName)
        }

    } catch (err) {
        console.log(err)
    }
}

//fullName getter takes multiple forms
main([
    new Student(1, 'Vineeth', 'Pai'),
    new Teacher('John', 'Smith'),
    new Principal('Mary', 'Doe')
])


