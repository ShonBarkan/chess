import React, {useState} from "react";
import {createContext} from "react";
import {makeAbord} from './functions'


export const MyContext = createContext()
const ContextProvider = ({children}) => {

    const [board,setBoard]=useState(makeAbord)
    const [wantToMove ,setWantToMove]=useState({from:{i:null,j:null},to:{i:null,j:null}})
    const [info,setInfo]=useState(['hi'])
    const [validMoves,setValidMoves]=useState([])
    const [turn, setTurn]=useState('white')

    function makeAmove(){ 
        const {from, to} = wantToMove
        if(board[from.i][from.j].onMe.color==turn){
            if(board[from.i][from.j].onMe.showValidMoves(from, board).filter(move=> to.i===move.i && to.j===move.j).length>0){
    
                board[from.i][from.j].onMe.isFirstMove=false
                board[to.i][to.j].SetOnMe(board[from.i][from.j].onMe)
                board[from.i][from.j].SetOnMe(null)    
                info.unshift(board[to.i][to.j].onMe.name + ' ' + board[to.i][to.j].onMe.color  + ' from ' + board[from.i][from.j].name + ' to ' + board[to.i][to.j].name)
                setInfo(info)
        
                setBoard(board)
                setTurn(turn=='white'?'black':'white')
            }else{
                info.unshift('this is not a valid move')
                setInfo(info)
            }

        }
        setWantToMove({from:{i:null,j:null},to:{i:null,j:null}})
        setValidMoves([])
    }
    
    return ( 
        <MyContext.Provider value={{
            board,
            wantToMove ,setWantToMove,
            makeAmove,
            info,
            validMoves,setValidMoves,
            turn
            }}>
            {children}
        </MyContext.Provider>
     )

    
}
 
export default ContextProvider;
