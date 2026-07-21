import React from 'react';
import { useParams } from 'react-router-dom';

export function PatientProfilePage() {
  const { id } = useParams<{ id: string }>();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Patient Profile: {id}</h1>
    </div>
  );
}
