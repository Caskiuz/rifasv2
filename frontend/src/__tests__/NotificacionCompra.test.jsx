import '@testing-library/jest-dom';
import React from "react";
import { render, screen } from '@testing-library/react';
import NotificacionCompra from '../components/NotificacionCompra';

describe('NotificacionCompra', () => {
  it('muestra los detalles de la compra exitosa', () => {
    render(<NotificacionCompra rifa={{ nombre: 'Rifa Test' }} boleto={{ numero: 123 }} onClose={() => {}} />);
    expect(screen.getByText('¡Compra exitosa!')).toBeInTheDocument();
    expect(screen.getByText('Rifa Test')).toBeInTheDocument();
    expect(screen.getByText('Número de boleto:')).toBeInTheDocument();
    expect(screen.getByText('123')).toBeInTheDocument();
  });
});
