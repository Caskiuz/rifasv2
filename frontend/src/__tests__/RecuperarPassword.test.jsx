import '@testing-library/jest-dom';
import React from "react";
import { render, screen, fireEvent } from '@testing-library/react';
import RecuperarPassword from '../components/RecuperarPassword';

describe('RecuperarPassword', () => {
  it('muestra error si el email es inválido', async () => {
    render(<RecuperarPassword />);
    fireEvent.change(screen.getByPlaceholderText('Email'), { target: { value: 'noemail' } });
    fireEvent.click(screen.getByText('Enviar'));
    expect(await screen.findByText('Email inválido')).toBeInTheDocument();
  });
});
