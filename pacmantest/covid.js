//matrix dos elementos
var world = [
        [5,5,5,5,5,5,5,5,5,5,5 ,5 ,5 ,5 ,5 ,5 ,5 ,5 ,5 ,5 ,5 ,5,5],
	    [5,1,1,1,1,1,1,1,1,1,1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1,5], 
		[5,1,2,2,2,2,2,2,2,2,2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1,5], 
   	    [5,1,2,4,4,4,2,4,4,4,2, 4, 2, 4, 2, 4, 2, 4, 2, 2, 2, 1,5], 
		[5,1,2,4,2,2,2,2,2,2,2, 4, 2, 4, 2, 2, 2, 4, 4, 2, 2, 1,5], 
		[5,2,2,2,2,2,2,4,2,4,2, 2, 2, 2, 2, 4, 2, 2, 2, 4, 2, 2,5], 
    	[5,1,2,4,2,2,2,2,2,2,2, 4, 2, 4, 2, 4, 2, 4, 4, 2, 2, 1,5], 
		[5,1,2,4,4,4,2,4,4,4,2, 2, 4, 2, 2, 4, 2, 4, 2, 2, 2, 1,5], 
		[5,1,2,2,2,2,2,2,2,2,2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1,5], 
        [5,1,2,2,2,2,2,2,2,2,2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1,5],  
        [5,2,2,2,2,2,2,2,2,2,2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,5], 
		[5,1,2,2,2,2,2,2,2,4,4, 2, 2, 4, 4, 4, 2, 2, 2, 2, 2, 1,5], 
   	    [5,1,2,2,2,2,2,2,2,4,4, 2, 2, 4, 1, 4, 2, 2, 2, 2, 2, 1,5], 
		[5,1,2,2,2,2,2,2,2,2,4, 2, 2, 4, 4, 4, 2, 2, 2, 2, 2, 1,5], 
		[5,2,2,2,2,2,2,2,2,2,4, 2, 2, 2, 2, 4, 2, 2, 2, 2, 2, 2,5], 
		[5,1,2,2,2,2,2,2,2,2,4, 2, 2, 4, 2, 4, 2, 2, 2, 2, 2, 1,5], 
		[5,1,2,2,2,2,2,2,2,2,2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1,5], 
		[5,1,2,2,2,2,2,2,2,2,2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1,5], 
        [5,1,1,1,1,1,1,1,1,1,1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1,5],        
        [5,5,5,5,5,5,5,5,5,5,5 ,5 ,5 ,5 ,5 ,5 ,5 ,5 ,5 ,5 ,5 ,5,5]
	];

	var score = 0;

	var covid = {
		x: 2,
		y: 2
	}
    //como o mapa é estruturado (seus elementos)
	function drawWorld(){
		var map = '';

		for(var i=0; i<world.length; i++){
			map += "<div class='row'>";
			for(var j=0; j<world[i].length; j++){
                if(world[i][j] == 1)
                
					map += "<div class='brick'></div>";
				else if(world[i][j] == 2)
					map += "<div class='meal'></div>";
				else if(world[i][j] == 3)
                    map += "<div class='cherry'></div>";
                    else if(world[i][j]==4)
                    map+= "<div class='covidLogo'></div>";
				else if(world[i][j] == 0)
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
         addEventListener("click",Start)        
         addEventListener("click",interval)
       
    }
    
//eventos iniciais
    function Start(){
        addEventListener("keydown",mykeyBoard,false);
        document.querySelector('#iniciar').style.display="none";   
            
     drawWorld()
    }
          
    const btn_left=37;
    const btn_right=39;
    const btn_up=38;
    const btn_down=40;
    var dxr=0,dxl=0,dyu=0,dyd=0;
    const Timer =500;
    let interLeft,interRight,interUp,interDown;
    let pressTime=0
	function mykeyBoard(e){
		//document.getElementById('covid').style.left = 50+"px";
        //console.log(covid.x);
        
        if(e.keyCode == btn_left){
            
            pressTime++;
          
            setTimeout(() => (pressTime = 0), Timer)
            dxl=1
            dxr=0
            dyu=0
            dyd=0
        
            moveLeft()
           


}
        
        else if(e.keyCode == btn_right ){
            pressTime++;
          
            setTimeout(() => (pressTime = 0), Timer)
            dxl=0
            dxr=1
            dyu=0
            dyd=0
           
            moveRight();
           
      

        }
        
            
          
           
        
       
        else if(e.keyCode == btn_up ){

            pressTime++;
          
            setTimeout(() => (pressTime = 0), Timer)
            dxr=0
            dxl=0
            dyu=1
            dyd=0
            
            moveUp()
       
        }
       
        else if(e.keyCode == btn_down){
            pressTime++;
          
            setTimeout(() => (pressTime = 0), Timer)
		    dxr=0
            dxl=0
            dyu=0
            dyd=1
        
          moveDown()
          
       
        }
        
      //comer elementos
	
        //console.log(e.keyCode);
        
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
        
        if(world[covid.y][covid.x-1] != 1 && 
             world[covid.y][covid.x-1]!= 4 
             && dxl==1 && pressTime==0               
            )
            {
               
              
                covid.x-=dxl;
                
                  
                  
            
                   
                    document.getElementById('covid').style.left =  document.getElementById('covid').style.transform = "scaleX(-1)";			
                
               
              
                
            }
            
    }
    function allowMoveRight(){
        if( world[covid.y][covid.x+1] != 1 && covid.x<=world[0].length &&
            world[covid.y][covid.x+1] != 4 && dxr==1 && pressTime==0   )
            {
                document.getElementById('covid').style.transform = "none";
              
               
               covid.x=covid.x+dxr;
               
            }
    }
    function allowMoveUp(){
        if(world[covid.y-1][covid.x]!= 1 && covid.y > 0 &&
            world[covid.y-1][covid.x] != 4 &&dyu==1 && pressTime==0   ) 
            {
                document.getElementById('covid').style.transform = "rotate(-90deg)";
               
                covid.y=covid.y-dyu;
                
            } 
    }
    function allowMoveDown(){
        if(world[covid.y+1][covid.x]  != 1 &&
            world[covid.y+1][covid.x] != 4 && dyd==1 && pressTime==0   )
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
}

