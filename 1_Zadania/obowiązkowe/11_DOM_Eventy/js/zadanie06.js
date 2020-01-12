window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM loaded');


    document.addEventListener('mousemove', onMouseMoveGlobal)
    let box = document.getElementById("box");
   
    let getGlobalX = document.getElementById("globalX");
    let getGlobalY = document.getElementById("globalY");
    let getlocalX = document.getElementById("localX");
    let getlocalY = document.getElementById("localY");

    function onMouseMoveGlobal(e){
        getGlobalX.textContent = e.pageX;
        getGlobalY.textContent = e.pageY;
    }


    document.addEventListener("mousemove", function(e) {
        let rect = getBox.getBoundingClientRect();
        getlocalX.textContent = e.pageX - rect.left;
        getlocalY.textContent = e.pageY - rect.top;
    })
  
 
    
    
});