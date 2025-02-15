let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

//Monetoring turn of playerX & playerO
let turnO = true;

/* Winning Pattern - There will be total 8 winning pattern as 3 horizontal, 3 Vertical & 2 Diagonal. 
    We need to store them & check if any one of them matches then the winner should be announced
 */

    const winningPatterns = [
        [0, 1, 2],
        [0, 3, 6],
        [0, 4, 8],
        [1, 4, 7],
        [2, 5, 8],
        [2, 4, 6],
        [3, 4, 5],
        [6, 7, 8]
    ];

    const resetGame = () => {
        turnO = true;
        enableBoxes();
        msgContainer.classList.add("hide");
    };

    // for(box of boxes) {
    //     box.addEventListener("click", () => {
    //         console.log("Box is Clicked");
    //     })
    // };    

    boxes.forEach((box) => {
        box.addEventListener("click", () => {
            if(turnO === true) {
                box.innerText = "X";
                turnO = false;             
            } else {
                box.innerText = "O";
                turnO = true;
            }
        box.disabled = true;
        checkWinner();
        });
    });

    const disableBoxes = () => {
        for(let box of boxes) {
            box.disabled = true;
        }
    };

    const enableBoxes = () => {
        for(let box of boxes) {
            box.disabled = false;
            box.innerText = "";
        }
    };

    const showWinner = (winner) => {
        msg.innerText = `Congratulations, Winner is ${winner}`;
        msgContainer.classList.remove("hide");
        disableBoxes();
    };

const checkWinner = () => {
    for(pattern of winningPatterns) {
        // console.log(pattern);
        // console.log(pattern[0], pattern[1], pattern[2]);
        // console.log(boxes[pattern[0]].innerText, 
        //     boxes[pattern[1]].innerText, 
        //     boxes[pattern[2]].innerText);
        
        let pos1Val = boxes[pattern[0]].innerText;  //[][]
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if(pos1Val === pos2Val && pos2Val === pos3Val) {
                showWinner(pos1Val);       
            }
        };
    };
};  

newGameBtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);