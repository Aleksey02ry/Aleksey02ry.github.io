
/*let sum = 0, days = 0;
function calc(){
let site = prompt("Какой тип сайт ты хочешь? 1 - Визитка, 2 - Корпоративный сайт, 3 - Интернет-мазагин");
    
    if( site == "1"){
    sum += 800;
    days += 2;
}else if( site == "2"){
    sum+= 3000;
    days += 10;
}else {
    alert("Вы ввели, что-то не верно");
    calc();
    }

let design = prompt("Какой тип дизайн ты хочешь? 1 - Шаблонный, 2 - Уникальный, 3 - WOW-Дизайн");
    
    if( design == "1"){
    sum += 500;
    days += 1;
}else if( design == "2"){
    sum+= 1000;
    days += 1;
}else {
    alert("Вы ввели, что-то не верно");
    calc();
    }
    
let adaptive = prompt("Какой тип адаптации тебе нужен? 1 - Только Пк, 2 - Только мобильный сайт, 3 - Пк + Мобильный");
    
    if( adaptive == "1"){
    sum += 500;
    days += 1;
}else if( adaptive == "2"){
    sum+= 500;
    days += 1;
}else {
    alert("Вы ввели, что-то не верно");
    calc();
    }

alert("Сроки: " + days + " Стоимость: " + sum);
}
calc();*/

let site, design, adaptive;

let calculator = {
    price: [
        [100, 500, 1000],
        [500, 1000, 2000],
        [1000, 2000, 5000],
    ],
    days: [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
    ],
    run(siteType, desingType, adaptiveType){
        let sum = parseInt(calculator.price[0][siteType-1]) + parseInt(calculator.price[1][desingType-1]) + parseInt(calculator.price[2][adaptiveType-1]);
        let days = parseInt(calculator.days[0][siteType-1]) + parseInt(calculator.days[1][desingType-1]) + parseInt(calculator.days[2][adaptiveType-1]);
        alert("Сроки: " + days + " Стоимость: " + sum);
    }
}
function getAnswers() {
site = prompt("Какой тип сайт ты хочешь? 1 - Визитка, 2 - Корпоративный сайт, 3 - Интернет-мазагин");
    if(site != 1 && site != 2 && site != 3){
        alert("Такого варианта нет!");
        getAnswers();
        return;
    }
design = prompt("Какой тип дизайн ты хочешь? 1 - Шаблонный, 2 - Уникальный, 3 - WOW-Дизайн");
    if(design != 1 && design != 2 && design != 3){
        alert("Такого варианта нет!");
        getAnswers();
        return;
    }
adaptive = prompt("Какой тип адаптации тебе нужен? 1 - Только Пк, 2 - Только мобильный сайт, 3 - Пк + Мобильный");
    if(adaptive != 1 && adaptive != 2 && adaptive != 3){
        alert("Такого варианта нет!");
        getAnswers();
        return;
    }
    calculator.run(site, design, adaptive);
}

getAnswers();