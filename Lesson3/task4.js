// Задача 5: перепишите код, используя конструкцию switch-case, 
// запрашивая возраст пользователя через диалоговое окно.

// let age = 101;
 
// if (age == 18) {
//   alert('Вы совершеннолетний, все можно!');
// } else if (age == 10) {
//   alert('Вам надо учить уроки!');
// } else if (age == 30) {
//   alert('Ложитесь спать, завтра на работу');
// } else {
//   alert('Мы не знаем что Вам делать');
// }

const age = Number.parseInt(prompt("Введите возраст"))
switch(age){
    case 10:
        alert('Вам надо учить уроки!');
        break;
    case 18:
        alert('Вы совершеннолетний, все можно!');
        break;
    case 30:
        "Ложитесь спать, завтра на работу";
    default:
        alert('Мы не знаем что Вам делать');

}