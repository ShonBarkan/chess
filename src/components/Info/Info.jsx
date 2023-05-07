import React, { useContext } from 'react';
import './Info.css'
import { MyContext } from '../../context/context';
function Info(props) {
    const {info}= useContext(MyContext)
    return (
        <div>
            {info.map((move,i)=>(
                <div key={i}>{move}</div>
            ))}
        </div>
    );
}

export default Info;