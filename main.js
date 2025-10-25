function getColor(){
    return Math.floor(Math.random()*255)
}
function getPos(){
    return Math.floor(Math.random()*200)+70
}
function getVel(){
    return Math.floor(Math.random()*20)
}
var balls=[];
var xvelocity=[];
var yvelocity=[];
var xpos=[];
var ypos=[];

function create(){
    var ball=document.createElement("div")
    var canvas=document.getElementById("mycanvas")
    let x=getPos()
    let y=getPos()
    let r=getColor()
    let g=getColor()
    let b=getColor()
    let velx=getVel()
    let vely=getVel()
   
    ball.style.top=y+"px"
    ball.style.left=x+"px"
    ball.style.position="absolute"
    ball.style.height="50px"
    ball.style.width="50px"
    ball.style.background=`rgb(${r},${g},${b})`
    ball.style.borderRadius="50%"

    document.body.appendChild(ball)
    xvelocity.push(velx)
    yvelocity.push(vely)
    xpos.push(x)
    ypos.push(y)
    return ball
}
function factory(n)
        {
        for(let i=0;i<n;i++)
        {
            balls.push(create())
            
        }
        }
        factory(5)
function move()
{
    for(let i=0;i<balls.length;i++)
    {
     xpos[i]=xpos[i]+xvelocity[i];
    if(xpos[i]>= 1000|| xpos[i]<=80)
    {
        xvelocity[i]=-xvelocity[i];
    }
     ypos[i]=ypos[i]+yvelocity[i];
    if(ypos[i]>=500||ypos[i]<=80) 
    {
        yvelocity[i]=-yvelocity[i];
    }
     balls[i].style.left=xpos[i]+"px";
     balls[i].style.top=ypos[i]+"px"; 
    }
    } 
setInterval(move,20)       
