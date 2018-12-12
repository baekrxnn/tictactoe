/* global $*/

//let performLogic;

let currentUser="o";

let counter=0;
    
    
function performLogic(buttonId,tileId) {
    $(buttonId).hide();
    $(tileId).text(player);
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
    let numberOfTurns=counter++;
    
    if (numberOfTurns===9) {
        $("h1").text("draw!");
    }
}

$("#button1").click( function() {
    performLogic("#button1","#tile1");
    turns();
});

$("#button2").click( function() {
    performLogic("#button2","#tile2");
    turns();
});

$("#button3").click( function() {
    performLogic("#button3","#tile3");
    turns();
});

$("#button4").click( function() {
    performLogic("#button4","#tile4");
    turns();
});

$("#button5").click( function() {
    performLogic("#button5","#tile5");
    turns();
});

$("#button6").click( function() {
    performLogic("#button6","#tile6");
    turns();
});

$("#button7").click( function() {
    performLogic("#button7","#tile7");
    turns();
});

$("#button8").click( function() {
    performLogic("#button8","#tile8");
    turns();
});

$("#button9").click( function() {
    performLogic("#button9","#tile9");
    turns();
});
