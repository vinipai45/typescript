class Ride {

    //static members are specific to class and not its objects
    //single instance in memory
    private static _activeRides: number = 0


    start() {
        Ride._activeRides++;
    }

    stop() {
        Ride._activeRides--;
    }

    //make getter of static property static too
    static get activeRides(): number {
        return Ride._activeRides;
    }

}

const main = () => {
    const ride1 = new Ride()
    const ride2 = new Ride()

    ride1.start()
    ride2.start()

    console.log(Ride.activeRides); // 2

}

main()