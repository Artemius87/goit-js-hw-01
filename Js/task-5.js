let cost;

const country = prompt('Укажите Страну');
const normalizedCountry = country.toLowerCase();

switch (normalizedCountry) {
    case 'китай':
        cost = 100;
        break;
    
    case 'чили':
        cost = 250;
        break;
    
    case 'австралия':
        cost = 170;
        break;  
    
    case 'индия':
        cost = 80;
        break;
    
    case 'ямайка':
        cost = 120;
        break;
    
    default:
        alert('В вашей стране доставка не доступна');
        break;
};
if (cost > 0) {
    alert(`Доставка в ${normalizedCountry} будет стоить ${cost} кредитов`);
} else {
    alert('Ошибка ввода');
}