function Asteroid(pos, r){
	
	if(pos){
		this.pos = pos.copy();
	}else{
		this.pos = createVector(random(width), random(height));	
	}
	if(r){
		this.r = r * 0.5;
	}else{
		this.r = random(15,50);
	}
	this.vel = p5.Vector.random2D();
	this.numberOfPoints = random(5,10);
	this.offset = [];
	for(var i = 0; i < this.numberOfPoints; i++){
		this.offset[i] = random(-this.r * 0.5, this.r * 0.5);
	}

	this.render = function(){
		push();
		stroke(255);
		noFill();
		translate(this.pos.x, this.pos.y);
		beginShape();
		for(var i = 0; i < this.numberOfPoints; i++){
			var angle = map(i, 0, this.numberOfPoints, 0, TWO_PI);
			var r = this.r + this.offset[i];
			var x = r * cos(angle);
			var y = r * sin(angle);
			vertex(x, y);
		}
		endShape(CLOSE);
		pop();
	}

	this.update = function(){
		this.pos.add(this.vel)
	}

	this.edges = function(){
		if(this.pos.x > width + this.r){
			this.pos.x = -this.r;
		}else if(this.pos.x < 0 - this.r){
			this.pos.x = width + this.r;
		}else if(this.pos.y > height + this.r){
			this.pos.y = -this.r;
		}else if(this.pos.y < 0 - this.r){
			this.pos.y = height + this.r;
		}
	}
}