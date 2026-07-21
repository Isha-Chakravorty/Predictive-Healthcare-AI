import React from 'react';
import { useParams } from 'react-router-dom';

export function NewPredictionPage() {
  const { type } = useParams<{ type: string }>();
  
  return (
    <div>
      <h1>New Prediction: {type}</h1>
    </div>
  );
}
