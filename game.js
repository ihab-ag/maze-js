window.onload = (event) => {
    var score=0;
    const boundaries=document.getElementsByClassName('boundary');
    const start= document.getElementById('start');
    const status=document.getElementById('status');
    const end=document.getElementById('end');
    const game=document.getElementById('game');
    const winMsg= document.createTextNode("| YOU WIN!!");
    const loseMsg= document.createTextNode("| YOU LOSE HAHA");
    const emptyMsg=document.createTextNode("");

    start.onmouseover=()=>{
        begin();
    }
    // Functions
    //start the game contains initial state
    function begin(){
     updateScore();
     status.appendChild(emptyMsg);
     boundaryRedBG(false);
     applyConditions();
    } 
    //lose procedure
    function lose(){
        boundaryRedBG(true);
        score-=10;
        updateScore();
        status.appendChild(loseMsg);
        resetEvents();
    }
    //win procedure
    function win(){
        score+=5;
        updateScore();
        status.appendChild(winMsg);
        resetEvents();
    }
    //update score onh2 text
    function updateScore(){
        status.innerHTML="score: "+score;
    }
    //reset event functions
    function resetEvents(){
        game.onclick=()=> {
        }
        boundarySwitchEvent(false);
        game.onmouseout=()=>{
        }
        end.onmouseover=()=>{
        }
        game.onmouseleave=()=>{
         }
    }
    //apply win-lose conditions
    function applyConditions(){
        game.onmouseleave=()=>{
            lose();
         };
        boundarySwitchEvent(true);

        game.onclick=()=>{
           lose();
        }
        end.onmouseover=()=>{
            win();
        }
    }
    //fadd and remove event to boundaries
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
    //change boundaries bg color accourding to situation
    function boundaryRedBG(bool){
        if(bool){
            for (const boundary of boundaries) {
                boundary.style.backgroundColor='red';
            } 
        }
        else{
            for (const boundary of boundaries) {
                boundary.style.backgroundColor='#eeeeee';
            } 
        }
    }
  };

