import React, { useState } from 'react';

function Cursor() {

    const [xCoord, showX] = useState(0);
    const [yCoord, showY] = useState(0);
    const [message, showMessage] = useState('');
    const [coordinates, hideCoordinates] = useState(true);

    const showCoordinatesOnConsole = (event) => { // Функция для выведения координат по осям и их скрытия при отведении курсора
        showX(event.nativeEvent.offsetX); // Координаты по оси X
        showY(event.nativeEvent.offsetY); // Координаты по оси Y
        console.log(event.nativeEvent.offsetX + '/' + event.nativeEvent.offsetY);
        hideCoordinates(true) // useState для выведения координат
    }

    function outCursor() {
        showMessage('Вы покинули территорию'); // useState для выведения текста, когда мы вне div'a
        hideCoordinates(false) // useState для cкрытия координат
        console.log('Вы покинули территорию');
    }


    return (
        <>
            <div className='cursor-area'
                onMouseMove={showCoordinatesOnConsole}
                onMouseLeave={outCursor}
                onMouseOver={() => showMessage('')}
            >
            </div>
            {coordinates && <p>{`${xCoord}px / ${yCoord}px`}</p>} 
            <p>{message}</p>
        </>
    )
}

export default Cursor