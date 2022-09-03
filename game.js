window.onload = (event) => {
    var wins=0;
    var loses=0;
    const boundaries=document.getElementsByClassName('boundary');
    const start= document.getElementById('start');
    const status=document.getElementById('status');
    const end=document.getElementById('end');
    const game=document.getElementById('game');
    start.onmouseover=()=>{
        begin();
    }
    // Functions
    function begin(){
     boundarySwitchEvent(true);
     game.onmouseout=()=>{
        lose();
     }
     game.onclick=()=>{
        lose();
     }
     end.onmouseover=()=>{
            win();
        }
    } 
    function lose(){
        loses++;
        updateScore();
        resetEvents();
    }
    function win(){
        wins++;
        updateScore();
        resetEvents();
    }
    function boundarySwitchEvent(bool){
        if(bool){
            for (const boundary of boundaries) {
                boundary.onmouseover=()=>{
                    lose();
                }
            } 
        }
        else{
            for (const boundary of boundaries) {
                boundary.onmouseover=()=>{       
                } ;
            } 
        }
    }
    function updateScore(){
        status.innerHTML="wins: "+wins+" | loses: "+loses;
    }
    function resetEvents(){
        game.onclick=()=> {
        }
        boundarySwitchEvent(false);
        game.onmouseout=()=>{
        }
        end.onmouseover=()=>{
        }
    }
  };

