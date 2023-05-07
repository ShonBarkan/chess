import React, { useContext } from 'react';
import './Square.css'
import { MyContext } from '../../../../context/context';

function Square({square}) {
    const {wantToMove ,setWantToMove,makeAmove, board ,validMoves,setValidMoves,turn}= useContext(MyContext)
    
    let backColor= square.color
    if(validMoves.filter(move=> 8-parseInt(square.name[1])===move.i && square.name.charCodeAt(0)-97===move.j).length>0) backColor='green'

    const style={
            backgroundColor: backColor,
        }

    function updateWantToMove(){
        console.log(wantToMove);
        console.log(turn);
        console.log(square.onMe);
        document.getElementById('alrt').innerHTML=``
            if (wantToMove.from.i==null){
                if(square.onMe?.color==turn){
                    wantToMove.from.i=8-parseInt(square.name[1])
                    wantToMove.from.j=square.name.charCodeAt(0)-97
                    setWantToMove(wantToMove)
                    setValidMoves(square.onMe.showValidMoves(wantToMove.from,board))
                }else{
                    if(square.onMe!=null){
                        document.getElementById('alrt').innerHTML=`it's not your turn`
                    }else{
                        setWantToMove({from:{i:null,j:null},to:{i:null,j:null}})
                        setValidMoves([])
                    }
                }
            }else{
                wantToMove.to.i=8-parseInt(square.name[1])
                wantToMove.to.j=square.name.charCodeAt(0)-97
                setWantToMove(wantToMove)
                makeAmove()
            }
    }
    return (
        <div className='square' style={style} onClick={()=>updateWantToMove()}>
            <div className='pics'><img src={square.onMe? square.onMe.pic:''} alt="" /></div>

        </div>
    );
}

export default Square;