var gamestate=0,database,Playercount;
var game,form,player;
var playerinfo,distance=0;
var car,car2,car3,car4;
var Cars=[];
function setup(){
    createCanvas(displayWidth,displayHeight);
   var box = createSprite(200,250,50,50);
    database=firebase.database();
    game=new Game();
    game.readdata();
    game.Start();
}

function draw(){
   
  if(Playercount===4){
      game.Update(1);
  }
  if(gamestate===1){
      clear();
      game.play();
  }
    
}

