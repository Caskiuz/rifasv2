import '@testing-library/jest-dom';
import React from "react";
import { render, screen } from '@testing-library/react';
import PanelUsuario from '../components/PanelUsuario';

describe('PanelUsuario', () => {
  it('muestra las secciones clave del panel de usuario', () => {
    global.fetch = jest.fn(() => Promise.resolve({ json: () => Promise.resolve([]) }));
    render(<PanelUsuario />);
    expect(screen.getByText('Panel de Usuario')).toBeInTheDocument();
    expect(screen.getByText('Mis Rifas')).toBeInTheDocument();
    expect(screen.getByText('Mi Perfil')).toBeInTheDocument();
    expect(screen.getByText('Historial de Compras')).toBeInTheDocument();
    expect(screen.getByText('Soporte')).toBeInTheDocument();
    global.fetch.mockRestore && global.fetch.mockRestore();
  });
});
