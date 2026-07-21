import React from 'react';
import { useParams } from 'react-router-dom';

export function PredictionResultPage() {
  const { id } = useParams<{ id: string }>();
  
  return (
    <div>
      <h1>Prediction Result: {id}</h1>
    </div>
  );
}
