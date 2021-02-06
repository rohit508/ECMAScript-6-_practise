// ======= let ==========


// let  a = 10;
// console.log(a)



// let  a = 10;
// let a = 11;
// console.log(a)



// let name = "saylani"
// let obj ={
//     name : name
// }

// console.log(obj)



// =============================  const  =========================



// const  a = 10 ;
// console.log(a)



// const  b = 10;
// const b =10;
// console.log(b)




// const  name = "saylani";
//  const obj = {
//      name :name
//  }
//  console.log(obj)



// const  name = "saylani"
// const name = "saylani"
// const obj ={
//     name :name
// }



// ================== templete literals =========


// let firstname = "Rohit";
// let  lastname  ="myar";
// console.log(firstname+" " + lastname)


// example...===


// let firstname = "mark";
// let lastname = "myar";
// console.log(` my name is ${firstname}  ${lastname}`)



// let name = "mark";
// let lname = "myar";
// console.log(`${name} ${lname}`)



// // example...===

// firbase.database().ref('karachi/' +'saylani'+'webandmobile'+ lname)

// // example...===

// firebase.database().ref(`karachi/saylani/webandmobile ${name}`)





// ===================Spread syntax (...)
// // example...===








// let arry =["Rohit","myar"]
// let newary = ["bhai"]
// var merge = arry.concat(newary)

// console.log(merge)




// let arry =["Rohit","myar"]
// let newary = [...arry,"bhai"]
// console.log(newary)


// let obj ={
//     name :"rohit"
// }
// let obj1 ={
//     ...obj ,lname :"myar"
// }
// console.log(obj1)


// let obj ={
//     name :"rohit"    
// }

// let obj2 ={
//     lname :"rohit"
 
//  }

// let obj13 ={
//    ...obj,...obj2

// }
// console.log(obj13)


// let a = "rohit";
// let b = "myar";
// console.log(`${a} ${b}`)
//  spread operater 

// let ary =["a","b","c",]
// let newary=[...ary,"d","e",]
// console.log(newary)

// let a ={
//     name :"rohit"
// }

// let b ={
//     ...a, lname :"myar"
// }
// console.log(b)


// =================object desstructuring============== 
// let {} = school;


// arrayyy

// const foo = ['one', 'two', 'three'];

// const [red, yellow, green] = foo;
// console.log(red); // "one"
// console.log(yellow); // "two"
// console.log(green); // "three"

// object  object object object object object object

// let foo = {
//     name :"ROhit",
//     lstname :"myar"
// }


// let {name,lstname} = foo;


// console.log(name)







// let a  =["A","B","C"]
// let [d,e,f] = a;
// console.log(f)
// console.log(e)
// console.log(d)




// let a ={
//     name :"Rohit",
//     lname :"myar"
// }


// let {name,lname} = a;

// console.log(lname)
// console.log(name)

// const Object = {
//     name: "rohit",
//     lname: "rohit",
// }

// const {name} = Object
// console.log(name)

// Conditional (ternary) operator

//  let value = 18
//  if(10 > value){
//      console.log("true")
//  }else{
//      console.log("false")
//  }

// example...===


// let value = 18
// let check =value > 10 ? "ture" : "false" 


// console.log(check)


//========================= program of percentage using terary operator ===============

/*  let name =  +prompt("ENTER YOU PERSENTAGE")

let check= 
name >= 90 && name <=100 ? "A+"
:name >= 80 && name < 90 ? "A"
:name >= 70 && name <80 ? "B"
:name >=60 && name <70 ? "C"
:name >= 50 && name <60 ? "D"
:name >= 40 && name <50 ? "E"
:name >= 0 && name <40 ? "F"

    
:"please Enter correct persentage"
alert(check) */
 

// var a = 15 ;
// var z; 

// a > 10 ?  z = "true" :z = "false "
// console.log(z)

// var age = 11;
// var a = age <= 10? "equl":"not equl"
// alert(a)


// var bool= true ;
// var check = bool && "rohit"
// console.log(check)



//===================== Async or sync



// setTimeout(function() {
//     console.log("Number     1")
// }, 1000);




// console.log("Number     2")



// console.log("Number     3")


// var name1 ;
// setTimeout(function() {
//    name1 ="ali"
// }, 2000);


//  setInterval(function() {
//       console.log(name1)
//  }, 1000);




// =============function= Expressions=================






// function foo (){
//     console.log("HELLO WORLD")
// }

// foo ()








// const  remove = function(){
//     console.log("HELLO WORLD")
 
// }

// remove()




// ===========Arrow==function=================





// =============================simple function====================
// function hello1(){
//     console.log("HELLO WORLD")
    
// }
// hello1()
 

// ====================function expression===========

// let hello = function(){
//     console.log("HELLO WORLD")

// }

// hello()

// ===========Arrow==function=================

// var hello2 = ()=>{
//     console.log("HELLO WORLD")

// }
// hello2()


//  roh = () => {
//     console.log("HELLO WORLD")

// }

// var a = () => {

// }


// a = () => {
// }


// ===========Arrow==function=================
// var name3 = "rohit";
// const back =()=>{
//     console.log(`hello ${name3}`)
// }


// back()
// ===========Arrow==function=================


// const back =(name3)=>{
//     console.log(`hello${name3}`)
// }


// back("3")



// ===========Arrow==function=================


    // const back = name3  =>{
    //     console.log(`hello ${name3}`)
    // }


    // back("3")


// ===========Arrow==function=================



// const foo= (name1,name2) =>{
//     console.log(`hello ${name1} ${name2}`)
// }

// foo("rohit","myar");

// ===========Arrow==function=================


//  const foo = ()=> {
//      return "rohit"
//  }
//  console.log(foo());

 // ===========Arrow==function=================


//  const foo = ()=>  "rohit"
// console.log(foo());




 // ===========setinterval =================




//  setInterval(function() {
//      console.log("hello world")
     
     
//  }, 1000);


 // ===========setinterval =================


// setInterval(() => { console.log("hello")}, 1000);


//  let getData = (render_data)=> {
//      setInterval(() => {
//          render_data ("mark")
//      },3000);
//  }

//  let render_data =(name1)=>{
//      console.log(name1)
//  }
//   getData(render_data)










// let getData = (datarender) => {
//     setInterval(() => {
//         datarender("hello world")
//     }, 1000);
// }



// let datarender = (name) => {
// console.log(name)
// }
// getData(datarender);










// ===========searchwith =================


// let   name =  "mark"
// let search = "s"
// if(name.startsWith(search){
//     console.log(name)
// } 




// ============================class ======================
// simple=============

// function Car(name , model) {
//     this.name = name;
//     this.model = model ;
    
// }
// const  car = new Car ("corola" , 2020)
//  console.log(car)

// function Car(car , model) {
//     this.car = car,
//   this.model = model
//   }
//   var data1 = new Car("rohit", "car")
//   console.log(data1)					
// ============================class ======================



// class Car {
//     constructor(name, year) {
//       this.name = name;
//       this.year = year;
//     }
//   }
  
//   myCar = new Car("Ford", 2014);


// console.log(myCar)

// class Car {
//     constructor(name , model){
//     this.name = name ;
//     this.model = model ;
//     }
    
// }
// car1 = new Car("corola",2015);
// console.log(car1)


// class Car {
//     constructor(name , age){
//     this.name = name ,
//     this.age =  age
//     }
//     }
    
//     var car = new Car ("rohit",14)
//     console.log(car.age)


// function Car(name){
//     this.name = name
// }

// var car = new Car("rohi")
// console.log(car)
//============================= promise====================example====================

// var name1;
// setTimeout(function() {
//     name1 = "Hello World"
// },2000)
// setInterval(() => {
//    console.log(name1) 
// }, 1000);


//============================= promise========================================



    // var promise =  new Promise (function(resolve,reject){
    //     var  name  = "mark john"
    //     if(name === "mark john"){
    //         resolve("yes..! your name is list")
    //     }else {
    //         reject ("Your name not on list")
    //     }
        
    // })


    // promise.then (function(data){

    //     console.log("resolve===>",data)
    // })
    // .catch(function(error){

    // console.log("error==>",error)


    // })


//============================= promise========================================

/* let promise = new Promise (function(resolve,reject){
 firebase.database().ref("users").on("child_added" ,function(data){
     if(data.val()){
         resolve(data.val())

     }else{
         reject("something went wrong")
     }

})
})
 promise.then(function(data){
     console.log(data)
     .catch(function(error){
         console.log(error)
     })
 })
 */
//============================= promise========================================




//   let myPromise = new Promise(function(myResolve, myReject) {
//     // "Producing Code" (May take some time)
    
//       myResolve(); // when successful
//       myReject();  // when error
//     });
    
//     // "Consuming Code" (Must wait for a fulfilled Promise).


//     myPromise.then(
//       function(value) { /* code if successful */ },
//       function(error) { /* code if some error */ }
//     ); 


// ================= Creating and Using A Promise Step by Step

// let promise = new Promise ((resolve ,reject)=>{
//     let num = 10;
//     num === 10? resolve("successfully")
//     :reject("Promise reject")

// })

// promise.then((message) => { 
//     console.log(message + " then");
// }).catch((message) => { 
//     console.log(message + " catch");
// });


// console.log(promise)




// let mypromise = new Promise ((resolve,reject)=>{
//     var  num = 10;
//     num === 10  ? resolve ("successfully")
//     :reject("Failed")
    
//     })
    
//     mypromise.then((message)=>{
//     console.log(message)
    
//     }).catch((message)=>{
//     console.log(message)
//     })

// let mypromise = new Promise(function (Resolve, reject){
//     var a = 10;
//     a === 1 ? Resolve("ok")
//     :reject ("Error")
    
    
//     })
    
//     console.log(mypromise)

//============================= filter ========================================



// var ages = [10,12,19,20]
// document.write(`${ages}  <br>`)
// var b = ages.filter(check)
// document.write(`${b}  <br>`)

// function check(age){
// return age >= 8;
// }


// var sum = [1,2,3,4,5,6,7,8,9,10]
// console.log(sum) 

// sum.map((v,i)=>{
// console.log(v+i) 
// })


