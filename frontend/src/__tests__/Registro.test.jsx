import '@testing-library/jest-dom';
import React from "react";
import { render, screen, fireEvent } from '@testing-library/react';
import Registro from '../components/Registro';

describe('Registro', () => {
  it('muestra errores de validación en campos vacíos', async () => {
    render(<Registro />);
    fireEvent.click(screen.getByText('Registrarse'));
    expect(await screen.findByText('El nombre es obligatorio')).toBeInTheDocument();
    expect(await screen.findByText('Email inválido')).toBeInTheDocument();
    expect(await screen.findByText('La contraseña debe tener al menos 6 caracteres')).toBeInTheDocument();
  });
});
