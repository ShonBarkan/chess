import React from 'react';
import './Row.css'
import Square from '../row/Square/Square'

function Row({row}) {
    return (
        <div className='row'>
            {row.map((square,i)=>(
                <Square key={i} square={square}></Square>
            ))}
        </div>
    );
}

export default Row;