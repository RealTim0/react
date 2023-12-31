import React from "react"
import Squares from "./Squares"
import Confetti from "react-confetti"
import {Link} from "react-router-dom"



export default function Board () {
    const [character, setCharacter] = React.useState(Array(9).fill(""))
    const[isTurn, setIsTurn] = React.useState(true)
    const [isCellClicked, setIsCellClicked] = React.useState(false)
    const [loserPlayer, setLoserPlayer] = React.useState("")
    const isWinner = checkWinner();
    const isDraw = checkDraw();
    const drawMessage ="☘Ooops🌵 IT'S A DRAW"
    
        

    function handleClick (index) {
        if (character[index] !== ""){
            alert("Hey you! I've already been clicked!")
            return;
        }
       
        const copyStateCharacter = [...character]
        copyStateCharacter[index] = isTurn ? "X" : "O"
        setCharacter(copyStateCharacter)
        setIsTurn(!isTurn)
        setIsCellClicked(true)
        setLoserPlayer(isTurn ? "⭕" : "❌")
    }
function checkDraw() {
        return character.every((cell) => cell !== "");
    }


    function checkWinner() {

       
        
        let winner = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [0, 4, 8],
            [2, 4, 6],
            [2, 5, 8]
        ]

        for (let logic of winner) {
            const [a, b, c] = logic
            if (character[a] !== "" && character[a] === character[b] && character[a] === character[c]) {
                return character[a]
            }
        }
         return false
    }



    function handleReset(){
        setCharacter(Array(9).fill(""))
        setIsCellClicked(false)
    }

   //conditional rendering 
if(isWinner){
    return( 
        <>
            <Confetti />
            <h1>🎉{isWinner} has won the game🎉</h1>
            <span className="windiv"><h3>Player {loserPlayer} you can :</h3> <button onClick={handleReset} className="play">Play Again</button></span>
        </>
    )}

else if(isDraw){
    return(
        <>
            <h1 className="Draw">{drawMessage} </h1>
            <button onClick={handleReset} className="play">Play Again</button>
        </>
    )}
    else{
    return(
       <>
            <div className="header">
                <h1 >TIC-TAC-TOE</h1>
                <h3 >Player:{isTurn ? "X" : "O"} Make Your Move😎!</h3>
            </div>
            <div className="rows">
                    <Squares onClick={() => handleClick(0)} value={character[0]}/>
                    <Squares onClick={() => handleClick(1)} value={character[1]}/>
                    <Squares onClick={() => handleClick(2)} value={character[2]}/>
                </div>
                <div className="rows">
                    <Squares onClick={() => handleClick(3)} value={character[3]}/>
                    <Squares onClick={() => handleClick(4)} value={character[4]}/>
                    <Squares onClick={() => handleClick(5)} value={character[5]}/>
                </div>
                <div className="rows">
                    <Squares onClick={() => handleClick(6)} value={character[6]}/>
                    <Squares onClick={() => handleClick(7)} value={character[7]}/>
                    <Squares onClick={() => handleClick(8)} value={character[8]}/>
                    
                </div>
                <div className="boardbuttons">
                {isCellClicked && <button onClick={handleReset} className="play">Reset Game</button>}
                <button><Link to='/' className="link">
   Back to home
        </Link></button>
            </div>
        </>
    )}
}
