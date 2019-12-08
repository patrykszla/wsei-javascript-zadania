function callOtherFunction(nameOfFunction) {
    console.log("Cześć jestem funkcją o nazwie 'callOtherFunction' i wywołuję funkcję, którą ktoś mi wrzucił jako parametr");

    var randomNumber1 = Math.random() * 20;
    var randomNumber2 = Math.random() * 10;
    var randomNumber3 = Math.random() * 30;
    nameOfFunction(randomNumber1, randomNumber2, randomNumber3);
}

callOtherFunction(function (a, b, c) {
    console.log("Pierwsza liczba:", a);
    console.log("Druga liczba", b)
    console.log("Trzecia liczba", c)
    console.log("Wynik", a + b + c)
})

