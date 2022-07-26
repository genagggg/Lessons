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

class Animal {
    constructor(options){
this.name=options.name
this.age=options.age
this.hasTail=options.hasTail
    }
}
const animal1 = new Animal({
    name:'Animal',
    age: 23,
    hasTail: true
})

class Cat extends Animal {}
const cat1 = new Cat({
    name: 'Cat',
    age: 32,
    hasTail: true
})

for(key in cat1){
    console.log('Key Cat', key)
}