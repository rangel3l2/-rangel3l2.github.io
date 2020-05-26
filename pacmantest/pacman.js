

     // 1 = <div class='bloco'></div> 
	// 2 = <div class='bem'></div>
	// 3 = <div class='chao'></div>
    // 5 = <div class='covid'></div>
   
    

	var map = [ 
  //em y      
/* 0*/      [1,1,1,1,1,1,1,1,1,1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 
/* 2*/		[1,2,2,2,2,2,2,2,2,2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1], 
/* 3*/   	[1,2,1,1,1,2,1,1,1,2, 1, 2, 1, 2, 1, 2, 1, 2, 2, 2, 1], 
/* 4*/		[1,2,1,2,2,2,2,2,2,2, 1, 2, 1, 2, 2, 2, 1, 1, 2, 2, 1], 
/* 5*/		[1,2,2,2,2,2,1,2,1,2, 5, 2, 2, 2, 1, 2, 2, 2, 1, 2, 1], 
/* 6*/		[1,2,1,2,2,2,1,2,1,2, 1, 2, 1, 2, 1, 2, 1, 1, 2, 2, 1], 
/* 7*/		[1,2,1,1,1,2,1,2,1,2, 2, 1, 2, 2, 1, 2, 1, 2, 2, 2, 1], 
/* 8*/		[1,2,2,2,2,2,2,2,2,2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1], 
/* 9*/      [1,1,1,1,1,1,1,1,1,1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] 
 //em x      0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 //
];

      //objeto pacman
 	var  covid  =  {
		x: 10,
		y: 4,
    }
    
	var score = 0;

	function drawWorld() {
        
		document.getElementById('world').innerHTML = "";
		for(var y = 0; y < map.length; y++){
			//console.log(map[y]);
			for(var x = 0; x < map[y].length; x++){
			//	console.log(map[y][x])
				if (map[y][x] === 1){
                    //chamada dos elementos;
					document.getElementById('world').innerHTML += "<div class='bloco'></div>";
				}
				else if (map[y][x] === 2){
					document.getElementById('world').innerHTML += "<div class='bem'></div>";
				}
				else if (map[y][x] === 3){
					document.getElementById('world').innerHTML += "<div class='chao'></div>";
				}
				else if (map[y][x] === 5){
					document.getElementById('world').innerHTML += "<div class='covid'></div>";
                }
              
			}
            document.getElementById('world').innerHTML += "<br>";
            
		}
	}

	document.onkeydown = function(e){
       // console.log(e.keyCode);
         corpo = covid
	      
            if (e.keyCode === 37){
              //left
             //localiza onde o objeto esta no mapa variavel pacnow;
             //pacNow ='pacman'+(map[covid.y][covid.x]);
       
                if (map[covid.y][covid.x-1]!== 1){
                    if (map[covid.y][covid.x-1] === 2 || map[covid.y][covid.x-1] === 3){
                      
                        while(map[covid.y][covid.x-1]===2 || map[covid.y][covid.x-1]===3) {
                           

                        map[covid.y][covid.x] = 3;
                        covid.x = covid.x - 1 ;
                        map[covid.y][covid.x] = 5;             
                        if((map[covid.y][covid.x-1]===2 || map[covid.y][covid.x-1])===3) {
                            score = score + 10;}
                            console.log(score);
                            
                        drawWorld(); }
                    }
                   
                         
                   
                   
                }
                drawWorld(); 
            }
		
		else if (e.keyCode === 38){
			// up
			if (map[covid.y-1][covid.x] !== 1){	
           
                while(map[covid.y-1][covid.x]===2 || map[covid.y-1][covid.x]===3) {
                map[covid.y][covid.x] = 3;
             
				covid.y = covid.y - 1;
				map[covid.y][covid.x] = 5;
				drawWorld();
			}
        }
		}
		else if (e.keyCode === 39){
			// right
			if (map[covid.y][covid.x+1] !== 1){
                while(map[covid.y][covid.x+1]===2 || map[covid.y][covid.x+1]===3) {
				map[covid.y][covid.x] = 3;
				covid.x = covid.x + 1 ;
				map[covid.y][covid.x] = 5;
                drawWorld();
                }
			}
		}
		else if (e.keyCode === 40){
            // down
            while(map[covid.y+1][covid.x]===2 || map[covid.y+1][covid.x]===3) {
			if (map[covid.y+1][covid.x] !== 1){
				map[covid.y][covid.x] = 3;
				covid.y = covid.y + 1 ;
				map[covid.y][covid.x] = 5;
				drawWorld();
			}
		}
	}
}
    
	drawWorld();
    

	// End of JavaScript
