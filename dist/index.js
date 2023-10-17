"use strict";
class Shape {
    constructor(color) {
        this.color = color;
    }
}
class Circle extends Shape {
    constructor(radius, color) {
        super(color);
        this.radius = radius;
    }
    render() {
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
    const circle = new Circle(1.5);
    console.log(circle, 'my-circle');
};
main();
//# sourceMappingURL=index.js.map