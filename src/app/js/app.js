const evenNumbersArr = [];
const oddNumberArr = [];
const randomNumber = Math.floor(Math.random() * 100);

console.log(`Случайное число равняется : ${randomNumber}.`);

for (let i = 0; i < randomNumber; i++) {
    if (i % 2) {
        oddNumberArr.push(i);
    } else {
        evenNumbersArr.push(i)
    }

}
document.write(`Случайное число: ${randomNumber}.<br>Четные числа находящиеся до случайного числа: ${evenNumbersArr}`);
document.write(`<br>А это все нечетные числа до случайного числа ${oddNumberArr}`);
