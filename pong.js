function onload() {
    let canvas = document.querySelector("canvas");
    console.log(canvas);  
    let contex = canvas.getContext("2d");
    contex.beginPath();
    contex.arc(95, 50, 40, 0, 2 * Math.PI);
    contex.stroke();
    
}