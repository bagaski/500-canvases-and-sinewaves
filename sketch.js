const s = ( sketch ) => {

  let osc, freq, vol;

  sketch.setup = () => {
    sketch.createCanvas(sketch.windowWidth/3 - 50, sketch.windowHeight/2 - 70);
    sketch.background(sketch.random(255), sketch.random(255), sketch.random(255));
    sketch.textSize(120)
    osc = new p5.Oscillator('sine');
   
    osc.start();
  }

  sketch.draw = () => {
    
    sketch.fill(sketch.random(255), sketch.random(255), sketch.random(255));
    sketch.rect(sketch.mouseX, sketch.mouseY, sketch.mouseY, sketch.mouseX, 50);
    sketch.fill(255, 0, 0);
    sketch.text(sketch.mouseX,sketch.mouseX,sketch.mouseY);
    sketch.textSize(sketch.mouseY);

    vol = sketch.map(sketch.mouseX, 0, sketch.width, 0, 0.7)
    osc.amp(vol);
    freq = sketch.map(sketch.mouseY,0,sketch.height, 80,220)
    osc.freq(freq);

  }
}
//for (let i=0; i < sketch.height; i++) {}
/*
let p51 = new p5 (s, document.getElementById('sketch1'));
let p52 = new p5 (s, document.getElementById('sketch2'));
let p53 = new p5 (s, document.getElementById('sketch3'));
let p54 = new p5 (s, document.getElementById('sketch4'));
let p55 = new p5 (s, document.getElementById('sketch5'));
let p56 = new p5 (s, document.getElementById('sketch6'));

*/

for (let i = 1; i < 500; i++) { // from 1 to 10
  window["p5"+i] = new p5 (s, document.getElementById(`sketch${i}`));
}