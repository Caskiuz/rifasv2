import '@testing-library/jest-dom';
import React from "react";
import { render, screen } from '@testing-library/react';
import Newsletter from '../components/Newsletter';

describe('Newsletter', () => {
  it('muestra el formulario de suscripción', () => {
    render(<Newsletter />);
    expect(screen.getByText('Suscríbete a nuestras promociones')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Tu correo electrónico')).toBeInTheDocument();
    expect(screen.getByText('Suscribirse')).toBeInTheDocument();
  });
});
