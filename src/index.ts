let age: number = 20;

const isYoung = (age: number): boolean => {
    if (age < 60)
        return true;
    else
        return false;
}

const resultAge: boolean = isYoung(age);

console.log(resultAge)