//BASE
class Person {
    constructor(
        public firstName: string,
        public lastName: string,
    ) { }

    get fullName(): string {
        return this.fullName + ' ' + this.lastName
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
        lastName: string
    ) {
        super(firstName, lastName)
    }

    takeTest(): void {
        console.log('taking a test')
    }
}

const main = () => {
    const student = new Student(1, 'Vineeth', 'Pai')

    //all these properties are available

    // student.firstName
    // student.lastName
    // student.fullName
    // student.studentId
    // student.takeTest()
    // student.walk()

}

main()


