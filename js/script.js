"use strict";
/*function makeAdder(x){
            function add(y){
               return y + x;
            }
            return add
      }
      var plusOne = makeAdder(1);
      var plusTen = makeAdder(10);
      console.log(plusOne(4));
      console.log(plusTen(4));
      function User() {
      var username, password;
      function doLogin(user, pw) {
            username = user;
            password = pw;
               }
               var publicAPI = {
                  login: doLogin
               };
               return publicAPI;
            }
      var fred = User();
      fred.login("fred", "12Battery34!");
      let a = 2;
      console.log(a);
      let massage = "Привет";
      let massageEnd;
      let a = 0;
      if (a > 100) {
            massageEnd = ", Андрей!";
            }
            else if (a > 50) {
                  massageEnd = ", Сергей!";
            }
            else if (a > 30) {
                  massageEnd = ", Антон!";
            }
            else if (a > 10) {
                  massageEnd = ", Богдан!";
            }
            else if (a > 1) {
                  massageEnd = ", Кирилл!";
            }
            else {
               massageEnd = ", Максим!";
            }
            massage += massageEnd;
            console.log(massage);
            let num = 500;
            while (num){
               console.log(num);
               num--
            }
            for (let num = 0; num < 50; num++) {
               console.log(num)
               if (num == 2)break
            }
            let num = 0;
            while (num < 3) {
               console.log('Число: ${num}');
               num++
            }
            First: for (let num = 0; num < 2; num++){
               for (let size = 0; size < 3; size++){
                  if (size == 2){
                        break First;
                  }
                  console.log(size);
               }
            }
               function calcSumm(numOne, numTwo) {
                  console.log(`Переменная numOne:${numOne}`);
                  console.log(`Переменная numTwo:${numTwo}`);
                  let numSumm = numOne + numTwo;
                  console.log(`Сумма:${numSumm}`);
               }
            calcSumm(3, 4);
            function calcSumm(numOne, numTwo, more, less){
               let numSumm = numOne + numTwo;
               if (numSumm > 30){
                  more();
               }else {
                  less();
               }
            }
            function showMoreMessage(){
               console.log('Больше чем 30');
            }
            function showLessMessage() {
               console.log('Меньше чем 30');
            }
            calcSumm(27,4, showMoreMessage, showLessMessage)
            function showMessage(text, name){
               console.log(`${text}, ${name}!`);
            }
            setInterval(showMessage, 3000, 'Привет', 'Кирилл')
            function showName(){
               console.log('Вася!');
            }
            setTimeout(showName, 0);
            console.log('Коля');
            'use strict'
            let showMessage;
            if(2 > 1){
               showMessage = function(){
                  console.log('Сообщение');
               }
            }
            showMessage()
            let userInfo = {
               name: "Вася",
               age: 30,
            }
            userInfo.name = 'Лена';
            console.log(userInfo); 
            delete userInfo.name;
            console.log(userInfo); 
            let numTwo = 1.005 + Number.EPSILON;
            let numOne = Math.round(numTwo * 100) / 100;
            console.log(numOne);
            let value = parseFloat("135.58px") ;
            console.log(value);
            let value = 58 + "Фрилансер";
            if(value !== NaN){
               console.log("Я NaN");
            }
            console.log(Math.min(10, 58, 39, -150, 0));
            console.log(Math.floor(58.858));
            let arr = [22, 2353, 6, 235, 39, 343, 6436,];
            console.log(arr.sort((a,b) => a - b));
            console.log(arr.sort());
            let user = ["Ваня", "Коля",];
            user.push("Оля");
            user.splice(1, 2, "Кирилл");
            let arr = user.splice(0, 1)
            console.log(arr);
            user.unshift("Маша", "Паша");
            console.log(user)
            let arr = ["Ваня", "Кирилл", "Миша"];
            let newArr = arr.splice(2, 2);
            console.log(newArr);
let str = "Ваня,Кирилл,Маша";
let arr = str.split(",")
console.log(arr);
const elemsOne = document.querySelectorAll('li')[2];
console.log(elemsOne[2]);
const elemsTwo = elemsOne.innerHTML;
elemsOne.innerHTML = 
   `<p>${elemsTwo}</p> <p>${elemsTwo}</p><p>${elemsTwo}</p> <p>Эксперт <span class="red">лучший</span> спортзал</p>`;
console.log(elemsOne.innerHTML);
const list = document.querySelectorAll('li')[1];
list.style.color = "red";
list.style.fontSize = '20px';
console.log(list.style.fontSize);
const newList = document.createElement('div');
newList.innerHTML = 'Вечер в хату';
console.log(list);
list.insertAdjacentElement(
   'beforeend',
   newList
);
const mainElement = document.documentElement;
const mainElementWidth = mainElement.clientWidth;
const mainElementHeight = mainElement.clientHeight;
console.log(mainElementWidth);
console.log(mainElementHeight);
const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;
console.log(windowWidth);
console.log(windowHeight);
function setScrollBy(){
   window.scrollBy(0, 50);
   const windowScrollTop = window.pageYOffset;
   console.log(windowScrollTop);
}
const button = document.querySelector('.button');
button.addEventListener("click", function (e) {
   console.log('Клик');
});
button.addEventListener("click", function (e) {
   console.log('Клак');
});

let a = prompt("Первое число?", 1);
let b = prompt("Второе число?", 2);

alert(+a + +b);
let userNumer = prompt("Укажите число")
if (userNumer > 1){
   alert("1")
} else if (userNumer == 0){
   alert("0")
} else{
   alert("-1")
}
let result = (a + b < 4) ? "Мало" : "Много"
let message = (login == 'Сотрудник') ? "Привет" :
   (login == 'Директор') ? "Здраствуйте" :
   (login == '') ? "Нет логина" :
   "";
let user = prompt("Кто там?")
let userPassword
if(user == "Админ"){
   let userPassword = prompt("Пароль")
   if (userPassword == "Я главный"){
      console.log("Здраствуйте");
   } else if (userPassword == '' || userPassword == null) {
      console.log("Отменено");
   } else{
      console.log("Я вас не знаю");
   }
} else if (user == '' || user == null){
   console.log("Отменено");
} else{
   console.log("Я вас не знаю");
}
let i = 4
while(i < 10){
   i++
   console.log(i);
}
for (let i = 0; i < 3; i++) {

   for (let j = 0; j < 3; j++) {

      let input = prompt(`Значение на координатах (${i},${j})`, '');

      // Что если мы захотим перейти к Готово (ниже) прямо отсюда?

   }
}

alert('Готово!'
let num
do{
   num = prompt("Введите число больше 100")
} while(num < 100 && num)
const number = +prompt('Введите число между 0 и 3', '');
switch (number) {
   case 0:
      alert("Вы ввели число 0")
      break;
   case 1:
      alert("Вы ввели число 1")
      break;
   case 2:
   case 3:
      alert("Вы ввели число 2 или 3")
      break;
   default:
      break;
}
function showMessage(from, text = "текст не добавлен") {
   alert(from + ": " + text);
}
showMessage("Аня", "Привет")
function checkAge(age) {
   if (age > 18) {
      return true;
   } else {
      return confirm('А родители разрешили?');
   }
}

let age = prompt('Сколько вам лет?', 18);

if (checkAge(age)) {
   alert('Доступ получен');
} else {
   alert('Доступ закрыт');
}
function checkAge(age){
   let result = (age > 18 || confirm("а родители разрешили?"))
   return result
}
function checkAge(age) {
   let result = (age > 18) ? true : confirm("а родители разрешили?")
}
function minNumer(a, b){
   console.log(Math.pow(a, b)); 
}
minNumer(1, 10)
function min(a, b){
   return Math.min(a, b)
}
console.log(pow(7, 4)); 
function pow(a, b) {
   return Math.pow(a, b)
}
let question = confirm("Вы согласны ?")
let ask = (question == true) ?
   () => alert("Вы согласились.") :
   () => alert("Вы отменили выполнение.")
ask()
function ask(question, yes, no) {
   if (confirm(question)) yes()
   else no();
}
ask(
   "Вы согласны",
   () => alert("Вы согласились."),
   () => alert("Вы отменили выполнение.")
)
for(let i = 0; i < 10; i++){
   console.log(i);
}
function pow(x, n) {
   let result = 1;
   for (let i = 0; i < n; i++) { result *= x; }
   return result;
}

let x = prompt("x?", ''), n = prompt("n?", '')
if (n <= 0) {
   alert(`Степень ${n} не поддерживается, введите целую степень, большую 0`);
}
else {
   alert(pow(x, n))
}
describe("pow", function() {
   function makeTest(x){
      let expected = x * x * x;
      it(`${x} в третей степени будет ${expected}`, function(){
         assert.equal(pow(x, 3), expected);
      });
   }
   for(let x = 1; x <= 5; x++){
      makeTest(x)
   }
})
describe("тест", function () {

   before(() => alert("Тестирование началось – перед тестами"));
   after(() => alert("Тестирование закончилось – после всех тестов"));

   beforeEach(() => alert("Перед тестом – начинаем выполнять тест"));
   afterEach(() => alert("После теста – заканчиваем выполнение теста"));

   it('тест 1', () => alert(1));
   it('тест 2', () => alert(2));

});
let user = {
   name: 'Kirill',
   age: 22,
}
user.job = 'programist';
delete user.age
console.log(user);
let car = prompt("Какую машину купить?")
let garage = {
   [car]: true,
};
console.log(garage.bmw);
function makeUser(name, age) {
   return {
      name, // то же самое, что и name: name
      age   // то же самое, что и age: age
      // ...
   };
}
let newUser = makeUser('Kirill', 22)
console.log(newUser.age);
let user = {
   name: "John",
   surname: "Smith",
}
user.name = "Pete";
delete user.name
console.log(user);
let menu = {
   width: 200,
   height: 300,
   title: "My menu"
};
function multiplyNumeric(){
   for(let key in menu){
   if(menu[key] >= 1){
      let sum = menu[key] * 2
      console.log(sum);
      }
   }
}
multiplyNumeric(menu)
function User(name, age, jod){
   this.name = name;
   this.age = age;
   this.jod = jod;
}
let user = new User('Kirill', 22, 'not');
console.log(user);
function Calculator(){
   this.read = function(){
      this.a = +prompt("a")
      this.b = +prompt("b")
   }
   this.sum = function(){
      return this.a + this.b
   }
   this.mul = function(){
      return this.a * this.b
   };
}
let calculator = new Calculator();
calculator.read()
console.log("Сумма сложения = " + calculator.sum());
console.log("Сумма умножения = " + calculator.mul());
function Accumulator(startingValue){
   this.value = startingValue;
   this.read = function(){
      return this.value += +prompt("a")
   }
}
let accumulator = new Accumulator(2)
accumulator.read()
accumulator.read()
console.log(accumulator.value);
let id = Symbol("id")
console.log(id.toString());
let user ={
   name: "Вася"
}
let id = Symbol("id");
console.log(user[id]);
console.log(1.15 + 2.30); 
let num = 222
console.log(num.toString(2));
let readNumber = function(){
   let num = prompt("Введите число");
   if(num == (!isFinite(num))){
      console.log(num);
   } else if(num == null){
      console.log("null");
   } else{
      readNumber()
   }
}
readNumber()
function checkSpam(str){
   lowerStr = str.toLowerCase()
   return lowerStr.includes("viagra") || lowerStr.includes("xxx")
}
console.log(checkSpam("xxx kirill gol")); 

function truncate(str, maxlength){
   let strlen = str.length
   if (strlen > maxlength){
      console.log(`${str.slice(0, maxlength)}...`);
   } else{
      console.log(str);
   }
}
truncate("Йоу собаки, я наруто узумаки", 20)
function extractCurrencyValue(str){
   numSlice = +str.slice(1)
   console.log(numSlice);
}
extractCurrencyValue("$120")
console.log("\u{1F60D}");
let fruits = ["Яблоко", "Апельсин", "Слива"];
for(let key in fruits){
   console.log(key);
}
function sumInput() {
   let numers = []
   while(true){
      let value = prompt("Введите число", 0)
      if (value === "" || value === null || !isFinite(value)) break;
      numers.push(+value)
   }
   let sum = 0
   for(let numer of numers){
      sum += numer
   }
   return sum
}
console.log(sumInput());
function camelize(str){
   return str
   .split("-")
   .map(
      (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
   )
   .join("")
}
console.log(camelize("background-color") );
function filterRange(arr, a, b){
   return arr.filter(item => (a <= item && item <= b))
}

function sortArr(arr){
   return arr.slice().sort()
}
let arr = ["HTML", "JavaScript", "CSS"];
console.log(arr);
console.log(newArr);
let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [vasya, petya, masha];
let usersMapped = users.map(user =>({
   fullName: `${user.name} ${user.surname}`,
   id: user.id
}))
function sortByAge(users){
   users.sort((a, b) => a.age > b.age ? 1 : -1)
}
function getAverageAge(users){
   return users.reduce((prev, user) => prev + user.age, 0) / users.length
}
let map = new Map();
map.set('banana', 1);
map.set('orange', 2);
map.set('meat', 4);
let obj = Object.fromEntries(map.entries());
console.log(obj);
function unique(arr){
   return Array.from(new Set(arr)) 
}
let values = ["Hare", "Krishna", "Hare", "Krishna",
   "Krishna", "Krishna", "Hare", "Hare", ":-O"
];
console.log(unique(values));
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
function aclean(arr){
   let map = new Map()
   for(let word of arr){
      let sorted = word.toLowerCase().split("").sort().join("")
      map.set(sorted, word)
   }
   return Array.from(map.values())
}
let map = new Map();

map.set("name", "John");
let keys = Array.from(map.keys())
keys.push("more")
console.log(keys);
let arrMessage = new WeakSet()
let messages = [
   { text: "Hello", from: "John" },
   { text: "How goes?", from: "John" },
   { text: "See you soon", from: "Alice" }
];
let readMap = new WeakMap();

readMap.set(messages[0], new Date(2017, 1, 1, 23, 30));
console.log(readMap);
let salaries = {
   
};
function sumSalaries(salaries){
   let sum = 0
   for (let value of Object.values(salaries)){
      sum += value
   }
   return sum
}
console.log(sumSalaries(salaries));
function count(obj){
   return Object.entries(obj).length 
}
let user = {
   name: 'John',
   age: 30
};
console.log(count(user));
let user = {
   name: "John",
   years: 30
};
let {name, years: age, isAdmin} = user
console.log(isAdmin);

function topSalary(salaries){
   let max = 0
   let maxName = null
   for(const[name, salari] of Object.entries(salaries)){
      if(max < salari){
         max = salari
         maxName = name
      }
   }
   return maxName
}
let salaries = {
   "John": 100,
   "Pete": 300,
   "Mary": 250
};
console.log(topSalary(salaries));
let time = new Date(2012, 1, 20, 3, 12)
console.log(time);

function getDateAgo(date, days) {
   let dateCopy = new Date(date)
   dateCopy.setDate(date.getDate() - days)
   return dateCopy.getDate()
}
let date = new Date(2015, 0, 2);
console.log(getDateAgo(date, 2));
function getLastDayOfMonth(year, month){
   let date = new Date(year, month + 1, 0)
   return date.getDate()
}
function getSecondsToday(){
   let now = new Date() 
   let toDay = new Date(now.getFullYear(), now.getMonth(), now.getDate())
   let diff = now - toDay
   return Math.round(diff / 1000)
}
console.log(getSecondsToday());
let room = {
   number: 23
};

let meetup = {
   title: "Совещание",
   occupiedBy: [{ name: "Иванов" }, { name: "Петров" }],
   place: room
};


room.occupiedBy = meetup;
meetup.self = meetup;
console.log(JSON.stringify(meetup, function replacer(key, value){
   return (key != ""  && value == meetup) ? undefined : value
}));
function sumTo(n){
   let sum = 0
   for(let i = 0; i <= n; i++){
      sum += i
   }
   return sum
}

function sumTo2(n){
   if(n == 1){
      return 1
   }else{
      return n + sumTo(n - 1)
   }
}
console.log(sumTo2(3));
function factorial(n) {
   if (n <= 1) {
      return n
   } else {
      return factorial(n - 1) + factorial(n - 2)
   }
}
console.log(factorial(7));
let list = {
   value: 1,
   next: {
      value: 2,
      next: {
         value: 3,
         next: {
            value: 4,
            next: null
         }
      }
   }
};
function printList(list){
   let td = list
   while(td){
      console.log(td);
      td = td.next
   }
}
console.log(printList(list));
function makeArmy() {
   let shooters = [];
   for (let i = 0;i < 10; i++) {
      let shooter = function () { // функция shooter
         console.log(i); // должна выводить порядковый номер
      };
      shooters.push(shooter);
   }
   return shooters;
}

let army = makeArmy();
army[6]()
function sayHi(){
   alert("Ни")
   sayHi.counter++
}
sayHi.counter = 0
sayHi()
sayHi()
console.log(`Вызвана ${sayHi.counter} раз`);
function sum(a){
   return function(b){
      return a + b
   }
}
console.log(sum(-5)(2));

let i = 0;

setTimeout(() => alert(i), 100); 

// предположим, что время выполнения этой функции >100 мс
for (let j = 0; j < 100000000; j++) {
   i++;
}
function askPassword(ok, fail) {
   let password = prompt("Password?", '');
   if (password == "rockstar") ok();
   else fail();
}

let user = {
   name: 'John',

   login(result) {
      alert(this.name + (result ? ' logged in' : ' failed to log in'));
   }
};

askPassword(user.login.bind(user, true), user.login.bind(user, false))
let head = {
   glasses: 1
};

let table = {
   pen: 3,
   __proto__: head
};

let bed = {
   sheet: 1,
   pillow: 2,
   __proto__: table
};

let pockets = {
   money: 2000,
   __proto__: bed
};
console.log(pockets.sheet);
function f() {
   console.log("Hello!");
}
Function.prototype.defer = function(ms){
   setTimeout(sum, ms)
      return function sum(a, b){
      return a + b
   }
}
f.defer(1000)(1, 3);
function Clock({ template }) {

   let timer;

   function render() {
      let date = new Date();

      let hours = date.getHours();
      if (hours < 10) hours = '0' + hours;

      let mins = date.getMinutes();
      if (mins < 10) mins = '0' + mins;

      let secs = date.getSeconds();
      if (secs < 10) secs = '0' + secs;

      let output = template
         .replace('h', hours)
         .replace('m', mins)
         .replace('s', secs);

      console.log(output);
   }

   this.stop = function () {
      clearInterval(timer);
   };

   this.start = function () {
      render();
      timer = setInterval(render, 1000);
   };

}


class Clock{
   constructor({template}){
      this.template = template;
   }
   render(){
      let date = new Date();

      let hours = date.getHours();
      if (hours < 10) {hours = '0' + hours;}

      let mins = date.getMinutes();
      if (mins < 10) {mins = '0' + mins;}

      let secs = date.getSeconds();
      if (secs < 10) {secs = '0' + secs;}

      let output = this.template
         .replace('h', hours)
         .replace('m', mins)
         .replace('s', secs);

      console.log(output);
   }
   stop(){
      let timer;
      clearInterval(timer);
   }
   start(){
      this.render();
      this.timer = setInterval(() => this.render(), 1000);
   }
}
let clock = new Clock({ template: 'h:m:s' });
clock.start();*/
/*class Animal {
   constructor(name) {
      this.speed = 0;
      this.name = name;
   }
   run(speed) {
      this.speed = speed;
      console.log(`${this.name} бежит со скоростью ${this.speed} км/ч.`);
   }
   stop() {
      this.speed = 0;
      console.log(`${this.name} стоит.`);
   }
}

let animal = new Animal("Мой питомец");
animal.run(30);
class ExtendedClock extends Clock{
   constructor(options){
      super(options);
      let {precision=1000} = options;
      this.precision = precision;
   }
   start() {
      this.render()
      this.timer = setInterval(() => this.render(), this.precision)
   }
}
class Rabbit extends Object {
   constructor(name) {
      super()
      this.name = name
   }
}

let rabbit = new Rabbit("Кроль");


function delay(ms) {
   return new Promise(resolve => setTimeout(resolve, ms))
}
delay(3000).then(() => alert('выполнилось через 3 секунды'));
class Trenable{
   constructor(num){
      this.num = num;
   }
   then(resolve, reject){
      console.log(resolve);
      setTimeout(() => resolve(this.num * 2), 1000)
   }
}
async function f(){
   let result = await new Trenable(1);
   console.log(result);
}
f()
async function loadJson(url) {
   let response = await fetch(url)
   if (response.status == 200){
      let json = await response.json()
      return json
   }
   throw new Error(response.status);
}

loadJson('no-such-user.json')
   .catch(alert); // Error: 404 (4)
class HttpError extends Error {
   constructor(response) {
      super(`${response.status} for ${response.url}`);
      this.name = 'HttpError';
      this.response = response;
   }
}
async function loadJson(url){
   let response = await fetch(url)
   if(response.status == 200){
      return response.json()
   } else{
      throw new HttpError(response);
   }
}
async function demoGithubUser() {
   let user;
   while(true){
      let name = prompt("Введите логин?", "iliakan");
      try{
         user = await loadJson(`https://api.github.com/users/${name}`)
         break
      } catch(err){
         if (err instanceof HttpError && err.response.status == 404) {
            alert("Такого пользователя не существует, пожалуйста, повторите ввод.");
            return demoGithubUser();
         } else {
            throw err;
         }
      }
   }
   alert(`Полное имя: ${user.name}.`);
   return user;
}
demoGithubUser();
function* generateSequence(start, end) {
   for (let i = start; i <= end; i++) yield i;
}

function* generatePasswordCodes() {

   // 0..9
   yield* generateSequence(48, 57);

   // A..Z
   yield* generateSequence(65, 90);

   // a..z
   yield* generateSequence(97, 122);

}

let str = '';

for (let code of generatePasswordCodes()) {
   str += String.fromCharCode(code);
}
console.log(str);
function* pseudoRandom(seed){
   let value = seed
   while(true){
      value = value * 16807 % 2147483647
      yield value
   }
}
let generator = pseudoRandom(1);

console.log(generator.next().value);
console.log(generator.next().value);
let dictionary = {
   'Hello': 'Hola',
   'Bye': 'Adiós'
};
dictionary = new Proxy(dictionary,{
   get(target, phrase){
      if(phrase in target){
         return target[phrase]
      } else{
         return phrase
      }
   }
})
let user = {
   name: "John"
};

let array = [1, 2, 3];
function sum(){
   let a =  +prompt("Введите число");
   let b = +prompt("Введите число еще раз");
   return a + b
}
console.log(sum());
const storeName = "Fortuna";
const stopeDescription = {
   budget: 10000,
   employees: ['Kirill', 'Andrei', 'Maxim'],
   products: {
      'cup': 10,
      'cum': 20,
   },
   open: true,
};
const answers = [];
answers[0] = prompt('Как вас зовут?');
answers[1] = prompt('Какая ваша фамилия?');
answers[2] = prompt('Сколько вам лет?');
answers.forEach(function(item, i, arr){
   console.log(item);
});
let result = "";
const lengt = 8;
for (let i = 1; i < lengt; i++){
   for(let j = 0; j < i; j++){
      result += '*';
   }
   result += '\n';
}
console.log(result);
for(let i = 2; i <= 12; i++ ){
   console.log(i);
}

function firstTask() {
   const arr = [3, 5, 8, 16, 20, 23, 50];
   const result = [];
   for(let i = 0; i < arr.length; i++){
      result[i] = arr[i]; 
   }
   console.log(result);
   return result;
}
firstTask();
function secondTask() {
   const data = [5, 10, 'Shopping', 20, 'Homework'];
   for (let i = 0; i < data.length; i++) {
      if (typeof(data[i]) === 'number') {
            data[i] = data[i] * 2;
      } else if (typeof(data[i]) === 'string') {
            data[i] = `${data[i]} - done`;
      }
   }
   console.log(data);
   return data;
}
secondTask();
function thirdTask() {
   const data = [5, 10, 'Shopping', 20, 'Homework'];
   let result = [];
   for(let i = 1; i <= data.length; i++){
      result[i-1] = data[data.length - i];
   }
   console.log(result);
   return result;
}
thirdTask();
const lines = 5;
let result = '';
for(let i = 1; i <= lines; i++){
   for(let j = 0; j < i; j++){
      result += "*";
   }
   result += `\n`;
}
console.log(result);
let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели", "");
let personalMovieDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   gendes: [],
   privat: false
};*/
/*for( let i = 0; i < 2; i++){
   const a = prompt("Один из последних просмотренных фильмов?", ""),
         b = prompt("На сколько его оцените", "");
   if( a != null && b != null && a != "" && b != "" && a.length < 50){
      personalMovieDB.movies[a] = b;
      console.log("done");
   }else{
      console.log("error");
      i--;
   }
}
if(personalMovieDB.count <= 10){
   console.log("Просмотренно довольно мало фильмов");
} else if(personalMovieDB.count < 30){
   console.log("Вы классной зритель");
} else if(personalMovieDB.count >= 30){
   console.log("Вы киноман");
}else{
   console.log("Произошла ошибка");
}
console.log(personalMovieDB);
let i = 0;
while(i < 2){
   const a = prompt("Один из последних просмотренных фильмов?", ""),
         b = prompt("На сколько его оцените", "");
   if( a != null && b != null && a != "" && b != "" && a.length < 50){
      personalMovieDB.movies[a] = b;
      console.log("done");
   }else{
      console.log("error");
      i--;
   }
   i++;
}
function sayHello(name){
   return `Привет,${name}!`;
}
console.log(sayHello("Антон"));
function returnNeighboringNumbers(num) {
   return [num-1, num, num +1];
}
console.log(returnNeighboringNumbers(3));
function getMathResult(a, b){
   if(typeof(b) != "number" || b <= 0){
      return a;
   }
   let str = "";
   for(let i = 1; i <= b; i++){
      if(i === b){
         str += `${a * i}`;
      }else{
         str += `${a * i}---`;
      }
   }
   return str;
}
console.log(getMathResult(3, 10));
let numberOfFilms;
function start(){
   numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели", "");
   while( numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)){
      numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели", "");
   }
}
start();
let personalMovieDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   gendes: [],
   privat: false,
};

function rememberMyfilms(){
   for( let i = 0; i < 2; i++){
   const a = prompt("Один из последних просмотренных фильмов?", "").trim(),
         b = prompt("На сколько его оцените", "");
   if( a != null && b != null && a != "" && b != "" && a.length < 50){
      personalMovieDB.movies[a] = b;
      console.log("done");
   }else{
      console.log("error");
      i--;
   }
   }
}
rememberMyfilms();

function detectPersonalLevel(){
   if(personalMovieDB.count <= 10){
      console.log("Просмотренно довольно мало фильмов");
   } else if(personalMovieDB.count < 30){
      console.log("Вы классной зритель");
   } else if(personalMovieDB.count >= 30){
      console.log("Вы киноман");
   }else{
      console.log("Произошла ошибка");
   }
}
detectPersonalLevel();
function showMyDB(hidden){
   if(!hidden){
      console.log(personalMovieDB);
   }
}
showMyDB(personalMovieDB.privat);
function writeYourGenres(){
   for(let i = 1; i <= 3; i++){
      personalMovieDB.gendes[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
   }
}
writeYourGenres();
function calcCub(edge){
   let volumeCub = Math.pow(edge, 3);
   let areaCub = 6 * Math.pow(edge, 2);
   if(typeof(edge) !== 'number' || edge < 0 || !Number.isInteger(edge)){
      console.log("При вычислении произошла ошибка");
   } else{
      return `Обьем куба:${volumeCub}, площадь всей поверхности:${areaCub}`;
   }
}
console.log(calcCub(4));
function checkCupe(num){
   if(typeof(num) !== 'number' || num < 0 || !Number.isInteger(num)){
      console.log("Проверьте правильность введенного номера места");
   } else if(num <= 0 || num > 36){
      console.log(`Места ${num} в вагоне не существует`);
   }
   for(let i = 4; i <= 36; i = i + 4){
      if( num <= i){
         return Math.ceil(i / 4);
      }
   }
}
console.log(checkCupe(5));

function checkTime(time){
   if(typeof(time) !== 'number' || time < 0 || !Number.isInteger(time)){
      console.log("Ошибка проверьте данные");
   }
   let hours = Math.floor(time / 60);
   let minutes = time % 60;
   let str = "";
   switch (hours) {
      case 0:
         str = "часов";
         break;
      case 1:
         str = "час";
         break;
      case 2:
         str = "часа";
         break;
      case 3:
         str = "часа";
         break;
      case 4:
         str = "часа";
         break;
      default:
         str = "часов";
   }
   return `Это ${hours} ${str} и ${minutes} минут`;
}
console.log(checkTime(434));
function findMaxNumder(a, b, c, d){
   if(typeof(a) !== "number" ||
   typeof(b) !== "number" ||
   typeof(c) !== "number" ||
   typeof(d) !== "number" ){
      return 0;
   }else{
      return Math.max(a, b, c, d);
   }
}
console.log(findMaxNumder(2,3,4,5));
function fib(num){
   let result = "";
   let firts = 0;
   let second = 1;
   for(let i = 0; i < num; i++){
      if(i + 1 === num){
         result += `${firts}`;
      } else{
         result += `${firts} `;
      }
      let tri = firts + second;
      firts = second;
      second = tri;
   }
   return result;
}
console.log(fib(7));
let options = {
   name: 'test',
   width: 1024,
   height: 1024,
   colors : {
      border: "black",
      bg: "red",
   },
   makeTest: function(name){
      console.log(`Hello ${name}`);
   }
};
for (let key in options){
   if (typeof(options[key]) === 'object'){
      for(let item in options[key]){
         console.log(`Свойство ${item} имеет значение ${options[key][item]}`);
      }
   }else{
      console.log(`Свойство ${key} имеет значение ${options[key]}`);
   }
}
console.log(Object.keys(options).length);
options.makeTest('Kirill');
let {border, bg} = options.colors;
let arr = [24324, 423, 645, 83, 10,];
arr.sort(conpareNum);
arr.pop();
console.log(arr);
arr.push(6);
console.log(arr);
for( let key of arr){
   console.log(key);
}
arr.forEach(function(item, index, arr){
   console.log(`Элемент ${item} под номером ${index} в массиве ${arr}`);
});
let str = prompt("", "");
let product = str.split(", ");
console.log(product.join(";"));
function conpareNum(a, b){
   return b - a;
}
function copy(mainObj){
   let objCopy = {};
   for(let key in mainObj){
      objCopy[key] = mainObj[key];
   }
   return objCopy;
}
let newObj = copy(options);

newObj.name = 'Kirill';
console.log(newObj);
console.log(options);
const personalPlanPeter = {
   name: "Peter",
   age: "29",
   skills: {
      languages: ['ru', 'eng'],
      programmingLangs: {
            js: '20%',
            php: '10%'
      },
      exp: '1 month'
   },
   showAgeAndLangs: function(plan){
      let {age} = plan;
      let {languages} = plan.skills;
      let str = `Мне ${age} и я владую языками:`;
      languages.forEach(function(item){
         str += `${item.toUpperCase()} `;
      });
      return str;
   }
};
console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));
function showExperience(plan){
   let {exp} = plan.skills;
   return exp;
}
console.log(showExperience(personalPlanPeter));
function showProgrammingLangs(plan) {
   let str = "";
   let {programmingLangs} = plan.skills;
   for(let key in programmingLangs){
      str += `Язык ${key} изучен на ${programmingLangs[key]} `;
   }
   return str;
}
console.log(showProgrammingLangs(personalPlanPeter));
const family = ['Peter', 'Ann', 'Alex', 'Linda'];
function showFamily(arr){
   if(arr.length >= 1){
      return `Семья состоит из: ${arr.join(" ")}` ;
   } else{
      return "Семья пуста";
   }
}
console.log(showFamily(family));
const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];
function standardizaStrings(arr){
   let str = arr.join(` `);
   let lowerStr = str.toLowerCase();
   return lowerStr ;
}
console.log(standardizaStrings(favoriteCities));
const someString = 'This is some strange string';
function reverse(str) {
   if(typeof(str) == "string"){
      return str.split('').reverse().join("");
   }else{
      return "Ошибка";
   }
}
console.log(reverse(someString));
const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];
function availableCurr(arr, missingCurr){
   let str = "";
   arr.length === 0 ? str = 'Нет доступных валют' : str = 'Доступные валюты:\n';
   arr.forEach(function(item, index){
      if(item !== missingCurr){
         str += `${item}\n`;
      }
   });
   return str;
}
console.log(availableCurr(baseCurrencies, additionalCurrencies));
const shoppingMallData = {
   shops: [
      {
         width: 10,
         length: 5
      },
      {
         width: 15,
         length: 7
      },
      {
         width: 20,
         length: 5
      },
      {
         width: 8,
         length: 10
      }
   ],
   height: 5,
   moneyPer1m3: 30,
   budget: 50000
};

function isBudgetEnough(data) {
   let area = 0;
   let volume = 0;
   data.shops.forEach(item =>{
   area += item.width * item.length;
   });
   volume = area * data.height;
   if(data.budget - (volume * data.moneyPer1m3) >= 0){
      console.log("Бюджета достаточно");
   }else{
      console.log("Бюджета недостаточно");
   }
}
isBudgetEnough(shoppingMallData);
const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh',
                  'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

function sortStudentsByGroups(arr) {
   arr.sort();
   const a = [], b = [], c = [], rest = [];
   for(let i = 0; i < arr.length; i++){
      if(i < 3){
         a.push(arr[i]);
      } else if(i < 6){
         b.push(arr[i]);
      } else if(i < 9){
         c.push(arr[i]);
      } else{
         rest.push(arr[i]);
      }
   }
   return [a, b, c, `Оставшиеся студенты ${rest.length === 0 ? '-' : rest.join(", ")}`];
}
console.log(sortStudentsByGroups(students));
const restorantData = {
   menu: [
      {
            name: 'Salad Caesar',
            price: '14$'
      },
      {
            name: 'Pizza Diavola',
            price: '9$'
      },
      {
            name: 'Beefsteak',
            price: '17$'
      },
      {
            name: 'Napoleon',
            price: '7$'
      }
   ],
   waitors: [
      {name: 'Alice', age: 22}, {name: 'John', age: 24}
   ],
   averageLunchPrice: '20$',
   openNow: true
};
function transferWaitors(data) {
   const copy = Object.assign({}, data);

   copy.waitors = [{name: 'Mike', age: 32}];
   return copy;
}
console.log(transferWaitors(restorantData));
let box = document.querySelector(".box");
let button = document.querySelectorAll("button");
let kolobok = document.querySelector(".kolobok");
console.log(box);
console.log(button);
console.log(kolobok);
box.style.width = "110px";
let btn = document.querySelectorAll("button");
btn.forEach(item =>{
   item.addEventListener("click", () =>{
   item.remove();
   });
});
function pow(a, b){
   let result = 1;
   for(let i = 1; i <= b; i++){
      result *= a;
   }
   return result;
}

console.log(pow(2,6));
let student = {
   js: [{
      name: "john",
      progress: 100
   },{
      name: "Ivan",
      progress: 60
   }],
   html: {
      basic: [{
         name: "Peter",
         progress: 20
      },{
         name: "Ann",
         progress: 18
      }],
      pro: [{
         name: "Sam",
         progress: 10
      }]
   }
};
function getTotal(data){
   let total = 0;
   let students = 0;
   for(let course of Object.values(data)){
      if(Array.isArray(course)){
         students += course.length;
         for(let i = 0; i < course.length; i++){
            total += course[i].progress;
         }
      } else{
         for(let subCourse of Object.values(course)){
            students += subCourse.length;
               for(let i = 0; i < subCourse.length; i++){
                  total += subCourse[i].progress;
         }
         }
      }
   }
   return total / students;
}
console.log(getTotal(student));
function getTotalByRecursion(data){
   if(Array.isArray(data)){
      let total = 0;
      for(let i = 0; i < data.length; i++){
         total += data[i].progress;
      }
      return [total, data.length];
   } else{
      let total = [0, 0];
      for(let subData of Object.values(data)){
         const subDataArr = getTotalByRecursion(subData);
         total[0] += subDataArr[0];
         total[1] += subDataArr[1];
      }
      return total;
   }
}
let result = getTotalByRecursion(student);
console.log(result[0]/result[1]);
function factorial(n) {
   if(typeof(n) !== "number" || !Number.isInteger(n)){
      return "Error";
   }
   if(n >= 1){
      return n * factorial(n - 1);
   } else{
      return 1;
   }
}
console.log(factorial(5));*/
const btns = document.querySelectorAll("button");
btns[0].addEventListener("click", () =>{
   if(!btns[0].classList.contains("blue")){
      btns[0].classList.add("blue");
   } else{
      btns[0].classList.remove("blue");
   }
});
btns[1].addEventListener("click", () =>{
   if(!btns[1].classList.contains("yellow")){
      btns[1].classList.add("yellow");
   } else{
      btns[1].classList.remove("yellow");
   }
});
btns[2].addEventListener("click", () =>{
   if(!btns[2].classList.contains("purple")){
      btns[2].classList.add("purple");
   } else{
      btns[2].classList.remove("purple");
   }
});
btns[3].addEventListener("click", () =>{
   if(!btns[3].classList.contains("green")){
      btns[3].classList.add("green");
   } else{
      btns[3].classList.remove("green");
   }
});
btns[4].addEventListener("click", () =>{
   if(!btns[4].classList.contains("red")){
      btns[4].classList.add("red");
   } else{
      btns[4].classList.remove("red");
   }
});
   const deadLine = "2022-06-11";
   function getTimeRemaining(endtime){
      const t = Date.parse(endtime) - Date.parse(new Date()),
            days = Math.floor(t / (1000 * 60 * 60 * 24)),
            hours = Math.floor((t / (1000 * 60 * 60) % 24)),
            minutes = Math.floor((t / 1000 / 60) % 60),
            seconds = Math.floor((t / 1000) % 60);
      return {
         "total": t,
         "days": days,
         "hours": hours,
         "minutes": minutes,
         "seconds": seconds,
      };
   }
   function getZero(num){
      if(num >= 0 && num < 10){
         return `0${num}`;
      } else{
         return num;
      }
   }
   function setClock(selector, endtime){
      const timer = document.querySelector(selector),
            days = document.querySelector("#days"),
            hours = document.querySelector("#hours"),
            minutes = document.querySelector("#minutes"),
            seconds = document.querySelector("#seconds"),
            timeInterval = setInterval(updateClock, 1000);
      updateClock();
      function updateClock(){
         const t = getTimeRemaining(endtime);
         days.innerHTML = getZero(t.days);
         hours.innerHTML = getZero(t.hours);
         minutes.innerHTML = getZero(t.minutes);
         seconds.innerHTML = getZero(t.seconds);
         
         if(t.total <= 0){
            clearInterval(timeInterval);
         }
      }
   }
   setClock("#timer", deadLine);
   const inputUan = document.querySelector("#uan"),
         inputUsd = document.querySelector("#usd");
   inputUan.addEventListener("input", () => {
      const request = new XMLHttpRequest();

      request.open('GET', 'current.json');
      request.setRequestHeader('Content-tupe', 'application/json; charset=utf-8');
      request.send();

      request.addEventListener("load", () => {
         if(request.status === 200){
            console.log(request.response);
            const data = JSON.parse(request.response);
            inputUsd.value = (+inputUan.value / data.current.usd).toFixed(2);
         } else{
            inputUsd.value = "Что-то пошло не так";
         }
      });
   });

