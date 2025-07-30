// const accountId=144533;
// let accountEmail="rsghsv@gmail.com"
// var accountCity="Jaipur";

 
//  accountEmail="rsghsv@gmail.com"
//  accountCity="Bengluru";


// console.table([accountCity,accountEmail,accountId]);

// let score="30abc";
// console.log(typeof score);

// let Nscore=Number(score);
// console.log(Nscore);
// console.log(typeof Nscore);


// console.log(null>0);
// console.log(null>=0);
// console.log(null==0);



// const balance=new Number(100);
// console.log(balance.toString());


// const number=123.7787876;

// console.log(number.toPrecision(4));


//change value in numbers by commas in indian system
// const num=1000000;
// console.log(num.toLocaleString('en-IN'));

// const balance=new Number(100);
// let a=Number.MIN_VALUE;
// console.log(a);


// let b=Number.isFinite(123456789);

// console.log(b);





//////////////////Maths:-

//let a=Math.ceil(47.887);


//Date and Time

// let date=new Date();
// console.log(date.toString());
// console.log(date.toISOString);
// console.log(typeof (date));

// let date=new Date();
// let a=date.toLocaleDateString('default',{
//     month:"long",
//     day:'numeric',
//     year:'numeric'
// });

// console.log(a)


// let myTimeStamp=Date.now();

// console.log(date.getTime());


// let array=new Array(1,2,3,4,5);
// array.unshift(7);
// array.shift();
// array.shift();
// console.log(array);

//Function of slice and splice
// let array=[1,2,3,4,5];

// console.log(array);

// console.log(array.slice(1,3));
// console.log(array);


// console.log(array.splice(1,3));
// console.log(array);

//Array conctatination and spread function
// const array=[1,2,3,4,5];
// const array1=[6,7,8,9,10];

// const all=array.concat(array1);

// const all1=[...array,array1];
// console.log(all);

// const array=[1,2,3,4,5,[1,2,3,4,5],6,7];
// console.log(array.flat(Infinity));



//Array more Methods:-
//console.log(Array.isArray("Ram"));
//console.log(Array.isArray(Array.from("Ram")));
//console.log(Array.isArray(1,2,3,4,5));




// When we have to make single array from single variables
// let score1=20;
// let score2=40;

// let arr=Array.of(score1,score2);
// console.log(arr);



//Creating Objects {} are objects if some value put inside this then it will be object
//  const emp={
//     name:"Raghav",
//     age:25,
//     salary:50000,
//     "cityName":"Chennai",
//     "fullName":"Raghav Tripathi
//     

//  }




//  console.log(emp.name);

//  let emp1=new Object();
//  console.log(emp["cityName"]);


// Object methods:-

//This is object Literal:-

//  const emp={
//      name:"Raghav",
//      age:25,
//      salary:50000,
//      "cityName":"Chennai",
//      //[mySyn]:"Bhai",

//   }
//   const mySyn=Symbol();
//   console.log(emp[mySyn]);

// Object.freeze(emp);
// emp.name="Rahul";
//console.log(emp.name);

// emp.greet=function(){
//     console.log(`Hello use ${emp.name}`);
// }
// emp.greet();



// const user={
//     name:{
//         fullname:{
//         first:"Raghav",
//         last:"Tripathi",

//     }

//     }
    
// }

// console.log(user.name.fullname.first);

//Mergig twoobjects values
// const obj1={1:"1",2:"b"};
// const obj2={3:"c",4:"d"};

// let obj3= Object.assign({},obj1,obj2);

// console.log(obj3);


//Array of Object:-


// const user=[
//     {
//         id:1,
//         name:"Raghav",
//     },
//     {
//         id:2,
//         name:"Rahul",
//     }
// ]

// console.log(user[1].id);

//Accessing Object Elements Different Types
// const user={
//     userName:"Raghav",
//     userId:1
// }

//console.log(user.userName);
// const {userName: name}=user;
// console.log(user.userName);



//Scopes:-

// function addOne(num){
//     return num+1;
// }

// console.log(addOne(5));

// Use of This Keyword:-
// const College={
//     name:"IPS Academy",
//     studentCount:10000,

//      motto:function(){
//         console.log(`${this.name} Service our self`);
//         console.log(this);
//     },

    

// }

//  console.log(College.motto());
 

 //this function cannot used inside function;

//  function hello(){
//     console.log(this); 
//  }
//  hello()




//Arrow Function:-

//1.
// const add=(num1,num2)=>{
//     return num1+num2;
// }

//console.log(add(5,6));

//2.

// const add2=()=>{
//     console.log("Hello");
// }
// add2();


//3.  here this also not used

// const add3=()=>{     here output is undefined
//     let username="ram";
//     console.log(`${this.username}`);
// }
// add3();

//4. corected code
// const add3=()=>{  
//     let username="ram";
//     console.log(`${username}`);
// }
// add3();


//immediate calling function
// (()=>{
//     let username="ram";
//     console.log(`${username}`);
// })();

// (function() {
//     let username="ram";
//     console.log("Hello");
// })();

// ((name)=>{
//     console.log(`${name}`);
// })("Saramya");



//Loops:-

//1. while loop
// let i=0;

// while(i<10){
//     console.log(i);
//     i++;
// }


//2. for loop

// for(let i=0;i<10;i++){
//     console.log(i);
// }

//3. do while
// let i=0;
// do{
//     console.log("Hello");
//     i++;
// }while(i<10);


// FOR OF LOOP:-
//1.
// let arr=[1,2,3,4,5];
// for (let num of arr){
//     console.log(num);
// }

//2.

// let str="Hello Saramya";
// for(let s of str){
//     console.log(s);
// }


//Map in javascript it is the object which do not have duplicate keys and has Key-Value format:-
//for in loop isme use nahi hoti

// const map=new Map();
// map.set("name","Saramya");
// map.set("name2","Raghav");

// for(const [key,value] of map){
//     console.log(key,value);
// }



//Can we put for -in loop in array and objects


// const emp=[
//     {
//         id:1,
//      name:"Saramya",
//     } ,

//     {
//       id:2,
//      name2:"Raghav",
//     }
     
// ]
// for (const employee of emp) {
//     for (const key in employee) {
//         console.log(`Key is ${key} and value is ${employee[key]}`);
//     }
// }


//for-in and for-ofloop in array:-

//const heros=["papa","mummy","bhai","behen"];

// for(const h of heros){
//     console.log(h);
// }

// for(const h in heros){
//     console.log(heros[h]);
// }

// for Each loop in objects:-


// const emp=[
//     {
//         id:1,
//      name:"Saramya",
//     } ,

//     {
//       id:2,
//      name:"Raghav",
//     }
// ]

// emp.forEach((item) => {
//     console.log(`${item.id} and ${item.name}`);
    
// })



//fiter function in array where we want to do operation or return something


// const arr=[1,2,3,4,5,6,7,8,9,10];

// const arr1=arr.filter((nums)=>{
//     if(nums>5)
//         return nums;
    
// })

// console.log(arr1);


//Filter method in objcts


// const books=[
    
//     {
//    book:"Bookone",
//    price:800,
// },

//  {
//    book:"Booktwo",
//    price:120,
// },

//  {
//    book:"Bookthree",
//    price:50,
// },

//  {
//    book:"Bookfour",
//    price:500,
// }
// ];

// const array1=books.filter((bk)=>{

//     if(bk.price>120 && bk.price<1000){
//         return bk;
//     }

// });

// console.log(array1);


//reduce method of array:- this is used to add multiple things it has accumulator,initial value and current Value


// const arr=[2,4,6,8,9];

// const sum=arr.reduce((acc,cv)=>{
//     return acc+cv;
// },0)

// console.log(sum);


//Using reduce in objects:-

// const books=[
    
//     {
//    book:"Bookone",
//    price:800,
// },

//  {
//    book:"Booktwo",
//    price:120,
// },

//  {
//    book:"Bookthree",
//    price:50,
// },

//  {
//    book:"Bookfour",
//    price:500,
// }
// ];


// const totalPrice= books.reduce((acc,cv)=>{
//     if(cv.price>0){
//         return acc+cv.price;
//     }
// },0);

// console.log(totalPrice);




















