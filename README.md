# Test Mic Project

This repository contains a full-stack application for testing microphone input and transcribing audio using OpenAI's Whisper API.

## Project Structure

- **frontend/**: React application for recording audio and interacting with the backend API.
- **whisper-api/**: Python Flask API that processes audio and returns transcriptions using Whisper.

---

## Getting Started

1. With VsCode, install extension `dev containers`.
2. In VsCode, `ctrl+shift+p` => `Dev Containers: Install devcontainer CLI`.
3. from your shell:

```bash
cd ${your_project}
devcontainer open .
```

---

## Frontend

- **Location**: `frontend/`
- **Tech Stack**: React, TypeScript
- **Features**:
  - Record audio from the user's microphone
  - Send audio to the backend for transcription
  - Display transcribed text

---

## Whisper API Backend

- **Location**: `whisper-api/`
- **Tech Stack**: Python, Flask, OpenAI Whisper
- **Features**:
  - Receives audio files via HTTP
  - Transcribes audio using Whisper
  - Returns transcription as JSON

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
