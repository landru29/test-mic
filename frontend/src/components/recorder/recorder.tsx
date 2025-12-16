

import { useState, useRef } from 'react';
import './recorder.css';


interface Properties {
  url: string;
  onText: (text: string | undefined) => void;
  onError?: (error: string) => void;
}

export function Recorder(props: Properties) {
  const [recording, setRecording] = useState(false);
  const [loading, setLoading] = useState(false);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunks = useRef<Blob[]>([]);

  // Start recording audio and reset transcript/loading
  const startRecording = async () => {
    props.onText(undefined);
    setLoading(false);

    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const mediaRecorder = new MediaRecorder(stream);
    
    mediaRecorderRef.current = mediaRecorder;
    audioChunks.current = [];

    mediaRecorder.ondataavailable = (event) => {
      if (event.data.size > 0) {
        audioChunks.current.push(event.data);
      }
    };

    mediaRecorder.onstop = async () => {
      setLoading(true);

      const audioBlob = new Blob(audioChunks.current, { type: 'audio/wav' });
      const formData = new FormData();

      formData.append('file', audioBlob, 'audio.wav');

      try {
        const response = await fetch(props.url, {
          method: 'POST',
          body: formData,
        });

        const data = await response.json();

        if (data.text) {
          props.onText(data.text);
        } else {
          props.onError?.('I did not understand. Please repeat.');
        }
      } catch (err) {
        props.onError?.('Error during transcription.');
      }

      setLoading(false);
    };

    mediaRecorder.start();
    setRecording(true);
  };

  // Stop recording audio
  const stopRecording = () => {
    mediaRecorderRef.current?.stop();
    setRecording(false);
  };

  return (
    <div className='recorder'>
      <button
        onClick={recording ? stopRecording : startRecording}
        className={`recorder-mic-btn${recording ? ' recording' : ''}`}
        title={recording ? 'Stop recording' : 'Start recording'}
        aria-label={recording ? 'Stop recording' : 'Start recording'}
        disabled={loading}
      >
        <span role="img" aria-label="microphone">🎤</span>
      </button>
      {loading && <div className="recorder-loader" aria-label="Loading" />}
    </div>
  );
}