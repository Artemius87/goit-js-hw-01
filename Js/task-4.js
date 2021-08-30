let credits = 23580;
let pricePerDroid = 3000;

const numberDroids = prompt('количество дроидов которые пользователь хочет купить')
if (!numberDroids) {
    console.log('Отменено пользователем!');
} else  (numberDroids * 3000)
const totalPrice = (numberDroids * 3000);
const balance = (credits - totalPrice)
if (totalPrice > credits) {
    console.log('Недостаточно средств на счету!')
} else {
       console.log(`Вы купили ${numberDroids} дроидов, на счету осталось ${balance} кредитов.`)
};