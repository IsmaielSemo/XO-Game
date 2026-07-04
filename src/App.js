import React from 'react';
import { useState } from 'react';
import './App.css';







function Grid(){
  return (
    <>
        <h1 className="title">XO GAME</h1>
        <div className="horizontal_line1"> </div>
        <div className="horizontal_line2"> </div>
        <div className="vertical_line1"> </div>    
        <div className="vertical_line2"> </div>   
    </>
   
  );
}

function Slots(){
  const [board, setBoard] = useState(Array(9).fill(null));
  const [player, setPlayer] = useState(0);
  const [winningLine, setWinningLine] = useState(null);
 
  const handleResponse = (number) => {
    if (board[number] !== null || winningLine !== null) return;  // Safety check: Don't allow clicks if slot is taken OR if someone already won

    const updatedArray = [...board]; 
    updatedArray[number] = player === 0 ? 'X' : 'O'; 
    setBoard(updatedArray);

    
       
    // Horizontal rows
    if (updatedArray[0] !== null && updatedArray[0] === updatedArray[1] && updatedArray[1] === updatedArray[2]) {
        setWinningLine("line1");
    } 
    else if (updatedArray[3] !== null && updatedArray[3] === updatedArray[4] && updatedArray[4] === updatedArray[5]) {
        setWinningLine("line2");
    }
    else if (updatedArray[6] !== null && updatedArray[6] === updatedArray[7] && updatedArray[7] === updatedArray[8]) {
        setWinningLine("line3");
    }



    // Vertical columns
    else if (updatedArray[0] !== null && updatedArray[0] === updatedArray[3] && updatedArray[3] === updatedArray[6]) {
        setWinningLine("line4");
    } 
    else if (updatedArray[1] !== null && updatedArray[1] === updatedArray[4] && updatedArray[4] === updatedArray[7]) {
        setWinningLine("line5");
    }
    else if (updatedArray[2] !== null && updatedArray[2] === updatedArray[5] && updatedArray[5] === updatedArray[8]) {
        setWinningLine("line6");
    }


    // Diagonals
    else if (updatedArray[0] !== null && updatedArray[0] === updatedArray[4] && updatedArray[4] === updatedArray[8]) {
        setWinningLine("line7");
    }
    else if (updatedArray[2] !== null && updatedArray[2] === updatedArray[4] && updatedArray[4] === updatedArray[6]) {
        setWinningLine("line8");
    }
    else {
        // Only change player turns if nobody won on this click
        setPlayer(player === 0 ? 1 : 0);
    }
  };

  return(
    <>
      {winningLine ? <div className={winningLine}></div> : null}

      <button className="button1" onClick={() => handleResponse(0)} disabled={winningLine !== null || board[0] !== null}> 
        {board[0] === 'X' ? <div className="shape-x1"></div> : board[0] === 'O' ? <div className="shape-circle1"></div> : null}
      </button>

      <button className="button2" onClick={() => handleResponse(1)} disabled={winningLine !== null || board[1] !== null}>  
        {board[1] === 'X' ? <div className="shape-x2"></div> : board[1] === 'O' ? <div className="shape-circle2"></div> : null}
      </button> 

      <button className="button3" onClick={() => handleResponse(2)} disabled={winningLine !== null || board[2] !== null}>  
        {board[2] === 'X' ? <div className="shape-x3"></div> : board[2] === 'O' ? <div className="shape-circle3"></div> : null} 
      </button>

      <button className="button4" onClick={() => handleResponse(3)} disabled={winningLine !== null || board[3] !== null}>  
        {board[3] === 'X' ? <div className="shape-x4"></div> : board[3] === 'O' ? <div className="shape-circle4"></div> : null} 
      </button>

      <button className="button5" onClick={() => handleResponse(4)} disabled={winningLine !== null || board[4] !== null}>  
        {board[4] === 'X' ? <div className="shape-x5"></div> : board[4] === 'O' ? <div className="shape-circle5"></div> : null}
      </button>

      <button className="button6" onClick={() => handleResponse(5)} disabled={winningLine !== null || board[5] !== null}> 
        {board[5] === 'X' ? <div className="shape-x6"></div> : board[5] === 'O' ? <div className="shape-circle6"></div> : null}
      </button>

      <button className="button7" onClick={() => handleResponse(6)} disabled={winningLine !== null || board[6] !== null}> 
        {board[6] === 'X' ? <div className="shape-x7"></div> : board[6] === 'O' ? <div className="shape-circle7"></div> : null}
      </button>

      <button className="button8" onClick={() => handleResponse(7)} disabled={winningLine !== null || board[7] !== null}> 
        {board[7] === 'X' ? <div className="shape-x8"></div> : board[7] === 'O' ? <div className="shape-circle8"></div> : null}
      </button>

      <button className="button9" onClick={() => handleResponse(8)} disabled={winningLine !== null || board[8] !== null}> 
        {board[8] === 'X' ? <div className="shape-x9"></div> : board[8] === 'O' ? <div className="shape-circle9"></div> : null}
      </button>
    </>
  )
}

function App() {
  return (
    <>
      <Grid/>
      <Slots/>
    </>
   
  );
}





export default App;
