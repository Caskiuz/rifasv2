import '@testing-library/jest-dom';
import React from "react";
import { render, screen, fireEvent, act } from '@testing-library/react';
import VerificadorTicket from '../components/VerificadorTicket';

describe('VerificadorTicket', () => {
  it('muestra error si el código está vacío', async () => {
    render(<VerificadorTicket />);
    fireEvent.change(screen.getByPlaceholderText('Código de boleto'), { target: { value: '' } });
    fireEvent.click(screen.getByText('Verificar'));
    expect(await screen.findByText('Boleto no encontrado o código inválido')).toBeInTheDocument();
  });
});
