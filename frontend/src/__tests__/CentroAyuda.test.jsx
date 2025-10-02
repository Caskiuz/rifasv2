import '@testing-library/jest-dom';
import React from "react";
import { render, screen } from '@testing-library/react';
import CentroAyuda from '../components/CentroAyuda';

describe('CentroAyuda', () => {
  it('muestra el centro de ayuda y preguntas frecuentes', () => {
    render(<CentroAyuda />);
    expect(screen.getByText('Centro de Ayuda')).toBeInTheDocument();
    expect(screen.getByText('¿Cómo creo una rifa?')).toBeInTheDocument();
    expect(screen.getByText('¿Cómo configuro los métodos de pago?')).toBeInTheDocument();
    expect(screen.getByText('¿Cómo contacto al soporte técnico?')).toBeInTheDocument();
  });
});
