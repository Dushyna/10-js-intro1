let res = sumDigits(12345);
console.log(`sum digits = ${res}`); // sum digits = 15
res = sumDigits(738);
console.log(`sum digits = ${res}`); // sum digits = 18
res = luckyNumber(123871); // 1 + 3 + 7 === 2 + 8 + 1 lucky
console.log(`${res ? 'lucky' : 'not lucky'}`);
res = luckyNumber(123971); // 1 + 3 + 7 !== 2 + 9 + 1 not lucky
console.log(`${res ? 'lucky' : 'not lucky'}`);
res = luckyNumber(12397); // 1 + 3 + 7 === 2 + 9 lucky
console.log(`${res ? 'lucky' : 'not lucky'}`);

function sumDigits(num) {
    let string = ("" + num).split("");
    let sum = 0;
    for (let str of string) {
        sum += Number(str);
    }

    return sum;
}


function luckyNumber(num) {
    let string = ("" + num).split("");
    let oddSum = 0;
    let evenSum = 0;
    for (let i = 0; i < string.length; i++) {
        if (i % 2 == 0) {
            evenSum += Number(string[i]);
        } else {
            oddSum += Number(string[i]);
        }
    }
    return oddSum === evenSum;
}