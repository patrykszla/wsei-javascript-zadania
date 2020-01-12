window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM loaded');

    
    const boxes = Array.from(document.querySelectorAll(".box"));
    boxes.forEach(box=>{
        box.addEventListener("click", function(){
            var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
            this.style = `background: ${randomColor}`;
        })
    })
});