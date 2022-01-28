// clue #1
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

document.addEventListener("keydown",function(e) {
    if(e.key === 'Enter') {
        final();
    }
});

function  final() {
    var abc = document.getElementById("pm");
    if (abc.style.display === 'none') {
        abc.style.display = 'block';
    } 
    }

/*
document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      firstClue();
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

document.addEventListener("keydown",function(e) {
    if(e.key === ' ') {
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

// clue #2
document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight") {
      secondClue();
    }
});
function secondClue() {
    var x = document.getElementById('secondclue');
    if (x.style.display == 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
        }
    }

document.addEventListener("keydown",function(e) {
    if(e.key === ' ') {
        secondClue();
        moveClue2();
    }
});

function  moveClue2() {
    var abc = document.getElementById("game2img");
    if (abc.style.display === 'none') {
        abc.style.display = 'block';
    } 
    }

// clue #3
document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowDown") {
      thirdClue();
    }
});

function thirdClue() {
    var x = document.getElementById('thirdclue');
    if (x.style.display == 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
        }
    }

document.addEventListener("keydown",function(e) {
    if(e.key === ' ') {
        thirdClue();
        moveClue3();
    }
}); 

function  moveClue3() {
    var abc = document.getElementById("game3img");
    if (abc.style.display === 'none') {
        abc.style.display = 'block';
    } 
    }

// clue #4
document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowUp") {
      fourthClue();
    }
});

function fourthClue() {
    var x = document.getElementById('fourthclue');
    if (x.style.display == 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
        }
    }

document.addEventListener("keydown",function(e) {
    if(e.key === ' ') {
        fourthClue();
        moveClue4();
    }
});

function  moveClue4() {
    var abc = document.getElementById("game4img");
    if (abc.style.display === 'none') {
        abc.style.display = 'block';
    } 
    }

// FINAL
document.addEventListener("keydown",function(e) {
    if(e.key === 'Enter') {
        final();
    }
});

function  final() {
    var abc = document.getElementById("pm");
    if (abc.style.display === 'none') {
        abc.style.display = 'block';
    } 
    }




/*      
   
document.addEventListener("click", firstClue());

document.addEventListener("click", function (e) {
    if (e.key === "ArrowLeft") {
      firstClue();
    }
    }); function moveDodgerLeft() {
        const leftNumbers = dodger.style.left.replace("px", "");
        const left = parseInt(leftNumbers, 10);
      
        if (left > 0) {
          dodger.style.left = `${left - 1}px`;
        }
      }

function firstClue() {
        var text1 = document.getElementById("firstclue");
        if(#vis1).click(firstClue() {
            (#hide).toggleClass("show");
        })
    }

const clue1 = document.getElementById("firstclue");

document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      firstClue();
    }
if (left > 0) {
          dodger.style.left = `${left - 1}px`;
        }
      }





      function toggleText() {
        var text = document.getElementById("demo");
        if (text.style.display === "none") {
          text.style.display = "block";
        } else {
          text.style.display = "none";
        }
      }
      */