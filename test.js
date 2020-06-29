// let year = prompt('Какой сейчас год?','');

// if (year < 2019) {i
//     alert('Рано');
// }
// else if ((year > 2019)){
//    alert('Поздно')
// }
// else{
//    alert('Именно так')
// }

// let year = prompt('How old are you?','');

// if (year < 18){
//     alert('you small');
// }

// else if  ((year > 18)){
//      alert('Доступ разрешён');
// }

// for( let i = 0;i < 10;i++){
//     if(i % 2 == 0)continue;
//       alert(i);
// }

// let arr = ['bred','tea','sugar','sweet'];

// arr.push ('Alan');
// arr.pop();
// arr.shift();
// arr.unshift('dakkar');
// arr[0] = 'lordBlackwood'
// alert(arr);
// Array = [
//     'fkks',
//     'fsss',
//      'klsd',
//       'lord'
// ]
// alert(Array)
// Array.shift();
// arr.unshift('skdokdko');

// function eat(arr) {
//     arr.pop();
// }
// let arr = ['tea','bred','sugar','chiz','table']
// alert(arr.length);
// eat(arr);
// eat(arr);
// alert(arr.length);

// let names = 'Misha, Kate, Alex, Petr';
// let arr = names.split(',');

// for ( let i=0;i<arr.length;i++){
//     alert('Вам сообщение '+arr[i]);
// }

// let  str  = 'Kate';

// alert(str.split(''));

// let arr = ['Misha', 'Alex', 'Kate', 'Petr', ];
// let str = arr.join(';');
// alert(str);

// alert(new Array(4).join('ха'));

// let arr = ['I' ,'go' ,'home'];
// arr.splice(2, 0,'we', 'going');
// alert(arr);

// let arr = [1,2];
// let newArr = arr.concat(3,4);
// alert(newArr);

// let userName = 'Alan';

// function showMessage(){
//      userName = 'Alan';
//      let message = 'Hello I ' + userName;
//       alert(message);
// }
// showMessage();

// function calcD(a,b,c){
//     return b*b - 4*a*c;
// }
// let test =calcD(-4,2,1);
// alert(test);

// let myFriend = {
//      'name' : 'Alan',
//      'legs' : 2,
//    'friends': 50,
//  'the drink': 'water'
//  };

//  myFriend.name = 'Alex';
//  myFriend['game'] = 'football';
//  let nameOffriend = myFriend.game;
//  alert(nameOffriend);

//  let nameOffriend = myFriend['the drink'];
//  alert(nameOffriend);

// let testObj = {
//      12 :'Kirill',
//      15 :'David',
//      25 :'Alex'
// };
// let playerNumber = 15;
// let player = testObj[playerNumber];
// alert(player);

// let myStorage = {
//     'car':{
//         'inside':{
//             'glove box' : 'maps',
//             'passenger seat':'crumbs'
//         },
//         'outside':{
//             'trunk':'Jack'
//         }
//     }
// };
// let gloveBoxContent = myStorage.car.inside['glove box'];
// alert(gloveBoxContent);

// let menu = {
//     width: 400,
//     title:'Menu'
// };
// for ( let key in menu){
//     alert('key: '+ key + 'Значение:' + menu[key]);
// }

// let menu = {
//         width: 400,
//         height: 200,
//         title:'Menu'
//     };
//     let counter = 0;
//     for (let key in menu){
//            counter++;
//     }
//     alert('All ' +  counter);

// let user  = {
//      name: 'Alan',
//     surname: 'Blackwood',
// };
// user.age = 25;
// for (let prop in user){
//     alert(prop);
// }

// let codes = {
//     '5': 'Poland',
//     '12':'Uk',
//     '73':'USA'
// }
// for (let code in codes){
//         alert(code);
// }

// let browsers = ['Chrome','fireFox','Edge', 'Safari', 'Opera'];

// for(let browser in browsers){
//     console.log(browser);
// }

// for(let index in browsers){
//     console.log(browsers[index]);
// }

// for(let browser of browsers){
//     console.log(browser);
// }

// console.log(browsers);

// let now = new Date(2019,10,18,0,0,0,0);
//     alert(now.getFullYear());

// let d = new Date(1707,1,28);
// d.setDate(d.getDate()+ 2);
// alert(d);

//    let element =  document.getElementById('header');
//        console.log(element);

// let divs = document.getElementsByTagName('div');
// let links = document.getElementsByClassName('my-link');
// console.log('collection of tag name:'+ divs);
// console.log('collection of class name:'+ links);

// let el_1 = document.getElementById('some-block');
// let el_2 = document.getElementsByTagName('div');

// function changeSingle(element){
//      element.innerHTML ='here is some content';
// }

// function changeCollection(elements){
//      for (let i = 0; i < elements.length; i++) {
//          elements[i].innerHTML = 'we sufv changed';
//      }
// }

// let element = document.getElementById('test-link');
// element.href = 'file:///C:/Users/%D0%A2%D0%B8%D0%B3%D1%80/Desktop/Snake.html';

// element.style.color = 'red';
// element.style.background  = 'lime';
// element.style.fontFamily ='Anton, sans-serif';

// function test(){
//     let element = document.getElementById('block-1');
//     let link = document.createElement('a');
//     let br = document.createElement('br');

//     link.innerHTML = 'go to google';
//     link.href = 'http://google.com';

//     element.appendChild(br);
//     element.appendChild(link);
// }

// function test(){
//     let element = document.getElementById('block-2');
//     document.body.removeChild(element);
// }

// let  tl = new MyTimer(+100);
// tl.run();

// function MyTimer(t){
//     this.time = t;

//     this.tick = function(){
//         this.time--;
//         console.log(this.time);
//     }
//     this.run = function(){
//         setInterval (() => {
//             this.tick();

//         }, 1000);
//     }
// }

// function fun1(){
// let chbox;
// chbox = document.getElementById('one');

// if (chbox.checked){
//     alert('tool');
// }
// else
// {
//     alert('no');
// }
// }

// function fun2(){
//     let radi = document.getElementsByName('r1');
//     for (let i = 0; i < radi.length; i++) {
//         if(radi[i].checked){
//             alert('chose '+i+ ' element');
//         }
//     }
// }

// function fun1(){
// let sel = document.getElementById('mySelect').selectedIndex;
// let options = document.getElementById('mySelect').options;
// alert('by ' +options[sel].text );
// }

// function fun1(){
//     let rng = document.getElementById('r1');
//     let p = document.getElementById('one')
//     p.innerHTML = rng.value;
// }

// function fun1(){
//     let rng = document.getElementById('r1');
//     let i1 = document.getElementById('i1')
//     i1.value = rng.value;
// }

// function fun1(){
//     let rng = document.getElementById('r1');
//     let div = document.getElementById('test');
//     div.style.width = rng.value+'px';
// }

// function fun1(){
//     let rtl = document.getElementById('rtl').value;
//     let rtr = document.getElementById('rtr').value;
//     let rbr = document.getElementById('rbr').value;
//     let rbl = document.getElementById('rbl').value;
//     let ttl = document.getElementById('ttl');
//     let ttr = document.getElementById('ttr');
//     let tbr = document.getElementById('tbr');
//     let tbl = document.getElementById('tbl');

//     let block = document.getElementById('block');

//     ttl.value = rtl;
//     ttr.value = rtr;
//     tbr.value = rbr;
//     tbl.value = rbl;

//     block.style.borderRadius = rtl + 'px ' + rtr + 'px ' + rbr +'px ' + rbl + 'px '  ;
// }

// document.getElementById('nav').onmouseover = function(event){
//      let target = event.target;
//      if(target.className == 'menu-item'){
//           let s = target.getElementsByClassName('submenu');
//           closeMenu();
//           s[0].style.display = 'block';

//      }
// }

// document.onmouseover = function(event){
//     let target = event.target;
//     console.log(event.target);
//     if(target.className!='menu-item'&& target.className!='submenu' ){
//          closeMenu();
//     }
// }

// function closeMenu(){
//      let menu = document.getElementById('nav');
//      let subm = document.getElementsByClassName('submenu');
//      for (let i=0; i < subm.length; i++ ){
//          subm[i].style.display = 'none';
//      }
// }

// function hello() {
//     console.log('Hello',this);
// }

// const person = {
//     name: 'Alan',
//     age: 20,
//     sayHello: hello,
//     sayHelloWindow: hello.bind(this),
//     logInfo: function(job,phone){
//         console.group(`${this.name} info:`);
//         console.log(`Name is ${this.name}`);
//         console.log(`Age is ${this.age}`);
//         console.log(`Job is ${job} `);
//         console.log(`Phone is ${phone} `);
//         console.groupEnd();
//     }
// }

// const darren ={
//     name:'Darren',
//     age: 23
// }

//   const fnDarrenInfoLog = person.logInfo.bind(darren)();
// person.logInfo.bind(darren);

//     person.logInfo.call(darren, 'Fullstak', '44553553');
//    fnDarrenInfoLog('fullstack', '899209330');

// person.logInfo.apply(darren,['Fullstak','90230909020'])

// const array = [1,2,3,4,5]

// function multBy(arr,n){
//     return arr.map(function(i) {
//         return i*n
//     })
// }
// Array.prototype.multBy = function(n,arr) {
//     return arr.map(function(i) {
//                 return i*n
//     })
// }

// console.log(array.multBy(20));
// array.multBy(2);
// console.log ('multBy', this);
//    })
// }

// let tab ;
// let tabContent;

// window.onload = function(){
//     tabContent = document.getElementsByClassName('tabContent');
//     tab = document.getElementsByClassName('tab');
//     hideTabsContent(1);
// }

//    function hideTabsContent(a) {
//        for (let  i = a; i < tabContent.length; i++ ){
//       tabContent[i].classList.remove('show');
//       tabContent[i].classList.add('hide');
//       tab[i].classList.remove('whiteborder');
//      }
// }

//    document.getElementById('tabs').onclick = function (event){
//        let target = event.target;
//        if(target.className == 'tab'){
//            for(let i=0; i<tab.length; i++){
//                if(target == tab[i]){
//                    showTabsContent(i);
//                    break;
//                }
//            }
//        }
//    }

//    function showTabsContent(b){
//        if (tabContent[b].classList.contains('hide')){
//            hideTabsContent(0);
//            tab[b].classList.add('whiteborder');
//            tabContent[b].classList.remove('hide');
//            tabContent[b].classList.add('show');
//        }
//    }

// let modal = document.getElementById('myModal');
// let btn   = document.getElementById('myBtn');
// let span  = document.getElementsByClassName('close')[0];

// btn.onclick = function (){
//      modal.style.display = 'block';
// }

// span.onclick = function(){
//     modal.style.display ='none';
// }

// window.onclick = function(event){
//     if(event.target == modal){
//         modal.style.display = 'none';
//     }
// }

// function myMove(){
//     let elem = document.getElementById('myAnimation');
//     let pos = 0;
//     let id = setInterval(frame,10);
//     function frame(){
//         if(pos == 450){
//             clearInterval(id);
//        }else {
//            pos++;
//            elem.style.top = pos + 'px';
//            elem.style.left = pos + 'px';
//         }
//     }
// }

// let slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n){
//     showSlides(slideIndex += n);
// }

// function currentSlide(n){
//     showSlides(slideIndex = n);
// }

// function showSlides(n){
//     let i;
//     let slides = document.getElementsByClassName('mySlides');
//     let dots = document.getElementsByClassName('dot');

//     if(n > slides.length){
//         slideIndex = 1
//     }
//     if(n < 1){
//         slideIndex = slides.length
//     }
//     for (i = 0; i < slides.length; i++){
//         slides[i].style.display = 'none';
//     }
//     for(i = 0; i < dots.length; i++){
//         dots[i].className = dots[i].className.replace('active','');
//     }
//     slides[slideIndex-1].style.display = 'block';
//     dot[slideIndex-1].className += 'active';
// }

let body = document.getElementsByTagName("body");

let red = () => {
  let by = document.getElementsByClassName("by");

  document.body.style.backgroundColor = "crimson";
};

let oran = () => {
  // let by = document.getElementsByClassName("by");
  document.body.style.backgroundColor = "orange";
};

let yw = () => {
  let by = document.getElementsByClassName("by");
  document.body.style.backgroundColor = "yellow";
};

let gr = () => {
  let by = document.getElementsByClassName("by");
  document.body.style.backgroundColor = "green";
};

let blue = () => {
  let by = document.getElementsByClassName("by");
  document.body.style.backgroundColor = "royalblue";
};

let purp = () => {
  let by = document.getElementsByClassName("by");
  document.body.style.backgroundColor = "purple";
};

// function myFun(){
//     let input,filter,ul,li,a,i;
//     input = document.getElementById('myInput');
//     filter = input.value.toUpperCase();
//     ul = document.getElementById('myUL');
//     li = ul.getElementsByTagName('li');

//     for(i=0;i<li.length; i++){
//         a = li[i].getElementsByTagName('a')[0];
//         if(a.innerHTML.toUpperCase().indexOf(filter)> -1){
//             li[i].style.display = '';
//         }
//         else{
//            li[i].style.display = 'none';
//         }
//     }
// }

// let modal = document.getElementById('myModal');
// let img = document.getElementById('myImg');
// let modalImg = document.getElementById('img01');
// let captionText = document.getElementById('caption');

// img.onclick = function(){
//     modal.style.display = 'block';
//     modalImg.src = this.src;
//     captionText.innerHTML = this.alt;
// }

// let span = document.getElementsByClassName('close')[0];
// span.onclick = function(){
//     modal.style.display = 'none';
// }

// function move(){
//     let elem = document.getElementById('myBar');
//     let width = 10;
//     let id = setInterval(frame , 10);
//     function frame() {
//         if(width>=100){
//             clearInterval(id);
//         }
//         else{
//               width++;
//               elem.style.width = width + '%';
//               document.getElementById('label').innerHTML = width * 1 + '%';
//         }
//     }
// }

// function myFun(){
//  let popup = document.getElementById('myPopup');
//  popup.classList.toggle('show');
// }

// let acc = document.getElementsByClassName('accordion');
// let i;
// for(i = 0; i < acc.length;i++){
//   acc[i].onclick = function(){
//       this.classList.toggle('active');

//       this.nextElementSibling.classList.toggle('show');
//   }
// }

// class Task {
//   constructor(title = Task.getDefaultTitle()){
//       this.title = title;
//       this.done = false;
//       console.log('task');
//    }
//    complete(){
//        this.done = true;
//        console.log(`Task '${this.title}' complete`)
//    }
//    static getDefaultTitle(){
//        return 'Task';
//    }
// }

// let task = new Task('clear the room');
// console.log(task.done);
// let task2 = new Task('by food');
// let task3 = new Task()

// alert(task.title);
// alert(task2.title);
// alert(task3.title);
// console.log(task instanceof Task);

// task2.complete();

// function Task(){

// }

// let Task = function Task(){

// }

// class Task{
//     constructor(){
//         console.log('Creating a task');
//     }
// }

// let Task = class {
//     constructor(){
//         console.log('Creating a task');
//     }
// }

// let SubTask = class extends  Task{
//     constructor(){
//         super();
//         console.log('Creating a subtask')
//     }
// }

// let task = new Task();
// let subTask = new SubTask();

// console.dir(task);
// console.dir(subTask);

// function add1(x,y){ ES5
//   return x + y;
// }
// console.log(add1(4,8))

// let add = (x,y) =>  x + y ;

// let square = function(x){
//    return x * x;
// }

// alert(add(2,5));
// alert(square(10));

// let giveMeAnswer = () => 42;
// alert(giveMeAnswer());

// let getPerson = () => ({name:'John'});

// alert(getPerson());

// (() => alert('IIFE'))();

// let numbers = [1,2,3,4,5,6,7,8,9,10];

// let sum = 0;

// numbers.forEach( num => sum += num);

// let squared = numbers.map(n => n*n);

// console.log(sum);
// console.log(squared);

// let person = {
//      name:'Bob',
//      greet: function(){

//     setTimeout(() => {

//     console.log('Hello, my name is ' + this.name);
//     console.log(this);
//          },2000);
//      }
// };
// person.greet();

// let person ={
//     firstname:'John',
//     lastname:'Bale'
// };

// let {firstname:first, lastname:last, age = 25 } = person;

// console.log(first, last, age);

// let user = {
// firstname:'John',
// lastname:'Bale',
// social: {
//     instagram:'@johngow2'
//    }
// }

// let {firstname: first, lastname: last, social:{instagram:im}, age = 25 } = user;

// console.log(first, last,im, age);

// function post(url, {data:{firstname, lastname}, cache}){
// console.log(firstname, lastname,cache);

// }
// let result = post('api/users', {data:user ,cache:false });

// switch(user){
//     case'John':
//     alert('lol');
//     break;
//     default:alert(social);
// }

// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
//   }

//   ask(
//     "Вы согласны?",
//     function() { alert("Вы согласились."); },
//     function() { alert("Вы отменили выполнение."); }
//   );

// function applyForVisa (documents){
//   console.log('loading...');
//   let promise = new Promise(function(result,reject){

//     setTimeout(function(){
//       Math.random() > .5 ? result ({}) : reject('error in visa ');
//       }, 2000);
//   });
//  return promise;
// }

// function bookHotel(){
//  console.log('броинруем отель');

// }

// function buyTickets(){
//  console.log('buy  tickets');

// }

// applyForVisa({})
//  .then( visa => console.info('visa ok '))
//  .then(bookHotel)
//  .then(buyTickets)
//  .catch(error => console.error(error));

// async function f() {

//     let promise = new Promise((resolve, reject) => {
//       setTimeout(() => resolve("готово!"), 1000)
//     });

//     let result = await promise; // будет ждать, пока промис не выполнится (*)

//     alert(result); // "готово!"
//   }

//   f();

//   function* generateSequence() {
//     yield 1;
//     yield 2;
//     return 3;
//   }

//   let generator = generateSequence();

//   for(let value of generator) {
//     alert(value); // 1, затем 2
//   }

// function User() { }
// User.prototype = { admin: false };

// let user = new User();
// alert(user.admin);

// alert('Tigran' > 'Artiv');

// let sum = (a, b) => {
//     let result = a + b;
//     return result;
//   };

//   alert( sum(1, 2) )

// const palindrom = (str) =>{
//     str = str.toLowerCase();
//     return str==str.split('').reverse().join('');

// }
// console.log(palindrom('аргентинаманитнегра'));



// function full(num){
// if(num / 3 === Number){
// alert('full');
//  }
// }
// full(7);



//TATTOO*15

// if(I != Programing()){
//   I.Sleep();
// }else{
//   I.Drink(tea);
// }


let greeting = 'Hello ';

alert('Your name');
let name = prompt();


alert('Your nick');
let nick = prompt();

greeting += nick;

alert(greeting);