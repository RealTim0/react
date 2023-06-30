import React from "react"
import Squares from "./Squares"
import Confetti from "react-confetti"


export default function Board () {
    const [character, setCharacter] = React.useState(Array(9).fill(""))
    const[isTurn, setIsTurn] = React.useState(true)
    const [isCellClicked, setIsCellClicked] = React.useState(false)
    const isWinner = checkWinner();
    const isDraw = checkDraw();
    const drawMessage ="☘Ooops🌵 IT'S A DRAW"

    function handleClick (index) {
        if (character[index] !== ""){
            return;
        }
        const copyStateCharacter = [...character]
        copyStateCharacter[index] = isTurn ? "❌" : "⭕"
        setCharacter(copyStateCharacter)
        setIsTurn(!isTurn)
        setIsCellClicked(true)
    }

