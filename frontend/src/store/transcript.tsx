import React, { createContext, useContext, useState } from 'react';

export type TranscriptContextType = {
  transcript: string;
  setTranscript: (t: string) => void;
};

const TranscriptContext = createContext<TranscriptContextType | undefined>(undefined);

export function useTranscript() {
  const ctx = useContext(TranscriptContext);

  if (!ctx) {
    throw new Error('useTranscript must be used within TranscriptProvider');
  }
  return ctx;
}

export function TranscriptProvider({ children }: { children: React.ReactNode }) {
  const [transcript, setTranscript] = useState('');
  
  return (
    <TranscriptContext.Provider value={{ transcript, setTranscript }}>
      {children}
    </TranscriptContext.Provider>
  );
}
