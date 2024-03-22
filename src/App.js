import React, { useState } from 'react';

function App(){
    const [input, setInput] = useState('');
    const [displayInput, setInputDisplay] = useState('Hello World');

    const handleInput = (event) => {
        setInput(event.target.value);
    };

    const handleDisplayInput = () => {
        setInputDisplay(input);
    };

    return(
        <div>
            <label htmlFor="inputInput">Message to Display:</label>
            <input
                type="text"
                placeholder='Hello World'
                id="inputInput"
                value={input}
                onChange={handleInput}
            />
            <button onClick={handleDisplayInput}>Display Message</button>
            <h2>{displayInput}</h2>
        </div>
    );
}
export default App;
