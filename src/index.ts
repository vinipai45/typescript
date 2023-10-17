//abstract class - creates an explicit class on compiling in js
// abstract class Calender {
//     constructor(
//         public name: string,
//     ) { }

//     abstract addEvent(): void;
//     abstract removeEvent(): void;
// }

//interface - for optimised compiling and js conversion

//if there are any methods in base class that subclass needs to use - use abstract class
//else if only signatures -  use interfaces

interface Calender {
    name: string;
    addEvent(): void;
    removeEvent(): void;
}

interface CloudCalendar extends Calender {
    sync(): void;
}

class GoogleCalendar implements CloudCalendar {

    constructor(public name: string) { }

    sync(): void {
        throw new Error("Method not implemented.");
    }

    addEvent(): void {
        throw new Error("Method not implemented.");
    }

    removeEvent(): void {
        throw new Error("Method not implemented.");
    }

}