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
*/

class Clock{
   constructor({template}){
      this.template = template
   }
   render(){
      let date = new Date();

      let hours = date.getHours();
      if (hours < 10) hours = '0' + hours;

      let mins = date.getMinutes();
      if (mins < 10) mins = '0' + mins;

      let secs = date.getSeconds();
      if (secs < 10) secs = '0' + secs;

      let output = this.template
         .replace('h', hours)
         .replace('m', mins)
         .replace('s', secs);

      console.log(output);
   }
   stop(){
      clearInterval(timer)
   }
   start(){
      this.render()
      this.timer = setInterval(() => this.render(), 1000)
   }
}
let clock = new Clock({ template: 'h:m:s' });
clock.start();
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
console.log(sum());*/
const storeName = "Fortuna"
const stopeDescription = {
   budget: 10000,
   employees: ['Kirill', 'Andrei', 'Maxim'],
   products: {
      'cup': 10,
      'cum': 20,
   },
   open: true,
};
const answers = []
answers[0] = prompt('Как вас зовут?')
answers[1] = prompt('Какая ваша фамилия?')
answers[2] = prompt('Сколько вам лет?')
answers.forEach(function(item, i, arr){
   console.log(item);
})

