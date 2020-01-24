
/**
 * Zagniezdzanie funkcji.
 * Przesledz krok po kroku kazda linijke kodu. Kazda!
 * Napisz komentarze dla kazdej z linijek kodu
 */

//Twoj komentarz ...funkcja sortArray
function sortArray() {

    //Twoj komentarz ... stworzenie nowej tablicy
    var points = [41, 3, 6, 1, 114, 54, 64];

    //Twoj komentarz ...sortowanie tablicy 
    points.sort(function (a, b) {
        //Twoj komentarz ...porzadek sortowania 
        return a - b;
    });

    //Twoj komentarz ... powinno zwrocic stworzona nową tablice, nie posortowaną
    return points;
}

//Twoj komentarz ...
sortArray();
