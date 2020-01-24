/**
 * Zagniezdzanie funkcji.
 * Przesledz krok po kroku kazda linijke kodu. Kazda!
 * Napisz komentarze dla kazdej z linijek kodu
 */


//Twoj komentarz ...funkcja jeden
function jeden() {

    //Twoj komentarz ...zmienna o zasiegu blokowym
    var zmienna1 = 1;

    //Twoj komentarz ... funkcja dwa
    function dwa() {

        //Twoj komentarz konsola wypisze zmienna1
        console.log(zmienna1);

        //Twoj komentarz ...zmienna2 nie ma  wywolania
        var zmienna2 = 3;
    }

    //Twoj komentarz zmienna ma zasieg od klamry do klamry
    dwa();

    //Twoj komentarz ...konsola nie wypisze nam zmiennej2
    console.log(zmienna2)
}

//Twoj komentarz ...
jeden()