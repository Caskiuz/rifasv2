import '@testing-library/jest-dom';
import React from "react";
import { render, screen } from '@testing-library/react';
import LandingPage from '../components/LandingPage';

describe('LandingPage', () => {
  it('muestra la landing page personalizada', () => {
    render(<LandingPage />);
    expect(screen.getByText('Bienvenido a tu Plataforma de Rifas')).toBeInTheDocument();
    expect(screen.getByText('Personaliza tu experiencia')).toBeInTheDocument();
    expect(screen.getByText('Crear mi cuenta')).toBeInTheDocument();
  });
});
