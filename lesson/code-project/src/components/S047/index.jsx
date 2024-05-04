const numbers = [1, 2, 3];
const grades = [...numbers];
console.log(grades); 
// [1, 2, 3] (shallow copy)


const winners = ["Jane", "Bob"];
const losers = ["Ronald", "Kevin"];

const players = [...winners, ...losers];
console.log(players); 
// ['Jane', 'Bob', 'Ronald', 'Kevin']


{

    const numbers = [1, 2, 3];
    const result = [...numbers, 4];
    console.log(result); 
    //[1, 2 ,3 ,4]
}

    