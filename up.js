
var plus = "+";
var minus = "-";
var ymnozh = "*";
var delen = "/";
var ravno= "=";
var sum = 0;
var y = 0;
var i=0;

function numberValidation(value){
    pr_value = parseInt(value);
    if (pr_value==value){
       return pr_value;
    }
    else 
    {                                
      alert('Некорректный ввод цифры');   
      return false;
    }
  }

function signVerification(znak){
 
  if (znak == plus)
  {
     return "+";
  }
  else if (znak == minus)
  {
    return "-";
  }
  else if (znak == ymnozh)
  {
    return "*";
  }
  else if (znak == delen)
  { 
    return "/";
  }
  else if (znak == ravno)
  {  
    return "=";
  }
  else
  {  
     alert('Некорректны ввод знака');
     return false;      
  }  
}

function operationsWithNumbers(znak,number1,number2)  {
  if (znak == plus){
  sum = number1+number2;
  return sum;
  }
  if (znak == minus){
    sum = number1-number2;
  return sum;
  }
  if (znak == ymnozh){
    sum = number1*number2;
  return sum;
  }
  if (znak == delen){
    sum = number1/number2;
  return sum;
  }
  if (znak == ravno){
  return sum;
  }
}

function operationsWithNumbersNext(znak,number3){
  if (znak == plus){
  sum += number3;
  return sum;
  }
  if (znak == minus){
    sum -= number3;
  return sum;
  }
  if (znak == ymnozh){
    sum *= number3;
  return sum;
  }
  if (znak == delen){
    sum /= number3;
  return sum;
  }
  if (znak == ravno){
    return sum;
    }
}
do {
number1 = numberValidation(prompt("Введите число"));
} while (number1 == false)

do {
znak = signVerification(prompt("Введите знак"));
} while (znak == false)

do {
number2 = numberValidation(prompt("Введите число"));
} while (number2 == false)
console.log(number1);
console.log(znak);
console.log(number2);
console.log(operationsWithNumbers(znak,number1,number2));
x = operationsWithNumbers(znak,number1,number2)
do {
  znak = signVerification(prompt("Введите знак"));
  console.log(znak);
  } while (znak == false)

if (znak == ravno){
  alert('Ваше значение равно - ' + x);
}

else{
for (i=0; znak != ravno; i++){
do {
number3 = numberValidation(prompt("Введите число"));
} while (number3 == false)
console.log(number3);
//console.log(operationsWithNumbersNext(znak,number3)); /// Добавляет еще раз number3
y = operationsWithNumbersNext(znak,number3);
console.log(y);
do {
znak = signVerification(prompt("Введите знак"));
} while (znak == false)
console.log(znak);

if (znak == ravno){
  alert('Ваше значение равно - ' + y);
  break;
}
}
}


