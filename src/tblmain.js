import React from "react";
import Confetti from 'react-confetti'
export default function Table() {
  const [shuffle, setShuffle] = React.useState(Array(9).fill(""));
  const [currentLetter, setCurrentLetter] = React.useState("X");
  const [gameStatus, setGameStatus] = React.useState("ongoing");
    
    function handleClick(index) {
        if (shuffle[index] !== "" || gameStatus !== "ongoing") {
            return;
          }
      
    const newShuffle =[...shuffle];
    newShuffle[index] = currentLetter;
    setShuffle(newShuffle);

    setCurrentLetter(currentLetter === "X" ? "O" : "X");
    
    }
    function resetGame() {
      setShuffle(Array(9).fill(""));
      setCurrentLetter("X");
      setGameStatus("ongoing");
    }
    
  
    if ( shuffle[0]==="X"&& shuffle[1]=="X" && shuffle[2]==="X") {
      return (
        <main className="test">
      <div className="main">
       <Confetti />
          <p className="win">X wins</p> 
          <div className="mBtn">
  <button className="button" onClick={resetGame}>New Game</button>

</div>   
          </div>
      </main>
        );
    } else if (shuffle[0]==="O" &&shuffle[1]==="O"  & shuffle[2]==="O") {
      return (
       <div className="main">
        <Confetti />    
        <p className="win">O wins</p>
          <div className="mBtn">      
        <button className="button" onClick={resetGame}>New Game</button>
        </div></div>
      );
   } if ( shuffle[3]==="X"&& shuffle[4]=="X" && shuffle[5]==="X") {
      return (
        <div className="main">
          <Confetti />    
        <p className="win">X wins</p> 
          <div className="mBtn">      
        <button className="button" onClick={resetGame}>New Game</button>
        </div></div>
      );
    } else if (shuffle[3]==="O" && shuffle[4]==="O" && shuffle[5]==="O") {
      return (
        <div className="main">
         <Confetti />
         <p className="win">O wins</p>
        <div className="mBtn">        
         <button className="button" onClick={resetGame}>New Game</ button>
</div>
         </div>
       );
    }
    if ( shuffle[6]==="X"&& shuffle[7]=="X" && shuffle[8]==="X") {
      return (
        <div className="main">
          <Confetti />    
        <p className="win">X wins</p> 
          <div className="mBtn">      
        <button className="button" onClick={resetGame}>New Game</button>
        </div></div>
      );
    } else if (shuffle[6]==="O" && shuffle[7]==="O" && shuffle[8]==="O") {
      return (
        <div className="main">
         <Confetti />
    
         <p className="win">O wins</p>
        <div className="mBtn">        
         <button className="button" onClick={resetGame}>New Game</ button>
</div>
         </div>
       );
    }
    if ( shuffle[0]==="X"&& shuffle[3]=="X" && shuffle[6]==="X") {
      return (
        <div className="main">
          <Confetti />    
        <p className="win">X wins</p> 
          <div className="mBtn">      
        <button className="button" onClick={resetGame}>New Game</button>
        </div></div>
      );
    } else if (shuffle[0]==="O" &&shuffle[3]==="O"  & shuffle[6]==="O") {
      return (
        <div className="main">
         <Confetti />
    
         <p className="win">O wins</p>
        <div className="mBtn">        
         <button className="button" onClick={resetGame}>New Game</ button>
</div>
         </div>
       );
    }
    if ( shuffle[1]==="X"&& shuffle[4]=="X" && shuffle[7]==="X") {
      return (
        <div className="main">
          <Confetti />    
        <p className="win">X wins</p> 
          <div className="mBtn">      
        <button className="button" onClick={resetGame}>New Game</button>
        </div></div>
      );
    } else if (shuffle[1]==="O" && shuffle[4]==="O" && shuffle[7]==="O") {
      return (
        <div className="main">
         <Confetti />
    
         <p className="win">O wins</p>
        <div className="mBtn">        
         <button className="button" onClick={resetGame}>New Game</ button>
</div>
         </div>
       );
    }
    if ( shuffle[2]==="X"&& shuffle[5]=="X" && shuffle[8]==="X") {
      return (
        <div className="main">
          <Confetti />    
        <p className="win">X wins</p> 
          <div className="mBtn">      
        <button className="button" onClick={resetGame}>New Game</button>
        </div></div>
      );
    } else if (shuffle[2]==="O" && shuffle[5]==="O" && shuffle[8]==="O") {
      return (
        <div className="main">
         <Confetti />
    
         <p className="win">O wins</p>
        <div className="mBtn">        
         <button className="button" onClick={resetGame}>New Game</ button>
</div>
         </div>
       );
    }
    if ( shuffle[0]==="X"&& shuffle[4]=="X" && shuffle[8]==="X") {
      return (
        <div className="main">
          <Confetti />    
        <p className="win">X wins</p> 
          <div className="mBtn">      
        <button className="button" onClick={resetGame}>New Game</button>
        </div></div>
      );
    } else if (shuffle[0]==="O" &&shuffle[4]==="O"  & shuffle[8]==="O") {
      return (
        <div className="main">
         <Confetti />
    
         <p className="win">O wins</p>
        <div className="mBtn">        
         <button className="button" onClick={resetGame}>New Game</ button>
</div>
         </div>
       );
    }
    if ( shuffle[2]==="X"&& shuffle[4]=="X" && shuffle[6]==="X") {
      return (
        <div className="main">
          <Confetti />    
        <p className="win">X wins</p> 
          <div className="mBtn">      
        <button className="button" onClick={resetGame}>New Game</button>
        </div></div>
      );
    } else if (shuffle[2]==="O" && shuffle[4]==="O" && shuffle[6]==="O") {
      return (
        <div className="main">
         <Confetti />
    
         <p className="win">O wins</p>
        <div className="mBtn">        
         <button className="button" onClick={resetGame}>New Game</ button>
</div>
         </div>
       );
      }else if(shuffle.every(cell => cell !== "")){
        return(
          <div>
            <div className="win">Draw</div>
            <div className="mBtn">        
              <button className="button" onClick={resetGame}>New Game</button>
            </div>
          </div>
        );
      }
    return (
      <main>
      <div className="play">
        <h3>Player</h3>
        <div className="disp">
          <span className="display">{currentLetter}</span>
        </div>
      </div>
      <table className="Table">
        <tbody>
          <tr className="row">
            <td className="data" onClick={() => handleClick(0)}>
              {shuffle[0]}
            </td>
            <td className="data" onClick={() => handleClick(1)}>
              {shuffle[1]}
            </td>
            <td className="data" onClick={() => handleClick(2)}>
              {shuffle[2]}
            </td>
          </tr>
          <tr className="row">
            <td className="data" onClick={() => handleClick(3)}>
              {shuffle[3]}
            </td>
            <td className="data" onClick={() => handleClick(4)}>
              {shuffle[4]}
            </td>
            <td className="data" onClick={() => handleClick(5)}>
              {shuffle[5]}
            </td>
          </tr>
          <tr className="row">
            <td className="data" onClick={() => handleClick(6)}>
              {shuffle[6]}
            </td>
            <td className="data" onClick={() => handleClick(7)}>
              {shuffle[7]}
            </td>
            <td className="data" onClick={() => handleClick(8)}>
              {shuffle[8]}
            </td>
          </tr>
        </tbody>
      </table>
      <div className="Btn">
        <button className="button" onClick={resetGame}>
          New Game
        </button>
      </div>
    </main>
  );
    }