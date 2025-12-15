

import { Recorder } from './components/recorder/recorder';

import './App.css';
import { useTranscript } from './store/transcript';



function App() {
  const { transcript } = useTranscript();

  return (
      <div className="App">
        <header className="App-header">
          <h2>Speed to text</h2>
          <Recorder />
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
