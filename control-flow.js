//Write a function that accepts an array of strings and console.logs each 
//element using a for loop.
let food = ["pizza","suchi","meat","rice"]
function manyFood(food){
for(let i=0;i<food.length;i++){
    console.log(food[i])
}
}
manyFood(food)

//Write a function that accepts an array of numbers and uses the forEach()
// method to console.log each number multiplied by 2.
function multiplyArray(num){
    num.forEach(num =>{
        num = num *2;
        console.log(num)
     });
   }
  
   let num = [3,8,10,30,6,8];
   multiplyArray(num);



//Write a function that takes in an array of numbers and consoles the first four items
// multiplied by 8 and the last two added by 5. Console the array with the new values
function ArrayNumbers(array){
    for(let i =0 ; i<array.length;i++){
     if(i<4){
        array [i]*=8
    }else if(i>=array.length-2){
      array[i]+=5
    }
    }
  console.log(array)
    }
    let array=[1,5,6,8,4,9,10,13]
    ArrayNumbers(array)

//Write a function that takes in the following array and use a while loop to iterate
// and break when the item is equal to the fourth index
//let arrNum = [1,2,3,4,5,6,7,8,9];
let arrNum = [1,2,3,4,5,6,7,8,9];
function numbers(arrNum){
let i = 0;
while(i<arrNum.length){
    console.log(arrNum[i]);
    if(i===4){
    break;
    
    }
    i++;
}
}
numbers(arrNum)




//Write a function that takes in a an array of strings and use a continue statement
// when the item is at the second index
//let fruits= ['apple','plum','banana','strawberries','kiwi']
let fruits= ['apple','plum','banana','strawberries','kiwi']

function arrFruits(fruits){
for(let i =0; i<fruits.length;i++){
    if( i=== 2){
        continue;
        
    }
    console.log("continue",fruits[i]);
    
}
}
arrFruits(fruits)