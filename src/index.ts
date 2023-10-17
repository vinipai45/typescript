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

class Teacher extends Person {

    override get fullName(): string {
        return 'Professor' + ' ' + super.fullName
    }
}

const main = () => {
    try {
        const teacher = new Teacher('John', 'Smith')

        console.log(teacher.fullName)


    } catch (err) {
        console.log(err)
    }




}

main()


