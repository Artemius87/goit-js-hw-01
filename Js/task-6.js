let input;
let total = 0;


do {
   input = prompt('Введите число');
    
        if (input === null) {
        alert(`Общая сумма чисел равна ${total}`);
        break;
    }
    
    input = Number(input);
    
    if (!Number.isNaN(input)) {
        total += input;
    } else {
        alert("ошибка ввода");
    }
    
} while (true);


 

    