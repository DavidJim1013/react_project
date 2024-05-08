import React, {useState} from 'react';
import './App.css';

function App() {
    const [time, setTime] = useState(new Date());

    const refreshTime = () => {
        setTime(new Date());
    };

    const createClock = () => {
        // TODO: Implement clock creation logic
    };

    return (
        <div className="App">
            <h1>Dai Weijian</h1>
            <div className="clock">
                <p className="time">{time.toLocaleTimeString()}</p>
                <button className="refreshBtn" onClick={refreshTime}>Refresh Time</button>
            </div>
            <button onClick={createClock}>Create Clock</button>
        </div>
    );
}

export default App;