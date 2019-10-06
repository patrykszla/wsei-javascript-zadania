/*
function distFromAverage(array){
    let sum = 0;

    array.forEach(element => {
        sum += element;
    })

    let average = sum / array.length;

    return array.map(element => {
        return Math.abs(element - average);
    })
}
*/


function fruits(){
const fruit=['truskawka', 'jablko', 'gruszka', 'malina'];
console.log(fruit)
}
fruits()

function multiply(array){
    var multiply = 1;
    for(var i=0; array.length; i++){
        multiply =multiply*array[i];
    }
}