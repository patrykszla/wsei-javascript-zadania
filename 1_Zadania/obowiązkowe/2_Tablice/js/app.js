// function distFromAvarage(array) {
// const sum = t.reduce (
//     (sum,el) => {
//         return sum += el;
//     })
// };

// const avg = sum {
//     const = t.map (el = el-avg)
// }
   
// function fruits(){
//     var fruits = ["banan", "jablko", "gruszka", "truskawka"];
//     console.log(fruits[0]);
//     console.log(fruits[fruits.length-1]);
//     for(var i=0; i<fruits.length; i++){
//         console.log(fruits[i]);
//     }
// }
// fruits()


// function createArray(number) {
//     var newArray = [10];

//     for (var counter = 1; ; counter <= number) {
//         newArray.push(counter);
//     }

//     return newArray[2];
// }

// console.log("tablica z liczbami do 6 = " + createArray(6));
// console.log("tablica z liczbami do 1 = " + createArray(1));
// console.log("Test dla liczby ujemnej (powinna być pusta tablica) " + createArray(-6));
// console.log("Test dla zera (powinna być pusta tablica) " + createArray(0));

// zadanie 4

// function multiply(array) {
//     var score = 1;
//     for(var i = 0; i<array.length; i++){
//         score = score*array[i];
//     }
//     console.log(score);
// }

// multiply([1,2,3,4,5,6,7]);
// multiply([1,1,1,1]);
// multiply([2,8,3,7]);

// zadanie 5

// function getEvenAvarage(array){
//     var score = 0;
//     var counter = 0;
//     for(var i=0; i<array.length; i++) {
//         if(array[i]%2==0){
//             score = score + array[i];
//             counter = counter+1;
//         }
//     }
//     if(score!=0 && counter!=0){
//         console.log(score/counter);
//     }
//     else{
//         console.log(null)
//     }

// }
// getEvenAvarage([1,2,3,4,5,6,7]); 
// getEvenAvarage([1,1,1,1]);
// getEvenAvarage([2,8,3,7,4]);

// function sortArray(array){
//     console.log(array.sort(function(a, b){return a - b}));
// }
// sortArray([145,11,3,64,4,6,10])


/* // zadanie 7
function addArrays(arr1, arr2){
    const array1 = arr1.length>arr2.length? arr1:arr2;
    const array2 = arr1.length>arr2.length? arr2:arr1;
    const new_arr = [];
    array1.forEach(el,i) => {
        if (array2.length<array1.length){
            let sum = array1[i] + array2[i];
            new_arr.push(sum)
        }
        else{
            new_arr.push(el);
        }
    };
}
addArrays([4,0,1,3,4], [1,9,6,7,8,17]);
addArrays([8,3,22], [1,3,2]);
addArrays([2,3,1,5,3,5], [3,1,76,1]);


 */