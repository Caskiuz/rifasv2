import '@testing-library/jest-dom';
import React from "react";
import { render, screen } from '@testing-library/react';
import PreguntasFrecuentes from '../components/PreguntasFrecuentes';

describe('PreguntasFrecuentes', () => {
  it('muestra la sección de preguntas frecuentes', () => {
    render(<PreguntasFrecuentes />);
    expect(screen.getByText('Preguntas Frecuentes')).toBeInTheDocument();
  });
});
