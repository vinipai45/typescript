"use strict";
class Ride {
    start() {
        Ride._activeRides++;
    }
    stop() {
        Ride._activeRides--;
    }
    //make getter of static property static too
    static get activeRides() {
        return Ride._activeRides;
    }
}
//static members are specific to class and not its objects
Ride._activeRides = 0;
const main = () => {
    const ride1 = new Ride();
    const ride2 = new Ride();
    ride1.start();
    ride2.start();
    console.log(Ride.activeRides); // 2
};
main();
//# sourceMappingURL=index.js.map