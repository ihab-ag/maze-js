window.onload = (event) => {
    var score=0;
    const boundaries=document.getElementsByClassName('boundary');
    const start= document.getElementById('start');
    const status=document.getElementById('status');
    const end=document.getElementById('end');
    const winMsg= document.createTextNode("| YOU WIN!!");
    const loseMsg= document.createTextNode("| YOU LOSE HAHA");
    start.onmouseover=()=>{
        begin();
    }
    // Functions
    //start the game contains win-lose conditions
    function begin(){
     boundaryRedBG(false);
     boundarySwitchEvent(true);

     game.onclick=()=>{
        lose();
     }
     end.onmouseover=()=>{
            win();
        }
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

