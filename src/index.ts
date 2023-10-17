abstract class Shape {
    constructor(
        public color?: string,
    ) { }

    //abstract method - can only exist in abstract method
    abstract render(): void;
}

class Circle extends Shape {
    constructor(
        public radius: number,
        color?: string
    ) {
        super(color)
    }

    override render(): void {
        console.log('Rendering a circle');
    }
}

const main = () => {

    // we cant do this - it doesnt make any sense
    // shape render must need a definition
    //so - we make it abstract 

    //abstract is like an uncooked meal     

    // const shape = new Shape('red')
    // shape.render() 


    const circle = new Circle(1.5)
    console.log(circle, 'my-circle')


}

main()