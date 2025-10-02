import '@testing-library/jest-dom';
import React from "react";
import { render, screen } from '@testing-library/react';
import PanelVendedor from '../components/PanelVendedor';

describe('PanelVendedor', () => {
  it('muestra las secciones clave del panel de vendedor', () => {
    render(<PanelVendedor />);
    expect(screen.getByText('Panel de Vendedor')).toBeInTheDocument();
    // Hay dos elementos con el texto 'Mis Ventas', así que usamos getAllByText
    const ventas = screen.getAllByText('Mis Ventas');
    expect(ventas.length).toBeGreaterThanOrEqual(2);
    expect(screen.getAllByText('Mis Clientes').length).toBeGreaterThanOrEqual(2);
    expect(screen.getByText('Soporte')).toBeInTheDocument();
  });
});
