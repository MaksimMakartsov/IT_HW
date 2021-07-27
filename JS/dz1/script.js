let surname = prompt('Введите вашу фамилию!');
let name = prompt('Введите ваше имя!');
let middleName = prompt('Введите ваше отчество!');

let age = prompt('Введите ваш возраст!');

let pol = confirm('Ваш пол - мужской?');

let pens;

if(pol === true){
    pol = 'Муж';
}else{
    pol = 'Жен';
}

if(age>=60){
    pens = 'Да'
}else{
    pens = 'Нет'
}

alert('ваше ФИО:'+ ' ' +surname + ' ' + name + ' ' + middleName 
+ '\n' + 'Ваш возраст в годах:' + ' ' + age 
+ '\n' +  'Ваш возраст в днях:'+ ' ' + age * 365
+ '\n' + 'Через 5 лет вам будет:'+ ' ' + (+age + 5)
+ '\n' + 'Ваш пол:' + pol 
+ '\n' + 'Вы на пенсии:' + pens);

