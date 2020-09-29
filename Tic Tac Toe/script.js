function startGame(){
    for(var i=1;i<=9;i=i+1)
    {
        clearBox(i);
    }

    document.turn = "X";
    if(Math.random()< 0.5)
    {
        document.turn = "O";
    }

    document.winner = null;
    setMessage(document.turn + " starts first");
    document.getElementById("b1").style.color = "black";
    document.getElementById("b2").style.color = "black";
    document.getElementById("b3").style.color = "black";
    document.getElementById("b4").style.color = "black";
    document.getElementById("b5").style.color = "black";
    document.getElementById("b6").style.color = "black";
    document.getElementById("b7").style.color = "black";
    document.getElementById("b8").style.color = "black";
    document.getElementById("b9").style.color = "black";
}

function setMessage(msg){
    document.getElementById("message").textContent = msg;
}

function nextMove(square){
    if(document.winner != null){
        setMessage(document.winner + " has already won the game");
    }

    else if(square.textContent == ""){
        square.textContent = document.turn;
        switchTurn();
    }

    else{
        setMessage("Its already used");
    }
}

function switchTurn(){
    if(checkForWinner(document.turn)){
        setMessage("Congratulations " + document.turn + "! You have won");
        document.winner = document.turn;
    }

    else if(checkForTie())
    {
        setMessage("Its a Draw!, Play again.");

    }

    else if(document.turn == "X"){
        document.turn = "O";
        setMessage("Its " + document.turn + " turn");
    }

    else{
        document.turn = "X";
        setMessage("Its " + document.turn + " turn");
    }
}

function checkForWinner(move){
    var result = false;
    if(checkRow(1,2,3,move) 
    || checkRow(4,5,6,move) 
    || checkRow(7,8,9,move) 
    || checkRow(1,4,7,move) 
    || checkRow(2,5,8,move) 
    || checkRow(3,6,9,move) 
    || checkRow(1,5,9,move) 
    || checkRow(3,5,7,move))
    {
        result = true;
    }
    return result;
}

function checkRow(a,b,c,move)
{
    var result = false;
    if(getBox(a)== move && getBox(b)== move && getBox(c)== move){
        result = true;
    }
    return result;
}

function getBox(number){
    return document.getElementById("b" + number).textContent;

}

function clearBox(number){
    document.getElementById("b" + number).textContent = "";

}

function checkForTie(){
    for(var i=1;i<10;i++){
        if(getBox(i)=="")
        return false;
    }
return true;
}