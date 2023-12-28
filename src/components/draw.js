/*import React from "react";

let t = 0;
let canvas = document.getElementById('canvas');
//let canvas = canva.forEach(i=>i!=false)
let h1 = document.body.querySelector('canvas');
console.log(h1)
//let plano2d = canvas.getContext('2d');

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
*/
function draw(canvas){
    let t = 0;
    //canvas.height = window.innerHeight;
    //canvas.width = window.innerWidth;
    let plano2d = canvas.getContext('2d');
    plano2d.fillStyle = 'hsla(0,0%,0%,.1)';
    plano2d.fillRect(0,0,canvas.width,canvas.height);
    let f,r,i;

    f= Math.sin(t)*6;
    for(i=0; i<500 ;i++){
        r=400+Math.sin(i+f);

        plano2d.fillStyle = `hsla('${i+12}',100%,60%,1)`
        plano2d.beginPath();

        plano2d.arc(Math.sin(i)*r+ (canvas.width / 2), 
        Math.cos(i)*r+ (canvas.height / 2),
        1.5, 0 , Math.PI * 2
        );
        plano2d.fill();
    }
    t+=0.000005;
    console.log(plano2d)
    console.log(canvas)
}
export function run(canvass){
    window.requestAnimationFrame(run)
    let canvas = canvass;
    draw(canvas)
}
//run();