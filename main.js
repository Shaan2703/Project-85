canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

green_car_width=75;
green_car_height=100;

background_image="parkingLot.jpg"

greencar_image = "car2.png";

green_x=5;
green_y=225;

function add() {
	background_image_tag= new Image();
	background_image_tag.onload = uploadBackground;
	background_image_tag.src=background_image;

	greencar_imgTag= new Image();
	greencar_imgTag.onload =uploadgreencar;
	greencar_imgTag.src=greencar_image
}

function uploadBackground() {
	ctx.drawImage(background_image_tag,0,0,canvas.width,canvas.height);

}

function uploadgreencar() {
	
	ctx.drawImage(greencar_imgTag,green_x,green_y,green_car_width,green_car_height);
	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if (green_y>=0) {
	green_y=green_y-10;
	console.log("When up  key is pressed,x=" + green_x+ ",y =" +green_y )
	uploadBackground();
	uploadgreencar();
	}
}

function down()
{
	if (green_y<=500) {
	green_y=green_y+10;
	console.log("When down  key is pressed,x=" + green_x+ ",y =" +green_y )
	uploadBackground();
	uploadgreencar();
	}
}
function left() {
if (green_x>=0) {
	green_x=green_x-10;
	console.log("When left  key is pressed,x=" + green_x+ ",y =" +green_y )
	uploadBackground();
	uploadgreencar();
}
}

function right()
{
	if (green_x<=700) {
	green_x=green_x+10;
	console.log("When right key is pressed,x=" + green_x+ ",y =" +green_y )
	uploadBackground();
	uploadgreencar();
	}
}
