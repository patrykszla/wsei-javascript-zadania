// //Zadanie 1
// var task1Array = [
//     [2, 3],
//     ["Ala", "Ola"],
//     [true, false],
//     [5, 6, 7, 8],
//     [12, 15, 67]
// ];

// Zadanie 1.1
console.log(task1Array[2][1]);
// Zadanie 1.2
console.log(task1Array[1].length);
// Zadanie 1.3
console.log(task1Array[3][1]);


// Zadanie 2
var task2Array = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
];

//Zadanie 2.1
for (let i = 0; i < task2Array[0].length; i++) {
    console.log(task2Array[0][i]);
}
//Zadanie 2.2
for (let i = 0; i < task2Array.length; i++) {
    console.log(task2Array[i].length);
}
//Zadanie 2.3
for (let i = 0; i < task2Array.length; i++) {
    for (let j = 0; j < task2Array[i].length; j++) {
        console.log(task2Array[i][j]);
    }
}

//Zadanie 3
function print2DArray(array2d) {
    array2d.map(el => {
        console.log(el);
    });
}

//Zadanie 4
const task4Array = [["Krzys", 2,1], ["Agatka", 7,8]];
print2DArray(task4Array);

//Zadanie 5
function create2DArray(rows, columns) {
    const array2d = [];
    //zaczyna od 1 nie 0
    let count = 1;
    for (let i = 0; i < rows; i++) {
        array2d.push([]);
        for (let j = 0; j < columns; j++) {
            array2d[i].push(count);
            count++;
        }
    }
    return array2d;
}
console.log(create2DArray(10, 2));