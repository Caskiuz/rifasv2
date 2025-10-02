import '@testing-library/jest-dom';
import React from "react";
import { render, screen, fireEvent } from '@testing-library/react';
import Login from '../components/Login';

describe('Login', () => {
  it('muestra errores de validación en campos vacíos', async () => {
    render(<Login />);
    fireEvent.click(screen.getByText('Entrar'));
    expect(await screen.findByText('Email inválido')).toBeInTheDocument();
    expect(await screen.findByText('La contraseña es obligatoria')).toBeInTheDocument();
  });
});
