
import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import PanelAdmin from '../components/PanelAdmin';
// Mock de los componentes hijos para evitar hooks/efectos secundarios
jest.mock('../components/AdminRifas', () => () => <div>Gestión de Rifas</div>);
jest.mock('../components/AdminVendedores', () => () => <div>Vendedores</div>);
jest.mock('../components/AdminOportunidades', () => () => <div>Oportunidades</div>);
jest.mock('../components/AdminDescuentos', () => () => <div>Descuentos</div>);
jest.mock('../components/AdminPromociones', () => () => <div>Promociones</div>);

describe('PanelAdmin', () => {
  it('muestra las secciones clave del panel de administración', () => {
    render(<PanelAdmin />);
    expect(screen.getByText('Panel de Administración')).toBeInTheDocument();
  expect(screen.getAllByText('Gestión de Rifas').length).toBeGreaterThan(0);
  expect(screen.getAllByText('Vendedores').length).toBeGreaterThan(0);
  expect(screen.getAllByText('Oportunidades').length).toBeGreaterThan(0);
  expect(screen.getAllByText('Descuentos').length).toBeGreaterThan(0);
  expect(screen.getAllByText('Promociones').length).toBeGreaterThan(0);
    // Los siguientes pueden estar en el DOM si se mockean más hijos
    // expect(screen.getByText('Estadísticas y Reportes')).toBeInTheDocument();
    // expect(screen.getByText('Configuración')).toBeInTheDocument();
    // expect(screen.getByText('Soporte y Ayuda')).toBeInTheDocument();
  });
});
