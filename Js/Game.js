class Game{
    constructor(){

    }
    readdata(){
        var refGamestate=database.ref('Gamestate')
        refGamestate.on('value',function(data){
        gamestate=data.val();
        })
    }
    Update(state){
        database.ref('/').update({
         Gamestate:state   
        })
        
    }
    async Start(){
        if(gamestate===0){
         player=new Player();
         var countref= await database.ref('Playercount').once("value");
         if(countref.exists()){
             Playercount= countref.val();
         
         player.getcount();
         }
        form=new Form();
        form.display();

        } 
        car=createSprite(100,200);
        car2=createSprite(300,200);
        car3=createSprite(500,200);
        car4=createSprite(700,200);
        Cars=[car,car2,car3,car4];
    }
        play(){
            form.hide();
            textSize(25);
            text("Game Start",200,100);
            Player.playerinfo();
            if(playerinfo!==undefined){
            var index=0;
            var x=0;
            var y;
            for(var plr in playerinfo){
                index=index+1;
                x=x+200;
                y=displayHeight-playerinfo[plr].distance;
                Cars[index-1].x=x;
                Cars[index-1].y=y;
                if(index===player.index){
                    Cars[index-1].shapeColor=rgb(0,0,255);
                   camera.position.x=displayWidth/2;
                   camera.position.y=Cars[index-1].y;
                }
            }

        }
        
    
        if(keyIsDown(UP_ARROW) && player.index!==null){
player.distance+=70;
player.Update();
        }
        drawSprites();
    }


}