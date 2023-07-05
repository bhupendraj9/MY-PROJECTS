let gameStatus=document.querySelector('.gamestatus');
let newGameBtn=document.querySelector('.newgamebtn');
let grid=document.querySelectorAll('.box');

const winningPositions= [[1,2,3],[7,8,9],[1,4,7],[3,6,9],[4,5,6],[2,5,8],[1,5,9],[3,5,7]];

let gridBackend=["","","","","","","","",""];
let currentPlayer="X";

gameStatus.textContent= `Current Player - ${currentPlayer}`;

function switchplayer()
{
  if(currentPlayer==="X") currentPlayer="O";
  else currentPlayer="X";
  gameStatus.textContent= `Current Player - ${currentPlayer}`
}

function initializeGame()
{
   gridBackend=["","","","","","","","",""];
   currentPlayer="X";
   grid.forEach((box,index)=>{
    box.classList=`box box${index+1}`;
//    box.classList.remove("win");
  grid[index].style.pointerEvents="all";
   box.textContent="";
})
   newGameBtn.classList.remove("active");
   gameStatus.textContent= `Current Player - ${currentPlayer}`
}
initializeGame();
function handleclick(index)
{ 
if(gridBackend[index]===""){
  gridBackend[index]=currentPlayer;
  grid[index].textContent=currentPlayer;
    grid[index].style.pointerEvents="none";
  switchplayer();

  checkWin();
}
}

function checkWin()
{  
    let winner="";
    winningPositions.forEach((subarray)=>{
        //-1 as i made winning positions 1 based 
         if((gridBackend[subarray[0]-1]!=="" || gridBackend[subarray[1]-1]!=="" || gridBackend[subarray[2]-1]!=="")&&(gridBackend[subarray[0]-1]===gridBackend[subarray[1]-1] && gridBackend[subarray[1]-1]===gridBackend[subarray[2]-1]))
       { 
        console.log(subarray[0]-1);
         console.log(subarray[1]-1);
          console.log(subarray[2]-1);

           if(gridBackend[subarray[0]-1]==="X")
          winner="X";
          else
          winner="O";

            grid.forEach((box)=>{box.style.pointerEvents="none";})

        grid[subarray[0]-1].classList.add("win");
         grid[subarray[1]-1].classList.add("win");
          grid[subarray[2]-1].classList.add("win");          
      }
    });
    if(winner!=="")
    {
    
     gameStatus.textContent=`Winner is ${winner}`;
          newGameBtn.classList.add("active");
          return;
    }
    else
    {
        let fillcount=0;
        for(let i=0;i<9;i++)
        {
            if(gridBackend[i]!=="")
             fillcount++;
        }
        if(fillcount==9)
        {gameStatus.textContent="Game Tied!";
         newGameBtn.classList.add("active");}
    }
}
grid.forEach((box,index)=>{box.addEventListener("click",()=>{handleclick(index);})});

newGameBtn.addEventListener('click',initializeGame);