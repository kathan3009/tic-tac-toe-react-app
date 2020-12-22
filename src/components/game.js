import React, { useState,useEffect } from 'react';
import './game.css';

const Game = () => {
    const [boards, setBoards] = useState(Array(9).fill(''))
    const [current, setCurrent] = useState('X')
    const [isWinner,setWinner] = useState(false)

    useEffect(() => {
        declareWinner()
      });

    const handleChange = (i) => {
        if(boards[i])
        {
            return null
        }
        else{
       if(current == '' || current == 'O')
       {
           setCurrent('X')
       }
       else
       {
           setCurrent('O')
       }
        boards[i] =current
        setBoards([...boards])
       
    } 
    }
    const declareWinner = () => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for(let i = 0; i < lines.length; i++)
        {
            const [a, b, c] = lines[i];
            if (boards[a] && boards[a] === boards[b] && boards[a] === boards[c]) {
                setCurrent(boards[a])
                setWinner(true)
            }
           
        }
        return null
    }
      if(isWinner == true)
      {
         return (
             <div className="cont">
                 <h1>Our Winner is {current} !!!</h1>
             </div>
         )
      }
      else{
      return(
        <div className="cont">

            <h1>Click on a box to start {current}!!!</h1>
            <div className="grid-cont">
                {

                    boards.map((board,index) => {
                        return <div key={index} onClick={() => handleChange(index)} className="grid">{board}</div>     //return or add ()
                    })
                }
            </div>

        </div>
      )
  }
    
};

export default Game;