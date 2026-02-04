const sketchCooking = (p) => {
  let canvas;
  let steamParticles = [];
  
  p.setup = () => {
    canvas = p.createCanvas(800, 800);
  };

  p.draw = () => {
    p.background(220, 200, 180);
    
    let h = p.hour() % 12;
    let m = p.minute();
    let s = p.second();
    
    p.fill(60);
    p.rect(200, 650, 400, 20);
    
    p.fill(255, 150, 0);
    p.noStroke();
    for (let i = 0; i < 3; i++) {
      let x = 400 + p.random(-15, 15);
      let y = 650 - p.random(10, 30);
      p.ellipse(x, y, 30, 40);
    }
    
    p.fill(180);
    p.stroke(100);
    p.strokeWeight(3);
    p.rect(250, 400, 300, 250);
    p.rect(240, 390, 320, 20);
    
    let waterLevel = p.map(h, 0, 12, 640, 410);
    let waterHeight = 640 - waterLevel;
    
    p.noStroke();
    p.fill(100, 150, 200, 200);
    p.rect(260, waterLevel, 280, waterHeight);
    
    if (p.frameCount % 5 === 0 && s > 0) {
      steamParticles.push({
        x: p.random(280, 520),
        y: waterLevel,
        alpha: 255
      });
    }
    
    for (let i = steamParticles.length - 1; i >= 0; i--) {
      let steam = steamParticles[i];
      p.fill(255, 255, 255, steam.alpha);
      p.circle(steam.x, steam.y, 30);
      steam.y -= 2;
      steam.alpha -= 5;
      if (steam.alpha <= 0) {
        steamParticles.splice(i, 1);
      }
    }
    
    p.fill(0);
    p.textSize(24);
    p.textAlign(p.CENTER);
    p.text(p.nf(h, 2) + ':' + p.nf(m, 2) + ':' + p.nf(s, 2), 400, 100);
  };
};

new p5(sketchCooking);