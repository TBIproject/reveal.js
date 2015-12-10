function draw(){
	var canvas = document.getElementById('whiteCan');
	if (canvas.getContext){
		var ctx = canvas.getContext('2d');

		ctx.font="25px 'Source Sans Pro'";
		ctx.strokeStyle="#FFF";
		ctx.fillStyle="#FFF";

		ctx.beginPath();

		// repère
		ctx.moveTo(60, 90);
		ctx.lineTo(60, 390);
		ctx.lineTo(360, 390);

		ctx.moveTo(60, 370);
		ctx.lineTo(80, 370);
		ctx.lineTo(80, 390);

		ctx.moveTo(50, 100);
		ctx.lineTo(60, 90);
		ctx.lineTo(70, 100);

		ctx.moveTo(350, 380);
		ctx.lineTo(360, 390);
		ctx.lineTo(350, 400);

		ctx.fillText("O", 30, 420);
		ctx.fillText("I", 370, 420);
		ctx.fillText("J", 30, 90);

		// doigt
		ctx.moveTo(235, 265);
		ctx.lineTo(245, 275);
		ctx.moveTo(245, 265);
		ctx.lineTo(235, 275);
		ctx.fillText("Doigt", 250, 300);

		// cameras
		ctx.moveTo(505, 25);
		ctx.lineTo(515, 35);
		ctx.moveTo(515, 25);
		ctx.lineTo(505, 35);
		ctx.fillText("CAM 1", 520, 60);

		ctx.moveTo(595, 265);
		ctx.lineTo(605, 275);
		ctx.moveTo(605, 265);
		ctx.lineTo(595, 275);
		ctx.fillText("CAM 2", 610, 300);

		ctx.stroke();
		ctx.closePath();
	}
	
	var canvas = document.getElementById('whiteCan2');
	if (canvas.getContext){
		var ctx = canvas.getContext('2d');

		ctx.font="25px 'Source Sans Pro'";
		ctx.strokeStyle="#FFF";
		ctx.fillStyle="#FFF";

		ctx.beginPath();

		// repère
		ctx.moveTo(60, 90);
		ctx.lineTo(60, 390);
		ctx.lineTo(360, 390);

		ctx.moveTo(60, 370);
		ctx.lineTo(80, 370);
		ctx.lineTo(80, 390);

		ctx.moveTo(50, 100);
		ctx.lineTo(60, 90);
		ctx.lineTo(70, 100);

		ctx.moveTo(350, 380);
		ctx.lineTo(360, 390);
		ctx.lineTo(350, 400);

		ctx.fillText("O", 30, 420);
		ctx.fillText("I", 370, 420);
		ctx.fillText("J", 30, 90);

		// doigt
		ctx.moveTo(235, 265);
		ctx.lineTo(245, 275);
		ctx.moveTo(245, 265);
		ctx.lineTo(235, 275);
		ctx.fillText("Doigt", 250, 300);

		// cameras
		ctx.moveTo(505, 25);
		ctx.lineTo(515, 35);
		ctx.moveTo(515, 25);
		ctx.lineTo(505, 35);
		ctx.fillText("CAM 1", 520, 60);

		ctx.moveTo(595, 265);
		ctx.lineTo(605, 275);
		ctx.moveTo(605, 265);
		ctx.lineTo(595, 275);
		ctx.fillText("CAM 2", 610, 300);

		ctx.stroke();
		ctx.closePath();
	}
	
	var canvas = document.getElementById('yellowCan');
	if (canvas.getContext){
		var ctx = canvas.getContext('2d');

		ctx.font="25px 'Source Sans Pro'";
		ctx.strokeStyle="#488";
		ctx.fillStyle="#488";

		ctx.beginPath();

		// lignes
		ctx.moveTo(-150, 270);
		ctx.lineTo(900, 270);
		ctx.fillText("y₂ = a₂ x + b₂", 550, 255);

		ctx.stroke();
		ctx.closePath();
		
		ctx.strokeStyle="#884";
		ctx.fillStyle="#884";

		ctx.beginPath();

		ctx.moveTo(60, 450);
		ctx.lineTo(600, 450);
		ctx.moveTo(68, 442);
		ctx.lineTo(60, 450);
		ctx.lineTo(68, 458);
		ctx.moveTo(592, 442);
		ctx.lineTo(600, 450);
		ctx.lineTo(592, 458);
		ctx.fillText("Δx₂", 320, 480);
		ctx.fillText("Δy₂", 615, 340);

		ctx.moveTo(185, 390);
		ctx.arc(60, 390, 125, 0, -0.22, true);
		ctx.moveTo(193, 390);
		ctx.arc(60, 390, 133, 0, -0.22, true);

		ctx.moveTo(475, 270);
		ctx.arc(600, 270, 125, Math.PI, Math.PI-0.22, true);
		ctx.moveTo(467, 270);
		ctx.arc(600, 270, 133, Math.PI, Math.PI-0.22, true);

		ctx.stroke();
		ctx.closePath();

		ctx.setLineDash([15, 10]);

		ctx.beginPath();

		// dotted
		ctx.moveTo(690, 390);
		ctx.lineTo(60, 390);
		ctx.lineTo(600, 270);
		ctx.lineTo(600, 390);

		// dotted right angle
		ctx.moveTo(580, 390);
		ctx.lineTo(580, 370);
		ctx.lineTo(600, 370);

		ctx.stroke();
		ctx.closePath();
	}
	
	var canvas = document.getElementById('blueCan');
	if (canvas.getContext){
		var ctx = canvas.getContext('2d');

		ctx.font="25px 'Source Sans Pro'";
		ctx.strokeStyle="#488";
		ctx.fillStyle="#488";

		ctx.beginPath();

		// lignes
		ctx.moveTo(-30, 510);
		ctx.lineTo(780, -210);
		ctx.fillText("y₁ = a₁ x + b₁", 450, 105);
		ctx.moveTo(-150, 270);
		ctx.lineTo(900, 270);
		ctx.fillText("y₂ = a₂ x + b₂", 550, 255);

		ctx.stroke();
		ctx.closePath();
	}
}