import '@testing-library/jest-dom';
import React from "react";
import { render, screen } from '@testing-library/react';
import ReportarProblema from '../components/ReportarProblema';

describe('ReportarProblema', () => {
  it('muestra el formulario de reporte de problemas', () => {
    render(<ReportarProblema />);
    expect(screen.getByText('Reportar un Problema')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Nombre')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Correo electrónico')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Descripción del problema')).toBeInTheDocument();
    expect(screen.getByText('Enviar reporte')).toBeInTheDocument();
  });
});
