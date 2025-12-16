

import { Recorder } from './components/recorder/recorder';
import { useState } from 'react';
import './App.css';



function App() {
  const [transcript, setTranscript] = useState<string | undefined>(undefined);

  return (
      <div className="App">
        <header className="App-header">
          <h2>Speed to text</h2>
          <Recorder url="http://localhost:8000/transcribe" onText={setTranscript} onError={setTranscript}/>
          <div className="transcript-box">
            {transcript ? (
              <pre>{transcript}</pre>
            ) : (
              <p>Press the button to start recording.</p>
            )}
          </div>
        </header>
      </div>
  );
}

export default App;
