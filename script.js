// let randomNum= Math.floor(Math.random()*11);
// console.log(randomNum);

// function one(){
//     function two(){
//         // const a= +prompt('Введите число')
//         console.log(a);
        

//         if(a!== randomNum){
//             two()
//         }
//         else if(a == randomNum){
//             alert('Вы победили')
//         }
//     }
//     two()
// }

// one()
let guessfunc = () => { function Res () {
    let randomNum = parseInt(Math.random() * 1000);
    let attempts = 10;
    console.log(randomNum)

    let userNum = prompt('Введите число. У Вас 10 попыток');
    console.log(userNum);

    if (isNaN(userNum)) {
        alert('Можно вводить только числа');
        return guessfunc();
    }

    if (attempts === 0) {
        alert('Попытки закончились');
    }

    if (userNum === null ) {
        alert('Игра закончилась')
        return Res();
        
    }

    attempts--;

    if (userNum == randomNum) {
        alert('Верно, Вы угадали загаданное число!');
        

    } else if (userNum < randomNum) {
        alert('Ваше число меньше! Осталось попыток: ' + attempts);
        userNum = +prompt('Введите число');
        

    } else if (userNum > randomNum) {
        alert('Ваше число больше! Осталось попыток: ' + attempts);
        userNum = +prompt('Введите число');           
    }
}
    return Res;
}

let guessNumber = guessfunc();

guessNumber();