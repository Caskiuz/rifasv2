import '@testing-library/jest-dom';
import React from "react";
import { render, screen } from '@testing-library/react';
import PoliticaCookies from '../components/PoliticaCookies';

describe('PoliticaCookies', () => {
  it('muestra la política de cookies', () => {
    render(<PoliticaCookies />);
    expect(screen.getByText('Política de Cookies')).toBeInTheDocument();
  });
});
