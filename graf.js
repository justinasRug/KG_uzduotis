 function draw() {
      var canvas = document.getElementById('canvas');
      if (canvas.getContext) {
        var ctx = canvas.getContext("2d");

// Draw border
		function drawBorder(){
			ctx.save();
			ctx.beginPath();
			ctx.moveTo(0, 0);
			ctx.lineTo(500, 0);
			ctx.lineTo(500, 500);
			ctx.lineTo(0, 500);
			ctx.closePath();
			ctx.fillStyle = 'white';
			ctx.fill();
			ctx.restore();
		}


	drawBorder();
	var num= 0;
	drawF(num);

	document.addEventListener("keydown", function(e){
		if (e.key == 'ArrowUp' && num<9 ){
			num++;
			console.log(num);
			drawBorder();
			drawF(num);
		  } else if (e.key == 'ArrowDown' && num> 0) {
			num--;
			console.log(num);
			drawBorder();
			drawF(num);
	}})
	
	
	  
	  
	  //animationCall(num)
 }
        // Recursive draw 
        function drawF(step) {
          if (step > 0) {
			ctx.save();
			ctx.save();
			ctx.save();
			ctx.save();	
			ctx.transform(0, -0.25, -0.25, 0, 375, 125);
			if (step == num) ctx.fillStyle = "black";
			drawF(step-1);
			ctx.restore();
			ctx.transform( 0.5, 0,0, -0.5, 250, 500);
			if (step == num) ctx.fillStyle = "red";
			drawF(step-1);
			ctx.restore();
			ctx.transform(0, -0.5, 0.5, 0, 0, 250);
			if (step == num) ctx.fillStyle = "blue";
			drawF(step-1);
			ctx.restore();
			ctx.transform(0.5, 0, 0, 0.5, 0, 250);
			if (step == num) ctx.fillStyle = "green";
			drawF(step-1);
			
			ctx.restore();

          }
          else drawFigure();    
        }       
		function drawFigure() {
			ctx.beginPath();
			ctx.moveTo(0,0);
			ctx.lineTo(125,0);
			ctx.lineTo(250,250);
			ctx.lineTo(500,250);
			ctx.lineTo(0,500);
			ctx.closePath();
			ctx.fill();
		}


 }