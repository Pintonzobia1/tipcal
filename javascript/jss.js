/* let weather = prompt("how is the weather")
if(weather=="rainy"){
    console.log("grab your umbrella")
}
else{
    console.log("Wear your sunglasses")
} */


/* // Function 
//this is a function called "greeting"
//with has  1 argument  called " Name"
//does:log ur name  with a greeting to the console 
function greeting(name){
    
    console.log(`Hi ${name},Nice  to meet you`)
}

greeting("Shola") */

/* food =Number(prompt("Who much was the food"))
tipPercentage = Number( prompt("tipPercentage"))/100
tipAmount = food * tipPercentage
total= food+tipAmount

alert(`Your tip amounts is $ ${tipAmount}`)

console.log("food Amount",food)
console.log("tip Amount",tipAmount)
console.log("total Amount",total) */

//Addtion function
//this is a function called "sum"
//with has  2 argument  called "a ,b"
//does:input ur two number .And the console gives the total.
/*  function sum(a,b){
    return a+b
 }
 nu1 = sum(1,4)
 console.log(nu1) */



//  *** TIP CALCULATOR ****
//* /this is a function called "tipclculator"
//with has  2 argument  called " foodAmount & tip%"
//does:log ur food Amount and tip% it alert you ur tip amount.Also console log ur food ,tip, and total amount. 
/* function tipCalculator(foodAmount, tip){

    let tipPercentage = tip/100
    let tipAmount = foodAmount * tipPercentage
    let total= sum(foodAmount,tipAmount)

     return total
    }
 */
// BABY WEATHER APP 

// the user import if rainy and consloe log Grab ur jecket 
// esle use ur soon shade 

/* let weathers = "rainy"
let userWeather = prompt("What the weather like over there")
if(weathers == weathers){
   alert("Grab your Umbrella")
}
else{
   alert("Use Sunglasses")
}  */

 // BABY Weather APP

//this is a function called "weatherapp"
//with has  1 argument  called "userwaeather"
//does:log ur weather and onsole tell you pick urmbrella or use sunglasses


/* function weatherApp(){
    let weathers = "rainy"
let userWeather = prompt("What the weather like over there")
if(weathers == weathers){
   alert("Grab your Umbrella")
}
else{
   alert("Use Sunglasses")
}

}

weatherApp() */


/* console.log(tipCalculator(1000,20)) */

//Arrow functions with implicit return
let Subtract = (a,b) => a - b
/* console.log(Subtract(3,9)) */

// Arrow functions with explict return
let divide = (a,b) => {
    return(a/b)
}
/* console.log(divide(6,902)) */

let multiplies = (a,b) => a*b
/* console.log(multiplies(5,78)) */
 

// Array method 

const groceries = ["rice", "beans" , "bread" , "apple"]
/* Array indexing
console.log(groceries[3]) */

// Push is use to add to the array
groceries.push("mango")

/* console.log(groceries) */

/* console.log(groceries.slice(2,))
console.log(groceries.slice(1,4)) */

//OBJECT is represented by {}
//they are made of key : value 
let person = {
    name: "Odebode",
    shirt: "Green"
}

//Dot Notation ..
/* console.log(person.name)
console.log(person.shirt) */

// bracket notation[]
/* console.log(person["name"])
console.log(person["shirt"]) */

//asign object 
person.phone ="090-200-345-6750"
/* console.log(person.phone)

console.log(person) */

 let person1= {
    name: "Qazi",
    shirt: "black"
 }
/*  console.log(person1)
 console.log(person1.name)
 console.log(person1["shirt"]) */

// es6 arrow function(2arguments)
// object
// template literals
const inttoducer = (name , shirt,asset,liabilities) =>{
    const personObj = {
        name: name ,
        shirt: shirt ,
        asset:asset,
        liabilities:liabilities,
        netWorth: function(asset,liabilities) {
            //**this ** return the asset and lability 
            return this.asset - this.liabilities
        }
    }

    const intro = ` Hi am ${personObj.name}  and the color of my shirt is ${personObj.shirt} and my ${personObj.netWorth()} Naira`

    return intro
}
/* console.log(inttoducer("odebode","red",60000,30000))

console.log(inttoducer("Seun","white",5000000,700000000)) */


//FOR LOOP 

const food = ["rice", "beans" ,"rice", "beans" , "bread" , "apple", "bread" , "apple","rice", "beans" , "bread" , "apple"]

//old way of writng a for loop
/* for(let i=0; i < food.length; i++){
    console.log(i,food[i])
} */


// new way of for loop

/*  for (const foods of food){
     console.log(foods) 
}

let result = []
 const numbers =  [1,2,3,4,5,6,7,8,9,0] */
/* 
for(let i=0; i < numbers.length; i++){
     console.log(numbers[i]) 
}

for( const num of numbers){
    result.push(num*2 )
 
}
console.log(result) */  

// function for double
/* const double = (digits) => {
    let results = []
    for(let digit of digits ){
        results.push(digit**2)
    }
    return results
}
/* console.log(double([1,2,3,4,5,6,7,8,8])) */


const root = function(roots){
    let outcome= []
    for(let Root of roots ){
        outcome.push(Root**2)
    }
    return outcome
}

/* console.log(root([2,3,4,5,6,7,7,8,0])) */

//  for loop 
// for of  it gives the value 
// for in gives index 

/* const conter = (phrase) =>{

     let output = 0;
     for(const indexs in phrase){
        console.log(Number(indexs)+1)
       output = Number(indexs)+1
     }

     return {output}
}
 */
//let phrase = prompt("Write your phrse")
 //console.log(conter(phrase)) 

/*  const lettercont = (phrase) =>{
    //return{results: phrase.length}
 } */
 //console.log(lettercont(phrase))


 // sum funtion that requre loop 

/*  const  sumfun = (numberss) =>{
    let result= 0;
    for (let sums of numberss){ 
    console.log(sums)
    result = result + sums
    }
    return {result}
 } */

/*  let numberss=[1,2,3,4,5,6,7,8]
 console.log(sumfun(numberss))

 const minsArry = (nums) => {
    let finalOucome = 0;
    for (const suntr of nums){
        console.log(suntr)
        finalOucome =finalOucome-suntr
    }
    return {finalOucome}
 }

 let nums = [1345,1,2,3,4,5,6,6,6,7,90]

 console.log(minsArry(nums))  */

 //LOOP for MAX
 const max = (numbers) => {
    let result = numbers[0]
    for ( let number of numbers){
        if (number > result){
           result =  number
        }
        
 } 
 return{result}
}

 let numbers = [7,9,9,8,10,7,8,3,8,88,97,0]
//console.log(max(numbers))


const min = (numbers) => {
    let result = numbers[0]
        for (let number of numbers){
            if( number < result){
                result = number
            }
        }
        return{ result}
    }
    console.log(min(numbers))