'use strict';
const evenNumbersArr = [];
const oddNumberArr = [];
const randomNumber = Math.floor(Math.random() * 100);

for (let i = 0; i < randomNumber; i++) {
    if (i % 2 === 0) {
        evenNumbersArr.push(i)
    } else {
        oddNumberArr.push(i);

    }

}
document.write(`Случайное число: ${randomNumber}.<br>Четные числа находящиеся до случайного числа: ${evenNumbersArr}`);
document.write(`<br>А это все нечетные числа до случайного числа ${oddNumberArr}`);
