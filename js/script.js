/* global $*/

//let performLogic;

let currentUser="o";

let counter=1;

let gameSet=false;
    
function performLogic(buttonId,tileId) {
    $(buttonId).hide();
    $(tileId).text(player);
    check();
    turns();
}

function player() {
    /*
    if ((counter%2)===0) {
        currentUser="o";
        return currentUser;
    } else {
        currentUser="x";
        return currentUser;
    }
    */
    
    if (currentUser==="x") {
        currentUser="o";
        return currentUser;
    } else if (currentUser==="o") {
        currentUser="x";
        return currentUser;
    }
    
}

function turns() {
    let numberOfTurns = counter++;
    console.log(numberOfTurns);
    if ((numberOfTurns)===9) {
        gameSet=true;
        // console.log(gameSet);
        return gameSet;
    } else {
        console.log(gameSet);
    }
}

function check(tileA, tileB, tileC) {
    checkWins("#tile1","#tile2","#tile3");
    checkWins("#tile4","#tile5","#tile6");
    checkWins("#tile7","#tile8","#tile9");
    
    //checkVerticalWins();
    //checkVerticalWins();
    //checkVerticalWins();
    
    //checkDiagonalWins();
    //checkDiagonalWins();
}

function checkWins(selectorA, selectorB, selectorC) {
    let a=$(selectorA).text();
    let b=$(selectorB).text();
    let c=$(selectorC).text();
    
    if (a===currentUser && b===currentUser && c===currentUser) {
        alert("win!");
    }
    
    
}

$("#button1").click( function() {
    performLogic("#button1","#tile1");
});

$("#button2").click( function() {
    performLogic("#button2","#tile2");
});

$("#button3").click( function() {
    performLogic("#button3","#tile3");
});

$("#button4").click( function() {
    performLogic("#button4","#tile4");
});

$("#button5").click( function() {
    performLogic("#button5","#tile5");
});

$("#button6").click( function() {
    performLogic("#button6","#tile6");
});

$("#button7").click( function() {
    performLogic("#button7","#tile7");
});

$("#button8").click( function() {
    performLogic("#button8","#tile8");
});

$("#button9").click( function() {
    performLogic("#button9","#tile9");
});
