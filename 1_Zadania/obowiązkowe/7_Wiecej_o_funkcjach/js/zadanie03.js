//Funkcja wypisuje "czesc":
hello = () => {
    console.log('czesc')
}

//Funkcja wypisuje "czesc":
hello();



hello2 = () => {
    console.log('witaj11')
}
hello2();


hoisted();
function hoisted() {
    console.log('witaj ostatnie')
}
//Funkcja wypisuje "Witaj":

//miejsce wywołania wyrażenia ma znaczenie,
// gdy wywołanie wystapi przed definicją wyrażenia
//to wtedy dostaniemy błąd