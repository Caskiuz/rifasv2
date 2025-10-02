import '@testing-library/jest-dom';
import React from "react";
import { render, screen } from '@testing-library/react';
import TerminosCondiciones from '../components/TerminosCondiciones';

describe('TerminosCondiciones', () => {
  it('muestra los términos y condiciones', () => {
    render(<TerminosCondiciones />);
    expect(screen.getByText('Términos y Condiciones')).toBeInTheDocument();
  });
});
