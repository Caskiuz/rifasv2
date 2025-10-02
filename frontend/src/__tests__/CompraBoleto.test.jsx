import '@testing-library/jest-dom';
import React from "react";
import { render, screen, fireEvent } from '@testing-library/react';
import CompraBoleto from '../components/CompraBoleto';

describe('CompraBoleto', () => {
  it('muestra error si el número no es numérico', async () => {
    render(<CompraBoleto rifa={{ _id: '1', nombre: 'Rifa Test' }} />);
    fireEvent.change(screen.getByPlaceholderText('Número de boleto'), { target: { value: 'abc' } });
    fireEvent.click(screen.getByText('Comprar'));
    expect(await screen.findByText('El número de boleto debe ser numérico')).toBeInTheDocument();
  });
});
