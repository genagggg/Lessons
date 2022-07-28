//Гибкая настройка Обьектов в JavaScript

// const person=Object.create({
//     calculateAge(){
//         console.log( new Date().getFullYear()-this.age)
//     }
// },{
//     name: {
//         value: 'Vladilen',
//         enumerable: true,
//         writable: true,
//         configurable: true

//     },
//     age: {
//         value: 1993,
//         enumerable: true
//     },
//     birthYear: {
//         get(){
//             return new Date().getFullYear() - this.age;
//         },
//         set(value){
//  document.body.style.background = 'red';
// console.log('set age', value);
//         }
//     }
// });

// for(key in person){
//    if(person.hasOwnProperty(key)){
//     console.log('full_key', person[key])
//    }
// }
// console.log(person.birthYear);
//====================================================

//Классы в ES6

// const animal = {
//     name: 'Animal',
//     age: 5,
//     hasTail: true
// }

// class Animal {
// static type = 'ANIMAL';

//     constructor(options){
//         this.name = options.name
//         this.age = options.age
//         this.hasTail = options.hasTail
//     }
//     voice(){
//         console.log('I am animal')
//     }
// }

// // const animal = new Animal({
// //     name: 'Animal',
// //     age: 5,
// //     hasTail: true
// // })
// // console.log(''||null||0||false)
// class Cat extends Animal{
//     static type = 'CAT';
//     constructor(options){
//         super(options);
//         this.color=options.color;
//     }
//     voice(){
//         super.voice()
//         console.log('I am cat')
//     }

//     get ageInfo(){
//         return this.age*7
//     }

//     set ageInfo(newAge){
//         this.age = newAge
//     }
// }

// const cat = new Cat({
//     name: 'Cat',
//     age: 7,
//     hasTail: true,
//     color: 'grey'
// })
//=================================================
// class Component {
//     constructor(selector){
//         this.$el = document.querySelector(selector)
//     }

//     hide(){
//         this.$el.style.display = 'none'
//     }

//     show(){
//         this.$el.style.display = 'block'
//     }
// }

// class Box extends Component {
//     constructor(options){
// super(options.selector)
// this.$el.style.width = this.$el.style.height =options.size + 'px'
// this.$el.style.background = options.color
//     }
// }

// const box1 = new Box({
//     selector: '#box1',
//     size: 100,
//     color: 'red'
// })

// const box2 = new Box({
//     selector: '#box2',
//     size: 200,
//     color: 'green'
// })

// class Circle extends Box{
//     constructor(options){
//         super(options)

//         this.$el.style.borderRadius = '50%'
//     }
// }

// const c = new Circle({
//     selector: '#circle',
//     size: 90,
//     color: 'green'
// })
//======================================================

// class Animal {
//     constructor(options){
// this.name=options.name
// this.age=options.age
// this.hasTail=options.hasTail
//     }
// }
// const animal1 = new Animal({
//     name:'Animal',
//     age: 23,
//     hasTail: true
// })

// class Cat extends Animal {}
// const cat1 = new Cat({
//     name: 'Cat',
//     age: 32,
//     hasTail: true
// })

// for(key in cat1){
//     console.log('Key Cat', key)
// }

// const person = Object.create({
//     calculateAge(){
//         console.log(new Date().getFullYear()-this.birthYear)
//     }
// },{
//     name: {
//         value: 'Vladilen',
//         enumerable: true,
//         writable: true,
//         configurable: true
//     },
//     birthYear: {
//         value: 1990
//     },
//     age: {
//         get(){
//             return new Date().getFullYear()-this.birthYear
//         },
//         set(value){
//             document.body.style.background = 'red'
//             console.log(value)
//         }
//     }
// })

// person.name = 'Gennadii'
// delete person.name
// for(key in person){
//     if(person.hasOwnProperty('key')){
//     console.log('Key', person[key])
//     }
// }

// class Animal{
//     constructor(options){
//         this.name=options.name
//         this.age=options.age
//         this.hasTail=options.hasTail
//     }
//     voice(){
//         console.log('uf')
//     }
//     // get currentDate(){
//     //     return new Date().getDay()+':'+ new Date().getMonth()+':'+ new Date().getFullYear()
//     // }
// get getInfo(){
//     return this.age*7
// }
//     set getInfo(newAge){
//         this.age = newAge
//     }
// } 

// class Cat extends Animal{
//     static type = 'CAT'
// constructor(options){
//     super(options)
//     this.color=options.color
// }
// voice(){
// super.voice()
// console.log('myau')
// }
// }

// const cat1 = new Cat({
//     name: 'Cat',
//     age: 23,
//     hasTail: true,
//     color: 'grey'
// })

// class Component {
//     constructor(selector){
//         this.$el=document.querySelector(selector)
//     }
//     hide(){
//         this.$el.style.display='none'
//     }

//     show(){
//         this.$el.style.display='block'
//     }
// }

// class Box extends Component{
//     constructor(options){
//         super(options.selector)
//         this.$el.style.width=this.$el.style.height = options.size+'px'
//         this.$el.style.background=options.color
//     }
// }

// class Circle extends Box{
//     constructor(options){
//         super(options)
//         this.$el.style.borderRadius='50%'
//     }
// }

// const box1 = new Box({
//     selector: '#box1',
//     size: 100,
//     color: 'red'
// })

// const box2 = new Box({
//     selector: '#box2',
//     size: 150,
//     color: 'blue'
// })

// const circle = new Circle({
//     selector: '#circle',
//     size: 200,
//     color: 'green'
// })
//==================================================

//Async, Await

// console.log('start')

// console.log('start2')

// function timeOutTwoSec(){
//     console.log('twoSec')
// }

// window.setTimeout(function(){
//     console.log('insideTimeOut 5 sec')
// }, 5000)

// console.log('End')

// setTimeout(timeOutTwoSec, 2000)
//==================================================


// const person = Object.create({},{
//     name: {
//         value: 'Gennadii',
//         enumerable: true
//     },
//     surname: {
//         value: 'Gorokhov',
//         enumerable: true,
//     },
//     fullName: {
//         get(){
//             return `${this.name} ${this.surname}`
//         }
//     }
// })
//===============================================

// let person = {
//     name: 'Lev',
//     surname: 'Tolstoy',
//     get fullName(){
//         return `${this.name} ${this.surname}`
//     }
// }

// alert(person.fullName)

// let word = 'животное бегало по полю и ело траву'
// let mm = word.split(' ').reverse().join('--')

// let predlocation = 'а роза упала на руку азора'
// let reversePredlocation = predlocation.split(' ').reverse()
// console.log(reversePredlocation.join('+'))

// class Animal {
//     constructor(options){
//         this.name=options.name
//         this.age=options.age
//         this.hasTail=options.hasTail
//     }
// }

// const animal1 = new Animal({
//     name: 'Obezyana',
//     age: 35,
//     hasTail: true,
    

// })

// for(key in animal1){
//     console.log(animal1[key])
// }

// class Cat extends Animal{
//     constructor(options){
//         super(options)
//         this.color=options.color
//     }
// }

// let cat1 = new Cat({
//     name: 'Vasya',
//     age: 25,
//     hasTail: true,
//     color: 'red'
// })
//Реализация добавления и удаления квадрата
// class Component{
//     constructor(selector){
//         this.$el=document.querySelector(selector)
//     }

//     hide(){
//         this.$el.style.display = 'none'
//     }

//     show(){
//         this.$el.style.display = 'block'
//     }
// }

// class Box extends Component{
//     constructor(options){
//         super(options.selector)
//         this.$el.style.width=this.$el.style.height=options.size+'px'
//     this.$el.style.background = options.color
//     }
// }

// const box1 = new Box({
//     selector: '#box1',
//     size: 100,
//     color: 'red'
// })

// class Circle extends Box{
//     constructor(options){
//         super(options)
//         this.$el.style.borderRadius = "50%"
//     }
// }

// const circle1 = new Circle({
//     selector: '#circle',
//     size: 250,
//     color: 'yellow'
// })

// let buttonVkl = document.querySelector('.vkl')
// buttonVkl.addEventListener('click', function(event){
//    if(box1.$el.style.display=='none'){
//     box1.show()
//    }
//    else(
//     box1.hide()
//    )
// })
//=====================================================

//Асинхроннорсть >>>

console.log('Request dta....')
// setTimeout(function(){
// console.log('Preparing dats...')
// const bakcendData = {
//     server: 'aws',
//     port: 2000,
//     status: 'working'
// }
// setTimeout(function(){
// console.log('Data resived...', bakcendData)
// }, 2000);
// }, 3000)

//Promise

// const p = new Promise(function(resolve, reject){
// setTimeout(function(){
//     console.log('preparing data...')
//     const person = {
//         name: 'Oleg',
//         age: 25,
//         color: 'green'
//     }
//     setTimeout(function(){
// console.log('Data resived...', person)
//     }, 2000)
//     resolve()
// }, 5000)
// })

// p.then(data=>{
//     console.log('Promise resolved', data)
// })

// const p = new Promise(function(resolve, reject){
//     setTimeout(function(){
// console.log('preparing data...')
// const person = {
//     name: 'Oleg',
//     age: 23,
//     color: 'red'
// }
// resolve(person)
//     },2000)
// }).then(data=>{
//     return new Promise((resolve, reject)=>
//     {
//         setTimeout(
//             function()
//         {
//             data.modify='true'
//         },2000
//         )
        
//     }
// )