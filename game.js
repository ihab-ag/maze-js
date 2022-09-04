window.onload = (event) => {
    // variables
    var level='easy';
    var score=0;
    var time;
    // elements
    const boundaries=document.getElementsByClassName('boundary');
    const start= document.getElementById('start');
    const status=document.getElementById('status');
    const end=document.getElementById('end');
    const game=document.getElementById('game');
    // messages
    const winMsg= document.createTextNode("| YOU WIN!!");
    const loseMsg= document.createTextNode("| YOU LOSE HAHA");
    const emptyMsg=document.createTextNode("");
    const easyBtn=document.createElement('button');
    const mediumBtn=document.createElement('button');
    const hardBtn=document.createElement('button');
    const saveBtn=document.createElement('button');

    let person = prompt("Hello User, Please Enter Your Name", " ");

    easyBtn.innerHTML='Easy';
    mediumBtn.innerHTML='Medium';
    hardBtn.innerHTML='Hard';
    saveBtn.innerHTML='Save';

    easyBtn.style="margin-left:20%";
    mediumBtn.style="margin-left:10%";
    hardBtn.style="margin-left:10%";
    saveBtn.style="margin-left:10%";


    easyBtn.onclick=()=>{
        level='easy';
        loadLevel();
    }
    mediumBtn.onclick=()=>{
        level='medium';
        loadLevel();
    }

    hardBtn.onclick=()=>{
        level='impossible';
        loadLevel();
    }

    saveBtn.onclick=()=>{
        saveScore();
    }

    document.body.appendChild(easyBtn);
    document.body.appendChild(mediumBtn);
    document.body.appendChild(hardBtn);
    document.body.appendChild(saveBtn);

    if(localStorage.getItem(person)){
        score=localStorage.getItem(person);
    }

    loadLevel();

    // Functions
    function loadLevel(){
        start.onmouseover=()=>{
            begin();
        }
    }
    //start the game contains initial state
    function begin(){
     updateScore();
     if(level=='hard'){
        time=30;
        timeinterval = setInterval(updateTimerHard, 1000);
     }
     else if(level=='medium'){
        time=60;
        timeinterval = setInterval(updateTimerMedium, 1000);
     }
     else{
        status.appendChild(emptyMsg);
     }
     
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
    //update score on h2 text
    function updateScore(){
        status.innerHTML=person+"'s score: "+score;
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
         if(level!='easy'){
            clearTimeout(timeinterval);
            end.style='display:normal';
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
    //add and remove event to boundaries
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
    // Update timers
    function updateTimerMedium(){
        time--;
        status.innerHTML="score: "+score+" time: "+time;
        if(time==0){
            lose();
        }
    }
    function updateTimerHard(){
        time--;
        status.innerHTML="score: "+score+" time: "+time;
        if(time==25){
            end.style='display:none';
        }
        if(time==0){
            lose();
        }
    }
    function saveScore(){
        localStorage.setItem(person, score);
    }
  };

