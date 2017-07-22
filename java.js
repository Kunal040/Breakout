var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');


var i=canvas.width/2;
	var j=canvas.height - 30;
	var dx=2,dy=-2;
	var paddleHeight=10
	var paddleWidth=75
	var paddleX=(canvas.width-paddleWidth)/2;
	var leftPressed=false,rightPressed=false;
	var count=0;


	document.addEventListener("keydown",keyDownHandler);
	document.addEventListener("keyup",keyUpHandler);


	function keyDownHandler(e)
	{
		if(e.keyCode==39)
		{
			rightPressed=true;
		}
		else if(e.keyCode==37)
		{
			leftPressed=true;	
		}

	}
	function keyUpHandler(e)
	{
		if(e.keyCode==39)
		{
			rightPressed=false;
		}
		else if(e.keyCode==37)
		{
			leftPressed=false;	
		}

	}

function drawBall()
{
	ctx.beginPath();
	ctx.arc(i,j,10,0,Math.PI*2);
	ctx.fillStyle="blue";
	ctx.fill();
	ctx.closePath();
}
function drawPaddle()
{
	ctx.beginPath();
	ctx.rect(paddleX,canvas.height-paddleHeight,paddleWidth,paddleHeight);
	ctx.fillStyle="blue";
	ctx.fill();
	ctx.closePath();

}
function draw()
{

	ctx.clearRect(0,0,canvas.width,canvas.height);

	drawBall();
	drawPaddle();
	if(j+dy<10)
{
dy=-dy;
}
else if(j+dy>canvas.height-10)
{
	if(i>paddleX && i<paddleWidth+paddleX)
	{
		count++;
		dy=-dy;
		document.getElementById('hel').innerHTML=count;
	}
	else
		{
			alert("Game Over")
		confirm("Your Score:" + " " + count);
	document.location.reload();

}
}

	if(i+dx+10>canvas.width || i+dx<10)
	{
		dx=-dx;
	}

	if(rightPressed && paddleX<canvas.width-paddleWidth)
	{
		paddleX+=7;
	}
	if(leftPressed && paddleX>0)
	{
		paddleX-=7
	}
i+=dx+Math.random();
j+=dy+1;

}
setInterval(draw, 10);