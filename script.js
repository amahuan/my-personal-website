// reveals clues
document.addEventListener("keydown", function (e) {
    if (e.key === " ") {
      firstClue();
      secondClue();
      thirdClue();
      fourthClue();
    }
    });

function firstClue() {
    var x = document.getElementById('firstclue');
    if (x.style.display == 'none') {
        x.style.display = 'block';
    }
    else {
        x.style.display = 'none';
    }
    }

function secondClue() {
    var x = document.getElementById('secondclue');
    if (x.style.display == 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
        }
    }

function thirdClue() {
    var x = document.getElementById('thirdclue');
    if (x.style.display == 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
        }
    }

function fourthClue() {
    var x = document.getElementById('fourthclue');
    if (x.style.display == 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
        }
    }
//reveals answer to Clue #1 when "y" is pressed
document.addEventListener("keydown", function (e) {
    if (e.key === "y") {
      moveClue1();
      firstClue();
    }
});

function  moveClue1() {
    var abc = document.getElementById("game1img");
    if (abc.style.display === 'none') {
        abc.style.display = 'block';
    } 
    }
//reveals answer to Clue #2 when "c" is pressed
document.addEventListener("keydown",function(e) {
    if(e.key === 'c') {
        moveClue2();
        secondClue()
    }
});

function  moveClue2() {
    var abc = document.getElementById("game2img");
    if (abc.style.display === 'none') {
        abc.style.display = 'block';
    } 
    }
//reveals answer to Clue #3 when "p" is pressed
document.addEventListener("keydown",function(e) {
    if(e.key === 'p') {
        moveClue3();
        thirdClue();
    }
}); 

function  moveClue3() {
    var abc = document.getElementById("game3img");
    if (abc.style.display === 'none') {
        abc.style.display = 'block';
    } 
    }
//reveals answer to Clue #4 when "b" is pressed
document.addEventListener("keydown",function(e) {
    if(e.key === 'b') {
        moveClue4();
        fourthClue();
    }
});

function  moveClue4() {
    var abc = document.getElementById("game4img");
    if (abc.style.display === 'none') {
        abc.style.display = 'block';
    } 
    }
//reveals final detail with "Enter" is pressed
document.addEventListener("keydown",function(e) {
    if (e.key === 'Enter') {
        final();
    }
});

function final() {
    var xyz = document.getElementById("pm");    
        if (xyz.style.display === 'none') {
        xyz.style.display = 'block';
    } 
}