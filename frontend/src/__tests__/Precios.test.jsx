import '@testing-library/jest-dom';
import React from "react";
import { render, screen } from '@testing-library/react';
import Precios from '../components/Precios';

describe('Precios', () => {
  it('muestra los planes y precios principales', () => {
    render(<Precios />);
    expect(screen.getByText('Planes y Precios')).toBeInTheDocument();
    expect(screen.getByText('Básico')).toBeInTheDocument();
    expect(screen.getByText('Premium')).toBeInTheDocument();
    expect(screen.getByText('Empresarial')).toBeInTheDocument();
  });
});
