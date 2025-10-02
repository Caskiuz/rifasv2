import '@testing-library/jest-dom';
import React from "react";
import { render, screen } from '@testing-library/react';
import ClientesDestacados from '../components/ClientesDestacados';

describe('ClientesDestacados', () => {
  it('muestra los testimonios de clientes destacados', () => {
    render(<ClientesDestacados />);
    expect(screen.getByText('Clientes Destacados')).toBeInTheDocument();
    expect(screen.getByText('Lyono - México')).toBeInTheDocument();
    expect(screen.getByText('Srts Guero Monterrey')).toBeInTheDocument();
    expect(screen.getByText('Daniel Lyono Castellanos')).toBeInTheDocument();
  });
});
