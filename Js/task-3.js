const ADMIN_PASSWORD = 'jqueryismyjam';
let message;
const userPassword = prompt('введите пароль');
if (!userPassword) {
    message = 'Отменено пользователем!';
} else if (ADMIN_PASSWORD === userPassword) {
    message = 'Добро пожаловать!';
}
else {
    message = 'Доступ запрещен, неверный пароль!';
};
alert(message);