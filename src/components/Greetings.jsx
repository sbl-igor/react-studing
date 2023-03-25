import React, { useState } from 'react';

function Greetings({ userName }) {

    const [greeting, changeGreeting] = useState('Пока');

    function changeGreetingUseState() {
        if (greeting === 'Привет') {
            changeGreeting('Пока')
        } else {
            changeGreeting('Привет')
        }
    }

    return(
        <div className='greeting'>
            <p>{`${greeting}, ${userName}`}</p>
            <button onClick={changeGreetingUseState}>Toggle</button>
        </div>
    )
}

export default Greetings