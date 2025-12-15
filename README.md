# Test Mic Project

This repository contains a full-stack application for testing microphone input and transcribing audio using OpenAI's Whisper API.

## Project Structure

- **frontend/**: React application for recording audio and interacting with the backend API.
- **whisper-api/**: Python Flask API that processes audio and returns transcriptions using Whisper.

---

## Frontend

- **Location**: `frontend/`
- **Tech Stack**: React, TypeScript
- **Features**:
  - Record audio from the user's microphone
  - Send audio to the backend for transcription
  - Display transcribed text

### Getting Started (Frontend)

1. Install dependencies:
   ```bash
   cd frontend
   npm install
   ```
2. Start the development server:
   ```bash
   npm start
   ```
3. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Whisper API Backend

- **Location**: `whisper-api/`
- **Tech Stack**: Python, Flask, OpenAI Whisper
- **Features**:
  - Receives audio files via HTTP
  - Transcribes audio using Whisper
  - Returns transcription as JSON

### Getting Started (Backend)

1. Install dependencies:
   ```bash
   cd whisper-api
   pip install -r requirements.txt
   ```
2. Run the API server:
   ```bash
   python app.py
   ```
3. The API will be available at [http://localhost:5000](http://localhost:5000)

---

## Usage

1. Start the backend API.
2. Start the frontend React app.
3. Use the web interface to record audio and view transcriptions.

---

## Docker

A `Dockerfile` is provided in the `whisper-api/` directory for containerized deployment of the backend.

---

## License

This project is licensed under the MIT License.
