document.addEventListener("DOMContentLoaded", function () {
    /*
    Poniżej napisz kod rozwiązujący zadania. Odpowiedzi oddzielaj komentarzami.
     */

// ZADANIE 0
     let byTitle = document.getElementsByClassName('title');
     console.log(byTitle);

     function getDataAnimation(element) {
      element = byTitle;
      console.log(element);
     }

     getDataAnimation();
    //  ZADANIE 1

    console.log('zadanie1');

    let byId = document.getElementById('home');
    console.log(byId);


    var home = document.getElementsByTagName("HEADER")[0];
    console.log(home);


    //  li


    let dataDirection = document.querySelector('[data-direction]');
    console.log(dataDirection);

    // console.log('zadanie1 LI')
    // let byFirstChild = document.getElementsByTagName("UL");
    
    // let logFirstLi = byFirstChild.FirstChild;
    // console.log(logFirstLi);

     let firstBlock = document.getElementsByClassName('block')[0];

     console.log(firstBlock);
    
    //  ZADANIE 2

    console.log('zadanie2');

    let allNav = document.getElementsByTagName('nav');

    // let liNav = allNav.getElementsByTagName('li');

    allNav.getElementsByTagName('li');
    console.log(liNav);

    
});
