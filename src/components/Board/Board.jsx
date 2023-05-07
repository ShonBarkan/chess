import React, { useContext, useState } from 'react';
import { MyContext } from '../../context/context';
import './Board.css'
import Row from './row/Row'
import Info from '../Info/Info';
import './Board.css'

function Board() {

    const {board} = useContext(MyContext)
    
    return (
        <div className='board'>
            <div id='alrt'></div>
            {board.map((row,i)=>(
                <div className='row'>
                    <Row key={i} row={row}></Row>
                </div>
            ))}
            <Info></Info>
        </div>
    );
}

export default Board;