class Account {

    readonly id: number;
    owner: string;
    private _balance: number;
    nickname?: string; //optional property - ?

    constructor(id: number, owner: string, balance: number) {
        this.id = id;
        this.owner = owner;
        this._balance = balance;
    }

    deposit(amount: number) {
        if (amount < 0)
            throw new Error('Invalid Amount')
        this._balance += amount
    }

    //balance getter
    get balance(): number {
        return this._balance
    }

    //balance setter
    set balance(value: number) {
        if (value < 0)
            throw new Error('Invalid Amount')
        this._balance = value
    }

}

const main = () => {

    try {
        const account = new Account(1, 'vineeth', 100)

        //error - id is readonly
        // account.id =  2

        //error - balance is private to Account
        // console.log(account._balance)

        account.balance = 30 //balance setter

        console.log(account.balance) //getter access

        console.log(account)
        console.log(account instanceof Account)
    }
    catch (err) {
        console.log(err)
    }



}

main()