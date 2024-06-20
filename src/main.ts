import p5 from "p5";

const sketch = (p: p5) => {
  p.setup = () => {
    p.createCanvas(400, 400);
    p.angleMode(p.DEGREES);
  };

  p.draw = () => {
    p.background(255);
    p.translate(p.width/2,p.height/2);

    const numPetals = 10;
    const angle = 360/numPetals;
    const petalLength = 100;
    const petalWidth = 20;

    for(let i = 0; i < numPetals; i++){
      p.fill(255,100,100);
      p.noStroke();
      p.rotate(angle);
      p.ellipse(0,petalLength/2,petalWidth,petalLength);
    }
    p.fill(255,204,0);
    p.ellipse(0,0,40,40);
  };
};

new p5(sketch);