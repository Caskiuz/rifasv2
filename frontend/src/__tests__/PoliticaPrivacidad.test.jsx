import '@testing-library/jest-dom';
import React from "react";
import { render, screen } from '@testing-library/react';
import PoliticaPrivacidad from '../components/PoliticaPrivacidad';

describe('PoliticaPrivacidad', () => {
  it('muestra la política de privacidad', () => {
    render(<PoliticaPrivacidad />);
    expect(screen.getByText('Política de Privacidad')).toBeInTheDocument();
  });
});
