import React, { useState } from 'react';

function Align() {

    const [styleNew, changeStyle] = useState('left');
    
    function newStyle() {
            switch (styleNew) { // конструкция для определения styleNew и замены его на другое значение
                case 'left':
                    changeStyle('center');
                break;
                case 'center':
                    changeStyle('right');
                break;
                case 'right':
                    changeStyle('left');
                break;
                default:
                    changeStyle('left');
            }
    }

    return(
        <div className='align'>
          <h2 style={{textAlign: styleNew}}>Align me</h2>
          <button onClick={newStyle}>Toggle</button>
        </div>
    )
}

export default Align