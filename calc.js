let a = ''; //first number
let b = '';// second number
let sign = '';//operation sign
let finish = false;

const digit = ['1', '2', '0', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['+', '-', 'x', '/'];
//scrin
const out = document.querySelector('.calc-screen p');
function clearAll() {
    a = '';//first number and result
    b = '';//second number
    sign = '';//sign
    finish = false;
    out.textContent = 0
}

document.querySelector('.button').onclick = (event) => {
    console.log(event.target.classList);
    //натиснута не кнопка
    if (!event.target.classList.contains('btn')) return;
    //натиснута кнопака clearAll ac
    if (event.target.classList.contains('ac')) {
        clearAll();
        return;
    };
    out.textContent.content = ''
    //отримую натиснуту кнопку
    const key = event.target.textContent;
    //якщо натиснута кнопка 0-9 або .
    if (digit.includes(key)) {
        if (b === '' && sign === '') {
            a += key;

            out.textContent = a;
        }
        else if (a !== '' && b !== '' & finish) {
          b = key;
          finish =false
          out.textContent =b;
        }
        else {
            b += key;
            out.textContent = b;
        }
        console.table(a, b, sign);
        return
    }
    //якщо натиснута кнопка + - / *
    if (action.includes(key)) {
        sign = key;
        out.textContent = sign;
        console.table(a, b, sign);
        return
    }
    //натиснута =
    if (key === '=') {
        if (b ==='') b = a;
        switch (sign){
      case '+':
            a = (+a) + (+b);
            break;
      case '-':
                a = a - b;
                break;
      case 'x':
                a = a * b;
                break;
      case '/':
          if(b === '0'){
              out.textContent ='помилка';
              a='';
              b='';
              sign='';
              return;
             }
                a = a / b
                break
        }
        finish =true;
        out.textContent =a;
        console.table(a, b, sign);
    }
}