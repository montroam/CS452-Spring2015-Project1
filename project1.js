
/**
		 Allison Montroy
		 CS 452 || Lab 2
			02/17/15
**/
	
var cx = 0;
var cy = 2;
var y =  -90;
var positions;
numenemies = 15;
var lives = 3;
var gl,canvas,elevation, life, cBuffer;
fillVector();
window.onload = function init() { 

 canvas = document.getElementById( "gl-canvas" ); 
 elevation = document.getElementById( "chng" ); 
 life = document.getElementById( "life" ); 
 gl = WebGLUtils.setupWebGL(canvas); 
 if (!gl) { console.log('Failed to get the rendering context for WebGL'); return;} 
 gl.viewport( 0, 0, canvas.width, canvas.height ); 
 gl.clearColor( 0.0, 0.0, 0.0, 1.0 ); 

// Create shading program 
 var program = initShaders( gl, "vertex-shader", "fragment-shader" ); 
 gl.useProgram( program ); 
 gl.program = program; 
 
 cBuffer = gl.createBuffer(); 
 // Bind the buffer object to target 
 gl.bindBuffer(gl.ARRAY_BUFFER, cBuffer); 
 gl.bufferData(gl.ARRAY_BUFFER, vColors, gl.STATIC_DRAW); 

 var FSIZE = vColors.BYTES_PER_ELEMENT; 
 var vPosition = gl.getAttribLocation(gl.program, 'vPosition'); 
 
 gl.vertexAttribPointer(vPosition, 2, gl.FLOAT, false, FSIZE * 5, 0); 
 gl.enableVertexAttribArray(vPosition); 
 
 // Get the storage location of fColor, assign buffer and enable 
 var fColor = gl.getAttribLocation(gl.program, 'fColor'); 
 gl.vertexAttribPointer(fColor, 3, gl.FLOAT, false, FSIZE * 5, FSIZE * 2); 
 gl.enableVertexAttribArray(fColor); 
 gl.bindBuffer(gl.ARRAY_BUFFER, null); 
window.onkeypress = function(event) {
	var char = String.fromCharCode(event.keyCode);
	
	switch(char){
		case 's':
		if(cy>-4)cy--;
		break;
		case 'a':
		if(cx>-6)cx--;
		break;
		case 'w':
		if(cy<2)cy++;
		break;
		case 'd':
		if(cx<6)cx++;
		break;
		case '1':
		cx = 0;cy = 0;
		break;	
	}
	};
render();
}
function update(cBuffer) { 
 death();
 fillVector();
if(parseInt(((y+90)*10)) >= 1000) {
		window.alert("You win! Score: "+ parseInt(((y+90)*10) + lives*300));
		window.location = "project1.html";	
		}
 // Bind the buffer object to target 
 gl.bindBuffer(gl.ARRAY_BUFFER, cBuffer); 
 gl.bufferData(gl.ARRAY_BUFFER, vColors, gl.STATIC_DRAW); 
 var FSIZE = vColors.BYTES_PER_ELEMENT; 
 var vPosition = gl.getAttribLocation(gl.program, 'vPosition');  
  // Bind the buffer object to target 
 gl.bindBuffer(gl.ARRAY_BUFFER, cBuffer); 
 gl.bufferData(gl.ARRAY_BUFFER, vColors, gl.STATIC_DRAW); 
 
 var FSIZE = vColors.BYTES_PER_ELEMENT; 
 var vPosition = gl.getAttribLocation(gl.program, 'vPosition'); 
 
 gl.vertexAttribPointer(vPosition, 2, gl.FLOAT, false, FSIZE * 5, 0); 
 gl.enableVertexAttribArray(vPosition); 
 
 // Get the storage location of fColor, assign buffer and enable 
 var fColor = gl.getAttribLocation(gl.program, 'fColor'); 
 gl.vertexAttribPointer(fColor, 3, gl.FLOAT, false, FSIZE * 5, FSIZE * 2); 
 gl.enableVertexAttribArray(fColor); 
 gl.bindBuffer(gl.ARRAY_BUFFER, null); 


}
 
 function checkCollision(x1,y1,x2,y2){
 if( ((x1 >= (cx*.1)-.2 && x1 <= (cx*.1)+.2)&& (y1 >= (cy*.1)-.2 && y1 <= (cy*.1)+.2))  ) return true; 
 else if(((x2 >= (cx*.1)-.2 && x2 <= (cx*.1)+.2) && (y2 >= (cy*.1)-.2 && y2 <= (cy*.1)+.2))) return true; 
 else return false;
 }
 
 function death(){
	 
		enemy1();
		enemy2();
		enemy3();
		enemy4();
		enemy5();
		enemy6();
		enemy7();
		enemy8();
		enemy9();
		enemy10();
		enemy11();
		enemy12();
	
} 
 
 //enemy3: DONE
var e3y1 = -.45;
var e3y2 = -.55;
function enemy3(){
	if(checkCollision((((y+75)*-.3)-.5), e3y1,(((y+75)*-.3)-.5), e3y2)) {
				e3y1 = e3y1-10;
				e3y2 = e3y2-10;
		if(lives > 0) {
				lives--;
				console.log("hit enemy 3 // lives: " + lives);
			if(lives == 2){
				life.innerHTML = "Lives: x x";
			}
			else if(lives ==1){
				life.innerHTML = "Lives: x";
			}
		 
	else	{
		window.alert("You lose! Your final score is " + parseInt(((y+90)*10)));
		window.location = "project1.html";
	}
	}

		}	
}
//enemy 1 : DONE
var e1y1 = -.1;
var e1y2 = 0;
function enemy1(){
		if(checkCollision((((y+85)*.3)-.7), e1y1,(((y+85)*.3)-.7), e1y2)) {
				e1y1 = e1y1-10;
				e1y2 = e1y2-10;
		if(lives > 0) {
				lives--;
			console.log("hit enemy 1 // lives: " + lives);
			if(lives == 2){
				life.innerHTML = "Lives: x x";
			}
			else if(lives == 1){
				life.innerHTML = "Lives: x";
			}
		 
	else 	{
		window.alert("You lose! Your final score is " + parseInt(((y+90)*10)));
		window.location = "project1.html";
	}
}
		}

}
//enemy2: DONE
var e2y1=-.4;
var e2y2=-.2;
function enemy2(){
		if(checkCollision((((y+65)*-.3)+.7), e2y1,(((y+65)*-.3)+.7), e2y2)) {
				e2y1 = e2y1-10;
				e2y2 = e2y2-10;
		if(lives > 0) {
				lives--;
				console.log("hit enemy 2 // lives: " + lives);
		if(lives == 2){
				life.innerHTML = "Lives: x x";
			}
			else if(lives == 1){
				life.innerHTML = "Lives: x";
			}
		 
	else 	{
		window.alert("You lose! Your final score is " + parseInt(((y+90)*10)));
		window.location = "project1.html";
	}
}
		}
}
//enemy4
var e4y1=.35;
var e4y2=.25;
function enemy4(){
	if(checkCollision((((y+60)*.1)-.7), e4y1,(((y+60)*.1)-.7), e4y2)) {
				e4y1 = e4y1-10;
				e4y2 = e4y2-10;
		if(lives > 0) {
				lives--;
				console.log("hit enemy 4 // lives: " + lives);
		if(lives == 2){
				life.innerHTML = "Lives: x x";
			}
			else if(lives == 1){
				life.innerHTML = "Lives: x";
			}
	
	else	{
		window.alert("You lose! Your final score is " + parseInt(((y+90)*10)));
		window.location = "project1.html";
	}
		}
	}
}
//enemy 5
var e5y1=0;
var e5y2=.2;
function enemy5(){
	if(checkCollision((((y+50)*.3)-.7), e5y1,(((y+50)*.3)-.7), e5y2)) {
				e5y1 = e5y1-10;
				e5y2 = e5y2-10;
		if(lives > 0) {
				lives--;
				console.log("hit enemy 5 // lives: " + lives);
		if(lives == 2){
				life.innerHTML = "Lives: x x";
			}
			else if(lives == 1){
				life.innerHTML = "Lives: x";
			}
		
	else	{
		window.alert("You lose! Your final score is " + parseInt(((y+90)*10)));
		window.location = "project1.html";
	}
	}
	}
	
}
//enemy 6:
var e6y1=0;
var e6y2=.1;
function enemy6(){
		if(checkCollision((((y+20)*-.1)-.5), e6y1,(((y+20)*-.1)-.5),  e6y2)) {
				e6y1 = e6y1-10;
				e6y2 = e6y2-10;
		if(lives > 0) {
				lives--;
				console.log("hit enemy 6 // lives: " + lives);
		if(lives == 2){
				life.innerHTML = "Lives: x x";
			}
			else if(lives == 1){
				life.innerHTML = "Lives: x";
			}
		
	else 	{
		window.alert("You lose! Your final score is " + parseInt(((y+90)*10)));
		window.location = "project1.html";
	}
}
	}

	
}
//enemy 7: 
var e7y1=-.35;
var e7y2=-.25;
function enemy7(){
if(checkCollision((((y+60)*.2)-.7), e7y1,(((y+60)*.2)-.7),  e7y2)) {
				e7y1 = e7y1-10;
				e7y2 = e7y2-10;
		if(lives > 0) {
				lives--;
				console.log("hit enemy 7 // lives: " + lives);
		if(lives == 2){
				life.innerHTML = "Lives: x x";
			}
			else if(lives == 1){
				life.innerHTML = "Lives: x";
			}
		 
	else {
		window.alert("You lose! Your final score is " + parseInt(((y+90)*10)));
		window.location = "project1.html";
	}
}
	}

}
//enemy 8: 
var e8y1=-.35;
var e8y2=-.25;
function enemy8(){
if(checkCollision((((y+30)*-.2)-.5), e8y1,(((y+30)*-.2)-.5),  e8y2)) {
				e8y1 = e8y1-10;
				e8y2 = e8y2-10;
		if(lives > 0) {
				lives--;
				console.log("hit enemy 8 // lives: " + lives);
		if(lives == 2){
				life.innerHTML = "Lives: x x";
			}
			else if(lives == 1){
				life.innerHTML = "Lives: x";
			}
		 
	else {
		window.alert("You lose! Your final score is " + parseInt(((y+90)*10)));
		window.location = "project1.html";
	}
}
	}

}

//enemy 9: 
var e9y1=-.35;
var e9y2=-.25;
function enemy9(){
if(checkCollision((((y+10)*.2)-.7), e9y1,(((y+10)*.2)-.7),  e9y2)) {
				e9y1 = e9y1-10;
				e9y2 = e9y2-10;
		if(lives > 0) {
				lives--;
				console.log("hit enemy 9 // lives: " + lives);
		if(lives == 2){
				life.innerHTML = "Lives: x x";
			}
			else if(lives == 1){
				life.innerHTML = "Lives: x";
			}
		 
	else {
		window.alert("You lose! Your final score is " + parseInt(((y+90)*10)));
		window.location = "project1.html";
	}
}
	}

}


//enemy 10: 
var e10y1=-.15;
var e10y2=0;
function enemy10(){
if(checkCollision((((y+15)*.3)-.7), e10y1,(((y+15)*.3)-.7),  e10y2)) {
				e10y1 = e10y1-10;
				e10y2 = e10y2-10;
		if(lives > 0) {
				lives--;
				console.log("hit enemy 10 // lives: " + lives);
		if(lives == 2){
				life.innerHTML = "Lives: x x";
			}
			else if(lives == 1){
				life.innerHTML = "Lives: x";
			}
		 
	else {
		window.alert("You lose! Your final score is " + parseInt(((y+90)*10)));
		window.location = "project1.html";
	}
}
	}

}
//enemy 11
var e11y1=0;
var e11y2=.1;
function enemy11(){
		if(checkCollision((((y+5)*-.3)+.7), e11y1,(((y+5)*-.3)+.7), e11y2)) {
				e11y1 = e11y1-10;
				e11y2 = e11y2-10;
		if(lives > 0) {
				lives--;
				console.log("hit enemy 11 // lives: " + lives);
		if(lives == 2){
				life.innerHTML = "Lives: x x";
			}
			else if(lives == 1){
				life.innerHTML = "Lives: x";
			}
		 
	else 	{
		window.alert("You lose! Your final score is " + parseInt(((y+90)*10)));
		window.location = "project1.html";
	}
}
		}
}

//enemy 12
var e12y1=-.4;
var e12y2=-.7;
function enemy12(){
		if(checkCollision((((y+2)*-.3)+.7), e12y1,(((y+2)*-.3)+.7), e12y2)) {
				e12y1 = e12y1-10;
				e12y2 = e12y2-10;
		if(lives > 0) {
				lives--;
				console.log("hit enemy 12 // lives: " + lives);
		if(lives == 2){
				life.innerHTML = "Lives: x x";
			}
			else if(lives == 1){
				life.innerHTML = "Lives: x";
			}
		 
	else 	{
		window.alert("You lose! Your final score is " + parseInt(((y+90)*10)));
		window.location = "project1.html";
	}
}
		}
}

function fillVector(){
	
 vColors = new Float32Array([ 
 //background gradient
-.8, ((y*.1)-30), 0.0, 0.0, 1.0, 
.8, ((y*.1)-30),0.0, 0.0, 1.0, 
.8, ((y*.1)+10), 0.0, 1.0, 1.0, 
-.8, ((y*.1)+10), 0.0, 1.0, 1.0,
// enemy 1 - blue
(((y+85)*.3)-.7), e1y1, 0.0, 0.0, 1.0, 
(((y+85)*.3)-.5), e1y1, 0.0, 0.0, 1.0, 
(((y+85)*.3)-.7),   e1y2, 0.0, 0.0, 1.0, 
(((y+85)*.3)-.5),   e1y2, 0.0, 0.0, 1.0,
//bottom
(+.8), ((y*.1)-29.5), .5, .5, .5, 
(-.8), ((y*.1)-29.5), .5, .5, .5,
(+.8), ((y*.1)-30), 0.0, 0.0, 0.0, 
(-.8), ((y*.1)-30), 0.0, 0.0, 0.0,
//character
((cx*.1)-.2), ((cy*.1)+.2),1.0,0.0,0.0,
((cx*.1)+.2), ((cy*.1)+.2),1.0,0.0,1.0,
((cx*.1)   ), ((cy*.1)-.2),1.0,0.0,1.0,
//enemy 3 -- red
(((y+75)*-.3)-.7), e3y1, 1.0, 0.0, 0.0, 
(((y+75)*-.3)-.5), e3y1, 1.0, 0.0, 0.0, 
(((y+75)*-.3)-.7), e3y2, 0.5, 0.2, 0.0, 
(((y+75)*-.3)-.5), e3y2, 0.5, 0.2, 0.0,
// enemy 2 -- pink
(((y+65)*-.3)+.7), e2y1, 1.0, 0.0, 1.0, 
(((y+65)*-.3)+.5), e2y1, 1.0, 0.0, 1.0, 
(((y+65)*-.3)+.7), e2y2, 0.0, 0.3, 0.0, 
(((y+65)*-.3)+.5), e2y2, 0.0, 0.3, 0.0,
//enemy 4 -- green
(((y+60)*.1)-.7), e4y1, 1.0, 0.0, 0.6, 
(((y+60)*.1)-.5), e4y1, 1.0, 0.0, 0.6, 
(((y+60)*.1)-.7), e4y2, 1.0, 1.0, 0.0, 
(((y+60)*.1)-.5), e4y2, 1.0, 1.0, 0.0,
//enemy 5
(((y+50)*.3)-.7), e5y1, 0.0, 1.0, 0.0, 
(((y+50)*.3)-.5), e5y1, 0.0, 1.0, 0.0, 
(((y+50)*.3)-.7), e5y2, 0.4, 1.0, 0.0, 
(((y+50)*.3)-.5), e5y2, 0.4, 1.0, 0.0,
//enemy 6
(((y+20)*-.1)-.7), e6y1, 0.0, 1.0, 1.0, 
(((y+20)*-.1)-.5), e6y1, 0.0, 1.0, 1.0, 
(((y+20)*-.1)-.7), e6y2, 0.8, 1.0, 1.0, 
(((y+20)*-.1)-.5), e6y2, 0.8, 1.0, 1.0,
//enemy 7
(((y+60)*.2)-.7), e7y1, 0.0, 1.0, 0.0, 
(((y+60)*.2)-.5), e7y1, 0.0, 1.0, 0.0, 
(((y+60)*.2)-.7), e7y2, 0.2, 0.0, 0.2, 
(((y+60)*.2)-.5), e7y2, 0.2, 0.0, 0.2,
//enemy 8
(((y+30)*-.2)-.7), e8y1, 1.0, 1.0, 0.0, 
(((y+30)*-.2)-.5), e8y1, 0.0, 1.0, 0.0, 
(((y+30)*-.2)-.7), e8y2, 1.0, 1.0, 0.0, 
(((y+30)*-.2)-.5), e8y2, 0.0, 1.0, 0.0,
//enemy 9
(((y+10)*.2)-.7), e9y1, 0.0, 1.0, 1.0, 
(((y+10)*.2)-.5), e9y1, 0.0, 1.0, 1.0, 
(((y+10)*.2)-.7), e9y2, 0.0, 0.4, 0.0, 
(((y+10)*.2)-.5), e9y2, 0.0, 0.4, 0.0,
//enemy 10
(((y+15)*.3)-.7), e10y1, 0.0, 1.0, 1.0, 
(((y+15)*.3)-.5), e10y1, 0.0, 1.0, 1.0, 
(((y+15)*.3)-.7), e10y2, 1.0, 0.0, 1.0, 
(((y+15)*.3)-.5), e10y2, 1.0, 0.0, 1.0,
//enemy 11
(((y+5)*-.3)+.7), e11y1, 1.0, 0.0, 1.0, 
(((y+5)*-.3)+.5), e11y1, 1.0, 0.0, 1.0, 
(((y+5)*-.3)+.7), e11y2, 1.0, 0.0, 0.0, 
(((y+5)*-.3)+.5), e11y2, 1.0, 0.0, 0.0,
//enemy 12
(((y+2)*-.3)+.7), e12y1, 0.0, 0.0, 1.0, 
(((y+2)*-.3)+.3), e12y1, 0.0, 0.0, 1.0, 
(((y+2)*-.3)+.7), e12y2, 1.0, 1.0, 0.0, 
(((y+2)*-.3)+.3), e12y2, 1.0, 1.0, 0.0


 ]); 
	
	
}

function render(){
		update(cBuffer);
	 	gl.clear(gl.COLOR_BUFFER_BIT); 
		if(y<270)		y+=0.2;
		elevation.innerHTML = "Depth: "+ parseInt(((y+90)*10)) +"m";
		
		//draw background
 		gl.drawArrays(gl.TRIANGLE_FAN, 0, 4); 
		//draw enemy at middle
 		gl.drawArrays(gl.TRIANGLE_STRIP, 4, 4);
		//draw sea bottom
 		gl.drawArrays(gl.TRIANGLE_STRIP, 8, 4); 
		//draw character
 		gl.drawArrays(gl.TRIANGLE_STRIP, 12, 3); 
		//draw
 		gl.drawArrays(gl.TRIANGLE_STRIP, 15, 4); 
 		gl.drawArrays(gl.TRIANGLE_STRIP, 19, 4); 
 		gl.drawArrays(gl.TRIANGLE_STRIP, 23, 4); 
 		gl.drawArrays(gl.TRIANGLE_STRIP, 27, 4); 
 		gl.drawArrays(gl.TRIANGLE_STRIP, 31, 4); 
 		gl.drawArrays(gl.TRIANGLE_STRIP, 35, 4); 
 		gl.drawArrays(gl.TRIANGLE_STRIP, 39, 4);  
 		gl.drawArrays(gl.TRIANGLE_STRIP, 43, 4); 
 		gl.drawArrays(gl.TRIANGLE_STRIP, 47, 4); 		  
 		gl.drawArrays(gl.TRIANGLE_STRIP, 51, 4); 		  
 		gl.drawArrays(gl.TRIANGLE_STRIP, 55, 4); 
		requestAnimFrame(render); 
 }
