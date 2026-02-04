const sketchGarden = (p) => {
  let canvas;
  
  p.setup = () => {
    canvas = p.createCanvas(800, 800);
  };

  p.draw = () => {
    p.background(135, 206, 235);
    
    let h = p.hour() % 12;
    let m = p.minute();
    let s = p.second();
    
    p.fill(34, 139, 34);
    p.noStroke();
    p.rect(0, 600, 800, 200);
    
    for (let i = 0; i < h; i++) {
      let x = 100 + i * 60;
      let stemHeight = p.map(i, 0, 11, 100, 200);
      
      p.stroke(0, 100, 0);
      p.strokeWeight(4);
      p.line(x, 600, x, 600 - stemHeight);
      
      p.noStroke();
      p.fill(255, 100, 150);
      for (let j = 0; j < 5; j++) {
        let angle = j * p.TWO_PI / 5;
        let px = x + p.cos(angle) * 20;
        let py = 600 - stemHeight + p.sin(angle) * 20;
        p.circle(px, py, 25);
      }
      
      p.fill(255, 200, 0);
      p.circle(x, 600 - stemHeight, 15);
    }
    
    for (let i = 0; i < m; i++) {
      let x = p.random(50, 750);
      let y = p.random(550, 590);
      p.fill(255, 255, 0);
      p.noStroke();
      p.circle(x, y, 8);
    }
    
    p.fill(255, 255, 255, 200);
    for (let i = 0; i < s; i++) {
      let x = p.random(0, 800);
      let y = p.random(0, 500);
      p.circle(x, y, 5);
    }
    
    p.fill(255, 200, 0);
    p.circle(700, 100, 80);
    
    p.fill(0);
    p.textSize(24);
    p.textAlign(p.CENTER);
    p.text(p.nf(h, 2) + ':' + p.nf(m, 2) + ':' + p.nf(s, 2), 400, 750);
  };
};

new p5(sketchGarden);