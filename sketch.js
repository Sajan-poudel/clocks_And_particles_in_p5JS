var x_pos;
var y_pos;
const particles = [];

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    angleMode(DEGREES);
    x_pos = width/2;
    y_pos = height/2;
    let particlelen = Math.floor(width/11);
    for(let i = 0 ; i< particlelen; i++){
        particles.push(new Particle)
    }
}

function draw() {
    background(0);
    particles.forEach((particle, ind)=>{
        particle.draw();
        particle.move();
        particle.checkDistance(particles.slice(ind));
    });
    push();
    translate(x_pos, y_pos);
    rotate(-90);
    let hr = hour();
    let min = minute();
    let sec = second();
    stroke(180,103,150)
    ellipse(0, 0, 10, 10)
    strokeWeight(8);
    noFill();
    stroke(255, 140, 60)
    let value_sec = map(sec, 0, 60, 0, 360);
    arc(0, 0,300,300,0,value_sec);

    stroke(102, 51, 153)
    let value_min = map(min, 0 ,60,0, 360);
    arc(0, 0,280,280,0,value_min);

    stroke(15, 105, 40);
    let value_hr = map(hr%12, 0, 12, 0, 360);
    arc(0, 0,260,260,0,value_hr);

    push();
    rotate(value_sec);
    stroke(255, 140, 60);
    line(0,0,100,0);
    pop();

    push();
    rotate(value_min);
    stroke(102, 51, 153);
    line(0,0,80,0);
    pop();

    push();
    rotate(value_hr);
    stroke(15, 105, 40);
    line(0,0,60,0);
    pop();
    pop();
}

class Particle{
    constructor(){
        // this.position = createVector(random(-x_pos, x_pos), random(-y_pos, y_pos));
        this.position = createVector(random(width), random(height));
        console.log(this.position);
        this.vel = createVector(random(-5,5), random(-5,5));
        this.size = 10;
    }

    draw(){
        noStroke();
        fill('rgba(255,255,255,0.5)');
        ellipse(this.position.x, this.position.y, this.size, this.size);
    }

    move(){
        this.position.add(this.vel);
        if(this.position.x<0 || this.position.x>width){
            this.vel.x *= -1;
        }
        if(this.position.y<0 || this.position.y>height){
            this.vel.y *= -1;
        }
    }

    checkDistance(particles){
        particles.forEach(particle => {
            let d = dist(this.position.x, this.position.y, particle.position.x, particle.position.y);

            if(d<150){
                stroke('rgba(255,255,255,0.3)');
                line(this.position.x, this.position.y, particle.position.x, particle.position.y);
            }
        });
    }
}