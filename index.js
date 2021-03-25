window.onload = function(){

    const game = {
        gridX: 100,
        gridY: 100,

        renderGame: function (){       
            console.log(this.gridY,this.gridX);

            let canvas = document.getElementById('grid-game');
            let ctx = canvas.getContext('2d');
    
            ctx.clearRect(0,0,200,200);
            ctx.fillRect(this.gridX, this.gridY, 10, 10);
        },

        activeKeyPress: function(){
            document.onkeydown = applyKey;

            function applyKey(event){
                let key = event.code;
                
                if(key == 'ArrowRight' || key == 'ArrowLeft' || key == 'ArrowDown' || key == 'ArrowUp'){
                    if(key == 'ArrowRight'){
                        game.gridX++;  
                    }else if(key == 'ArrowLeft'){
                        game.gridX--;   
                    }else if(key == 'ArrowUp'){
                        game.gridY--   
                    }else if(key == 'ArrowDown'){
                        game.gridY++;  
                    }

                    if(game.gridX > 200){
                        game.gridX = 0;
                    }else if(game.gridX < 0){
                        game.gridX = 200; 
                    }else if(game.gridY > 200){
                        game.gridY = 0;
                    }else if(game.gridY < 0){
                        game.gridY = 200;  
                    }

                }
                game.renderGame();
            } 
            

        },
    }

    
    game.renderGame();
    game.activeKeyPress();
}


