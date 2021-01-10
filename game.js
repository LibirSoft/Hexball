const canvas = document.getElementById('gamemap')
const ctx = canvas.getContext('2d')





const drawRect = (x, y, w, h, color) => {
    ctx.fillStyle = color
    ctx.fillRect(x, y, w, h)
}

const drawCircleS = (x, y, r, w, color) => {
    ctx.strokeStyle = color
    ctx.lineWidth = w
    ctx.beginPath()
    ctx.arc(x, y, r, 0, 2 * Math.PI)
    ctx.closePath()
    ctx.stroke()
}
const drawCircleF = (x, y, r, color) => {
    ctx.fillStyle = color
    ctx.beginPath()
    ctx.arc(x, y, r, 0, 2 * Math.PI)
    ctx.closePath()
    ctx.fill()
}

const drawText = (text, x, y, color) => {
    ctx.fillStyle = color
    ctx.font = '40px arial'
    ctx.fillText(text, x, y)
}

var drawball = (x,y,r,c,c2) => {
    drawCircleF(x, y, r, c)
    drawCircleS(x, y, r + 1, 2, c2)
}

var drawgoal = (x,b,r)=>{

    drawCircleF(x, (canvas.height/5)*2-b, r, '#fff')

    drawCircleS(x, (canvas.height/5)*2-b, r+2, 5, '#000')

    drawCircleF(x, (canvas.height/5)*3+b, r, '#fff')

    drawCircleS(x, (canvas.height/5)*3+b, r+2, 5, '#000')
}

var drawMap = () => {
    //saha
    drawRect(0, 0, canvas.width, canvas.height, '#2e7d32')
    //orta çizgi
    drawRect((canvas.width/2)-3, 0, 6, canvas.height, '#fff')
    //ortadaki çember
    drawCircleS((canvas.width/2), canvas.height/2, 150, 5, '#fff')
    //ortadaki daire
    drawCircleF((canvas.width/2), canvas.height/2, 10, '#fff')
    //kale
    drawgoal(0,40,10);
    drawgoal(canvas.width,40,10)
    drawball()
}

/*************************************************************Klaslar*********************************************** */
var ball = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    r: 20,
    color: '#b71c1c',
    speed: 0,
    maxSpeed: 7,
    velocityX: 0,
    velocityY: 0,
    stop: true
}
class Player{
     speed=0;
     radius=25;
    constructor(x,y,color){
        this.x=x
        this.y=y
        this.color=color
       

    }

}
var player1 = new Player(50,50,'#fff')




var user = {
    x: 20,
    y: canvas.height / 2 - 50,
    w: 10,
    h: 100,
    color: '#fff',
    score: 0,
    isMovingUp: false,
    isMovingDown: false,
    isMovingLeft: false,
    isMovingRight: false
}
/************************************************************************************************************************ */

/************************************************Variables*************************************************************** */

var Players =[]

Players.push(player1)
   console.log(Players[0].radius) 





/*********************************************************************************************************************** */
/************************************************************************* kontroller******************************* */
function userKeyDown(e){

    


    if(e.code === 'KeyW'){
        user.isMovingDown = true;
    }

    if(e.code === 'KeyS'){
        user.isMovingUp = true;
    }
    if(e.code === 'KeyD'){
        user.isMovingRight = true;
    }
    if(e.code === 'KeyA'){
        user.isMovingLeft = true;
    }

   
}

document.addEventListener('keydown', userKeyDown)

function userKeyUp(e){
    if(e.code === 'KeyW'){
        user.isMovingDown = false;
    }

    if(e.code === 'KeyS'){
        user.isMovingUp = false;
    }

     if(e.code === 'KeyD'){
        user.isMovingRight = false;
    }
    if(e.code === 'KeyA'){
        user.isMovingLeft = false;
    }

   
}

document.addEventListener('keyup', userKeyUp);
//*************************************************************************************************************** */


const render = () => {

    //************* DRAW MAP *************/
    drawMap()

    //kullanıcı 1 skor
    drawText(user.score, canvas.width / 4, 100, '#fff')
    //kullancı 2 skor
    drawText(user2.score, 3 * canvas.width / 4, 100, '#fff')

    //kullnaıcı 1in raketi
    drawRect(user.x, user.y, user.w, user.h, '#fff')
    //kullanıcı 2 nin raketi
    drawRect(user2.x, user2.y, user2.w, user2.h, '#fff')

    //topu çizdirme
    drawball()

}
const update = () =>{

    if(user.isMovingLeft){
        x-= 4;
    }
    if(user.isMovingRight){
        x+= 4;
    }

    if(user.isMovingUp){
        y-= 4;
    }
    if(user.isMovingDown){
        y+= 4;
    }



}



const game = () => {

    
    update()

}

const fps = 120
setInterval(game, 1000 / fps)

drawMap()
