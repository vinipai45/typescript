"use strict";
class Account {
    constructor(id, owner, balance) {
        this.id = id;
        this.owner = owner;
        this._balance = balance;
    }
    deposit(amount) {
        if (amount < 0)
            throw new Error('Invalid Amount');
        this._balance += amount;
    }
    //balance getter
    get balance() {
        return this._balance;
    }
    //balance setter
    set balance(value) {
        if (value < 0)
            throw new Error('Invalid Amount');
        this._balance = value;
    }
}
const main = () => {
    try {
        const account = new Account(1, 'vineeth', 100);
        //error - id is readonly
        // account.id =  2
        //error - balance is private to Account
        // console.log(account._balance)
        account.balance = 30; //balance setter
        console.log(account.balance); //getter access
        console.log(account);
        console.log(account instanceof Account);
    }
    catch (err) {
        console.log(err);
    }
};
main();
//# sourceMappingURL=index.js.map