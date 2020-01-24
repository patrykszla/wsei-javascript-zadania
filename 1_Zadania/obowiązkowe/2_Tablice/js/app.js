// function distFromAvarage(values) {
//     let sum = values.reduce((previous, current) => current += previous);
//     let avg = sum / values.length;
//     const newArray = [];
//     for (let i = 0; i < values.length; i++) {
//         newArray.push(Math.abs(values[i] - avg));
//     }
//     console.log(newArray);
//     return newArray;
// }
// distFromAvarage([2,8,3,7]);

//    ZADANIE 1

// function fruits(){
//     var fruits = ["banan", "jablko", "gruszka", "truskawka"];
//     console.log(fruits[0]);
//     console.log(fruits.length);
//     console.log(fruits[3]);
//     for(i=0; i<fruits.length; i++){
//         console.log(fruits[i])
//     }
//     // fruits.forEach(element => {
//     //     console.log(element);
//     // });
// }
// fruits()



// // ZADANIE 2
// function createArray(number) {
//     let newArray = [];
//     // let elseArray = [ ];

   
//     for (var counter = 1; counter<=number; counter++) {
//         newArray.push(counter); 
//     }
//     return newArray;
    
// }

// console.log("tablica z liczbami do 6 = " + createArray(6));
// console.log("tablica z liczbami do 1 = " + createArray(1));
// console.log("Test dla liczby ujemnej (powinna być pusta tablica) " + createArray(-6));
// console.log("Test dla zera (powinna być pusta tablica) " + createArray(0));


// ZADANIE 3

// function printTable(array) {
//     for(let i=0; i<array.length; i++){
//         console.log(array[i]);
//     }
// }
// printTable([1,2,3]);


// zadanie 4



// function multiply(array) {
//     let sum = 1;
//     for(let i=0; i<array.length; i++) {
//         sum = sum*array[i]
//     }
//     return sum;
// }

// multiply([1,2,3,4,5,6,7]);
// multiply([2,8,3,7]);
// multiply([1,1,1,1])


// ZADANIE 5

// function getEvenAvarage(array) {
//     let sum = 0;
//     let counter = 0
//     for(let i=0; i<array.length; i++) {
//         if(array[i] % 2 == 0) {
//          sum = sum + array[i];
//          counter = counter + 1
//         }
//     }
//     if(sum!=0 && counter !=0 ) {
//         console.log(sum/counter);
//     } else {
//         console.log(null);
//     }
    
// }

// getEvenAvarage([1,2,3,4,5,6,7]);
// getEvenAvarage([1,1,1,1]);
// getEvenAvarage([2,8,3,7,4]);


// ZADANIE 6!!!

// function sortArray(array) {
//     let sorted = array.sort((a, b) => {
//         return a - b;
//     });
//     return sorted;
// }


 // zadanie 7
// function addArrays(arr1, arr2){
//     const array1 = arr1.length>arr2.length? arr1:arr2;
//     const array2 = arr1.length>arr2.length? arr2:arr1;
//     const new_arr = [];
//     array1.forEach(el, i) = () => {
//         if (array2.length<array1.length){
//             let sum = array1[i] + array2[i];
//             new_arr.push(sum)
//         }
//         else{
//             new_arr.push(el);
//         }
//     };
// }
// addArrays([4,0,1,3,4], [1,9,6,7,8,17]);
// addArrays([8,3,22], [1,3,2]);
// addArrays([2,3,1,5,3,5], [3,1,76,1]);

// function addArrays(arr1, arr2){
//     const array1 = arr1.length>arr2.length? arr1:arr2;
//     const array2 = arr1.length>arr2.length? arr2:arr1;
//     const new_arr = [];
//     array1.forEach(el, i) = () => {
//         if (array2.length<array1.length){
//             let sum = array1[i] + array2[i];
//             new_arr.push(sum)
//         }
//     };
// }
// addArrays([4,0,1,3,4], [1,9,6,7,8,17]);
// addArrays([8,3,22], [1,3,2]);
// addArrays([2,3,1,5,3,5], [3,1,76,1]);

 