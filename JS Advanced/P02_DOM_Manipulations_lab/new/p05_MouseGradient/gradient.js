function attachGradientEvents() {
    let gradient=document.getElementById('gradient');
    gradient.addEventListener('mousemove',moveOn);
    gradient.addEventListener('mouseout',moveOut);
    console.dir(gradient);
   function moveOn(event) {
       let distance=Math.floor( 100*event.offsetX /(event.target.clientWidth));
       document.getElementById('result').textContent=distance+"%";
   }
   
   function moveOut() {
       document.getElementById('result').textContent="";
   }
}