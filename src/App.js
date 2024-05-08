import React, {useState} from 'react';
import './App.css';

function App() {
    const [time, setTime] = useState(new Date());
    const [clocks, setClocks] = useState([]);
    const [counter, setCounter] = useState(1);

    const createClock = () => {
        setClocks(prevClocks => [
            ...prevClocks,
            {id: counter, time: new Date()}
        ]);
        setCounter(prevCounter => prevCounter + 1);
    };

    const refreshTime = () => {
        setTime(new Date());
    };

    const deleteClock = clockId => {
        setClocks(prevClocks => prevClocks.filter(clock => clock.id !== clockId));
    };

    return (
        <div className="App">
            <h1>Dai Weijian</h1>
            <div className="clock">
                <p className="time">{time.toLocaleTimeString()}</p>
                <button className="button" onClick={refreshTime}>Refresh Time</button>
                <button className="button" onClick={createClock}>Create Clock</button>
            </div>
            {clocks.map((clock, index) => (
                <div key={clock.id} className="clock">
                    <p className="time" data-testid={"clock-" + index}>{clock.time.toLocaleTimeString()}</p>
                    <button className="button" onClick={() => deleteClock(clock.id)}>Delete Clock</button>
                </div>
            ))}
        </div>
    );
}

export default App;