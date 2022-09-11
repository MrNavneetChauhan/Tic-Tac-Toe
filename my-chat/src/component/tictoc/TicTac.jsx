import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { NotificationContext } from "../../context/NotificationContext";
import "./TicTac.css";
export const TicTac = () => {
  const [turn, setTurn] = useState("x");
  const [cell, setCell] = useState(Array(9).fill(""));
  const {val}= useContext(NotificationContext);
    const [winner,setWinner] = useState();
  const checkForWinner = (squares) => {
    let combos = {
      across: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
      ],
      down: [
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
      ],
      diagonal: [
        [0, 4, 8],
        [2, 4, 6],
      ],
    };

    for (let combo in combos) {
      combos[combo].forEach((pattern) => {
        if (
          squares[pattern[0]] === "" ||
          squares[pattern[0]] === "" ||
          squares[pattern[0]] === ""
        ) {
          //do nothing
        } else if (
          squares[pattern[0]] === squares[pattern[1]] &&
          squares[pattern[1]] === squares[pattern[2]]
        ) {
            setWinner(squares[pattern[0]])
        }
      }); 
    }
  };


  function alertWinner(){
    if(winner){
        alert(`Congratuluations! Winner is ${winner}`)
    }
  }

  useEffect(()=>{
    alertWinner()
    handleRestart();
  },[winner])


  useEffect(()=>{

  })

  const handleClick = (num) => {
    if (cell[num] !== "") {
      alert("already clicked");
      return;
    }
    let squares = [...cell];
    if (turn === "x") {
      squares[num] = "x";
      setTurn("o");
    } else {
      squares[num] = "o";
      setTurn("x");
    }

    checkForWinner(squares);
    setCell(squares);
  };

  const Cell = ({ num }) => {
    return (
      <td onClick={() => handleClick(num)}>
        <h1>{cell[num]}</h1>
      </td>
    );
  };

  const handleRestart = ()=>{
    setWinner(null);
    setCell(Array(9).fill(""))
  }

  return (
    <div className="t-container">
      <h1 className="show-turn">Turn:{turn}</h1>
      {winner && (
        <div className="winner-div">
        <p className="winner-tagline">Winner is {winner}</p>
        </div>
      )}
      <div className="game-div">
        <table>
          <tbody>
            <tr>
              <Cell num={0} />
              <Cell num={1} />
              <Cell num={2} />
            </tr>

            <tr>
              <Cell num={3} />
              <Cell num={4} />
              <Cell num={5} />
            </tr>

            <tr>
              <Cell num={6} />
              <Cell num={7} />
              <Cell num={8} />
            </tr>
          </tbody>
        </table>
        
      </div>
      <Link to="/chat" className="message-box">
        <h1 className="notification">1</h1>
        <h1>...</h1>
      </Link>
    </div>
  );
};
