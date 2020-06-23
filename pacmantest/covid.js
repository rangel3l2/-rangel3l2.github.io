//matrix dos elementos
var world = [
        [5,5,5,5,5,5,5,5,5,5,5 ,5 ,5 ,5 ,5 ,5 ,5 ,5 ,5 ,5 ,5 ,5,5],
	    [5,1,1,1,1,1,1,1,1,1,1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1,5], 
		[5,1,0,2,2,2,2,2,2,2,2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1,5], 
   	    [5,1,2,4,4,4,2,4,4,4,2, 4, 2, 4, 2, 4, 2, 4, 2, 1, 2, 1,5], 
		[5,1,2,4,2,2,2,2,2,2,2, 4, 2, 4, 2, 2, 2, 4, 4, 2, 2, 1,5], 
		[5,2,2,2,2,1,2,4,2,4,2, 2, 2, 2, 2, 4, 2, 2, 2, 4, 2, 2,5], 
    	[5,1,2,4,2,2,2,2,2,2,2, 4, 2, 4, 2, 4, 2, 4, 4, 2, 2, 1,5], 
		[5,1,2,4,4,4,2,4,4,4,2, 2, 4, 2, 2, 4, 2, 4, 2, 1, 2, 1,5], 
		[5,1,2,2,2,2,2,2,2,2,2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1,5], 
        [5,1,1,1,1,1,1,1,1,1,2, 1, 1, 1, 1, 2, 1, 1, 1, 1, 2, 1,5],  
        [5,2,2,2,2,2,2,2,2,2,2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2,5], 
		[5,1,2,1,2,1,1,1,4,4,2, 1, 2, 4, 4, 4, 2, 1, 2, 1, 2, 1,5], 
   	    [5,1,2,2,2,2,1,2,4,4,2, 1, 2, 4, 1, 4, 2, 2, 2, 1, 2, 1,5], 
		[5,1,2,1,1,2,2,2,2,4,2, 1, 2, 4, 4, 4, 2, 1, 1, 1, 2, 1,5], 
		[5,2,2,1,1,1,1,1,2,4,2, 1, 2, 2, 2, 4, 2, 1, 2, 1, 2, 2,5], 
		[5,1,2,2,2,2,2,2,2,4,2, 1, 2, 4, 2, 4, 2, 1, 2, 1, 2, 1,5], 
		[5,1,2,1,1,1,1,1,2,1,2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 1,5], 
		[5,1,2,1,2,2,2,2,2,1,1, 2, 1, 2, 1, 1, 2, 2, 2, 2, 2, 1,5], 
        [5,1,1,1,1,1,1,1,1,1,1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1,5],        
        [5,5,5,5,5,5,5,5,5,5,5 ,5 ,5 ,5 ,5 ,5 ,5 ,5 ,5 ,5 ,5 ,5,5]
	];
//22x19
	var score = 0;

	var covid = {
		x: 2,
		y: 2
    }
    const eaten = 0
    const brick3d = 4
    const meal =2
    const brick = 1


    
    //como o mapa é estruturado (seus elementos)
	function drawWorld(){
		var map = '';

		for(var i=0; i<world.length; i++){
			map += "<div class='row'>";
			for(var j=0; j<world[i].length; j++){
                if(world[i][j] == brick)
                
					map += "<div class='brick'></div>";
				else if(world[i][j] == meal)
					map += "<div class='meal'></div>";
				else if(world[i][j] == 3)
                    map += "<div class='cherry'></div>";
                    else if(world[i][j]==brick3d)
                    map+= "<div class='covidLogo'></div>";
				else if(world[i][j] == eaten)
                    map += "<div class='empty'></div>";
                    else if(world[i][j] == 5)
                    map += "<div class='limit'></div>";    
				//mapa = mapa + world[i][j];
			}
            map += "\n</div>";
           
		}
        // console.log(mapa);
     
        document.getElementById('world').innerHTML = map;
 
        
    }
   
    //o que é visivel em meu display

	function displayCovid(){
      
        

        document.getElementById('covid').style.left = covid.x*25.2+"px";
     
        
        document.getElementById('covid').style.top = covid.y*25.5+"px";
	
    

}         
	
	function displayScore(){
        
        document.getElementById('score').innerHTML = (`Score<br>${score}</br>`);
        document.querySelector('#score').style.display='block';
       
    }
    //caminho inicial do código
    window.addEventListener("load",main);
    
    //1. inicio do código 

    function main(){    
     
     document.querySelector('#iniciar').innerHTML =
      (`<input type="button"  value="play game">`)
         addEventListener("click",startClick)        
         addEventListener("click",interval)
       
    }
    
//eventos iniciais
    function startClick(){
        addEventListener("keydown",mykeyBoard,false);
        document.querySelector('#iniciar').style.display="none";  
        document.querySelector('#poison').style.display="block"; 
        document.addEventListener("load",movePoison);
      

        const audio1 = document.getElementById('mostrar')
         audio1.play();
         audio1.currentTime =40;
         audio1.volume = 0.1;
         audio1.duration=2;
            
     drawWorld()
    }
          
    const btn_left=37;
    const btn_right=39;
    const btn_up=38;
    const btn_down=40;
    var dxr=false,dxl=false,dyu=false,dyd=false;
    const Timer =500;
    let interLeft,interRight,interUp,interDown;
    let pressTime=0
    var test= []
   var e
   let directionY=false;
   let directionX=false;
   let left=true,right=true,up=true,down=true;
  
   function direction(){
       
   } 
	function mykeyBoard(e){
        let front = world[covid.y][covid.x+1];
        let back =  world[covid.y][covid.x-1];
        let over = world[covid.y-1][covid.x];
        let under = world[covid.y+1][covid.x];
       //movimento normal 
      if(e.keyCode==btn_right && front=== brick || front === brick3d){
          right=false;
          console.log("right",right);

      }
      else if(e.keyCode==btn_right && front=== eaten || front === meal){
          right=true;
         console.log("right",right);
         
       
      }
      else if(e.keyCode==left && back=== brick || back ===brick3d){
          left=false
          console.log("left",left);
          
          
      }
      else if(e.keyCode==btn_left && back === eaten || back ===meal){
          left=true
          console.log("left",left);
          
      }
      else if(e.keyCode==btn_up && over === brick || over ===brick3d){
          up=false;
        console.log("up",up);
              }
      else if(e.keyCode==btn_up && over === meal || over === eaten){
          up =true
        console.log("up",up);
        
      }
      else if(e.keyCode==btn_down && under === brick || under === brick3d){
          down=false
         console.log("down",down);
         
      }
      else if(e.keyCode==btn_down && under === meal || under === eaten){
          down=true;
          console.log("down",down);
          
      }

      //edge left
      
      else if(e.keyCode==btn_left && over==brick || over==brick3d){
          up=false;
          console.log("up permitido",up);
      }
      else if(e.keyCode==btn_left && under==brick|| under==brick3d){
          down=false;
          console.log("down permitido",down);
      }
      else if(e.keyCode==btn_left && over == meal || over==eaten){
          up=true
          console.log("up permitido",up);
      }
      else if(e.keyCode==btn_left && under == meal || under == eaten ){
          down=true;
          console.log("down permitido",down);
          
      }
    //edge right
    else if(e.keyCode==btn_right && over==brick || over==brick3d){
        up=false;
        console.log("up negado",up);
    }
    else if(e.keyCode==btn_right && under==brick|| under==brick3d){
        down=false;
        console.log("down negado",down);
    }
    else if(e.keyCode==btn_right && over == meal || over==eaten){
        up=true
        console.log("up permitido",up);
    }
    else if(e.keyCode==btn_right && under == meal || under == eaten ){
        down=true;
        console.log("down permitido",down);
        
    }
    //edge up
    else if(e.keyCode==btn_up && front==brick || front==brick3d){
       right=false
        console.log("right negado",right);

        
    }
    else if(e.keyCode==btn_up && back==brick || back==brick3d){
        left=false;
        console.log("left negado",left);
        
    }
    else if(e.keyCode==btn_up && front ==meal || front==eaten){
        right=true;
        console.log("right permitido",right);
    }
    else if(e.keyCode==btn_up && back == meal || back == eaten){
        left=true;
        console.log("left permitido",left);
        
    }
    // edge down
    else if(e.keyCode==btn_down && front==brick || front==brick3d){
        right=false
         console.log("right negado",right);
 
         
     }
     else if(e.keyCode==btn_down && back==brick || back==brick3d){
         left=false;
         console.log("left negado",left);
         
     }
     else if(e.keyCode==btn_down && front ==meal || front==eaten){
         right=true;
         console.log("right permitido",right);
     }
     else if(e.keyCode==btn_down && back == meal || back == eaten){
         left=true;
         
         console.log("left permitido",left);
         
     }

        
      
 
else if( e.keyCode ==btn_left || e.keyCode ==btn_right){
directionX = true;
directionY=false;
}
else if(e.keyCode == btn_up || e.keyCode == btn_down){
directionY=true;
directionX=false;
}
    
      
           
           
             
             
       
        
       
		//document.getElementById('covid').style.left = 50+"px";
        //console.log(covid.x);
        
        if(e.keyCode ==btn_left ){
            
            pressTime++;
          
            setTimeout(() => (pressTime = 0), Timer)
            dxl=true
            dxr=false
            dyu=false
            dyd=false
           
            moveLeft()
           


}
        
        else if(e.keyCode == btn_right ){
          
            pressTime++;
          
            setTimeout(() => (pressTime = 0), Timer)
            dxl=false
            dxr=true
            dyu=false
            dyd=false
           
            moveRight();
           
      

        }
        
            
          
           
        
       
        else if(e.keyCode == btn_up ){

           
            pressTime++;
          
            setTimeout(() => (pressTime = 0), Timer)
            dxr=false
            dxl=false
            dyu=true
            dyd=false
            
            moveUp()
       
        }
       
        else if(e.keyCode == btn_down ){
            pressTime++;
         
            setTimeout(() => (pressTime = 0), Timer)
		    dxr=false
            dxl=false
            dyu=false
            dyd=true
        
          moveDown()
          
     
       
       
       
       
        }
        
      //comer elementos
	
        //console.log(e.keyCode);
        console.log("left externo",left);
        console.log("right externo",right);
        console.log("up externo", up);
        console.log("down externo",down,"\n\n\n")
       
		displayCovid();
    }
    //realizadas tarefas relacionados ao movimento do objeto pacman
    function moveLeft(){
     
        allowMoveLeft();                     
        crossWorldLeft();
        displayCovid();
        eat();  
        
        


               
    }
    function moveRight(){

        allowMoveRight();
        crossWorldRight();
        displayCovid();        
        eat();
       
      
    }
    function moveUp(){
        allowMoveUp();
        crossWorldUp();
        displayCovid(); 
        eat();
        

    }
    function moveDown(){
        allowMoveDown();
        crossWorldDown();
        displayCovid(); 
        eat();
       
    }
   //condições para acontecer o movimento
    function allowMoveLeft(){
        test.push(dxl)
        if(world[covid.y][covid.x-1] != 1 && 
             world[covid.y][covid.x-1]!= 4 
             && dxl && pressTime==0  && left             
            )
            {
               
              
                covid.x-=dxl;
                
                  
                
            
                   
                    document.getElementById('covid').style.left =  document.getElementById('covid').style.transform = "scaleX(-1)";			
                
               
              
                
            }
        }
    function allowMoveRight(){
        test.push(dxr)
        if( world[covid.y][covid.x+1] != 1 && covid.x<=world[0].length &&
            world[covid.y][covid.x+1] != 4 && dxr && pressTime==0 && right   )
            {
                document.getElementById('covid').style.transform = "none";
              
               
               covid.x=covid.x+dxr;
               
            }
       
    }
    function allowMoveUp(){
        test.push(dyu)
        if(world[covid.y-1][covid.x]!= 1 && covid.y > 0 &&
            world[covid.y-1][covid.x] != 4 &&dyu && pressTime==0 &&up  ) 
            {
                document.getElementById('covid').style.transform = "rotate(-90deg)";
               
                covid.y=covid.y-dyu;
                
                
                
            } 

    }
    function allowMoveDown(){
       
        if(world[covid.y+1][covid.x]  != 1 &&
            world[covid.y+1][covid.x] != 4 && dyd && pressTime==0 
            && covid.y<world.length && down
           )
          
            
              
            {
                document.getElementById('covid').style.transform = "rotate(90deg)";
               
                covid.y=covid.y+dyd;
                
            } 

    }
    //eventos para atravessar o mundo
    function crossWorldLeft(){
        if(world[covid.y][covid.x-1] != 2 && covid.x < 1 && world[covid.y][covid.x-1] != 0){
			document.getElementById('covid').style.transform = "rotate(-180deg)";
            covid.x = world[0].length-2;
            
            
          }
    }
        
    function crossWorldRight(){
         if(world[covid.y][covid.x+1]!= 1 &&  covid.x > 0 && covid.x == world[0].length -1
             && world[covid.y][covid.x+1] != 4 && world[covid.y][covid.x+1] != 0 ){
			document.getElementById('covid').style.transform = "none";
            covid.x = 1;
            
        }
    }
    function crossWorldUp(){   
        if( world[covid.y-1]!=1 && covid.y ==0 && world[covid.y-1]!= 4)
                {
                covid.y = world.length-2;
    
    
                }  
    }   
    function crossWorldDown(){
         if( world[covid.y+1]!= 1 && covid.y == world.length-1 && 
            world[covid.y+1]!= 4 || covid.y == world.length)
                   {
                        covid.y = 1;
                    }    
            
    }
  
  //evento para comer os elementos
    function eat(){
        if (world[covid.y][covid.x] == 2){
           world[covid.y][covid.x] = 0;
         
           scoreBehaviour();
           drawWorld();
            displayScore();
            const audio = document.getElementById('comer')
            audio.play();

            
           
        }

   }
    //pontuações
   function scoreBehaviour(){
    if (world[covid.y][covid.x] == 0){
        
        score+=10;
      
    }
    
   
   
  

}
//eventos de intervalo

function interval(){
     interLeft = setInterval(moveLeft, Timer);
     interRight = setInterval(moveRight,Timer);
     interUp = setInterval(moveUp,Timer);
     interDown=setInterval(moveDown,Timer);

     interLeft = setInterval(allowMovePoisonLeft, Timer);
     interRight = setInterval(allowMovePoisonRight,Timer);
     interUp = setInterval(allowMovePoisonUp,Timer);
     interDown=setInterval(allowMovePoisonDown,Timer);

     
}



let poison ={
    y:17,
    x:17
}
function displayPoison(){
      
        

    document.getElementById('poison').style.left = poison.x*25.2+"px";
 
    
    document.getElementById('poison').style.top = poison.y*25.5+"px";



}         
let iniciador
function movePoison(){
 iniciador= Math.floor(Math.random() * 4);
allowMovePoisonLeft()
allowMovePoisonRight()
allowMovePoisonUp()
allowMovePoisonDown()
displayPoison()
console.log(iniciador);


}
 
function allowMovePoisonLeft(){
    if(world[poison.y][poison.x-1]!=1 &&
        world[poison.y][poison.x-1]!=4 && poison.x > 0 &&
        iniciador==0){
            poison.x--;
        }

}
function allowMovePoisonRight(){
    if(world[poison.y][poison.x+1]!=1 &&
        world[poison.y][poison.x+1]!=4 &&
        poison.x<=world[0].length && iniciador==1 ){
            poison.x++;
        }

}
function allowMovePoisonUp(){
    if(world[poison.y-1][poison.x]!=1 
        &&world[poison.y-1][poison.x]!=4
         && poison.y > 0 && iniciador==2){
            poison.y--;
        }

}
function allowMovePoisonDown(){
    if(world[poison.y+1][poison.x]!=1 
        &&world[poison.y+1][poison.x]!=4 &&
        iniciador==3
       ){

            poison.y++;
        }

}
