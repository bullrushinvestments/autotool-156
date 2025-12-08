import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // For additional matchers
import DesignArchitectureComponent from './DesignArchitectureComponent';

jest.mock('./externalDependency', () => ({
  useExternalService: jest.fn(),
}));

describe('Design Architecture Component Tests', () => {
  const mockUseExternalService = (value) => ({ data: value, error: null });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders Design Architecture component with loading state', async () => {
    useExternalService.mockReturnValueOnce({ data: null, error: null });
    render(<DesignArchitectureComponent />);
    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
  });

  test('displays error message when external service fails', async () => {
    const errorMessage = 'Failed to fetch data';
    useExternalService.mockReturnValueOnce({ data: null, error: new Error(errorMessage) });
    render(<DesignArchitectureComponent />);
    await waitFor(() => expect(screen.getByText(/Error:/i)).toBeInTheDocument());
  });

  test('renders design architecture when data is fetched successfully', async () => {
    const mockData = { name: 'Sample Design' };
    useExternalService.mockReturnValueOnce(mockUseExternalService(mockData));
    render(<DesignArchitectureComponent />);
    await waitFor(() => expect(screen.getByText(/Sample Design/i)).toBeInTheDocument());
  });

  test('handles user interaction with design elements', async () => {
    const mockData = { name: 'Sample Design' };
    useExternalService.mockReturnValueOnce(mockUseExternalService(mockData));
    render(<DesignArchitectureComponent />);
    await waitFor(() => expect(screen.getByText(/Sample Design/i)).toBeInTheDocument());
    fireEvent.click(screen.getByRole('button', { name: /Edit design/i }));
    expect(useExternalService).toHaveBeenCalledWith({ action: 'edit' });
  });

  test('ensures accessibility features are properly implemented', async () => {
    const mockData = { name: 'Sample Design' };
    useExternalService.mockReturnValueOnce(mockUseExternalService(mockData));
    render(<DesignArchitectureComponent />);
    await waitFor(() => expect(screen.getByText(/Sample Design/i)).toBeInTheDocument());
    const button = screen.getByRole('button', { name: /Edit design/i });
    expect(button).toHaveAttribute('aria-label');
  });

  test('handles edge cases such as empty data response', async () => {
    useExternalService.mockReturnValueOnce({ data: [], error: null });
    render(<DesignArchitectureComponent />);
    await waitFor(() => expect(screen.getByText(/No designs available/i)).toBeInTheDocument());
  });
});

import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // For additional matchers
import DesignArchitectureComponent from './DesignArchitectureComponent';

jest.mock('./externalDependency', () => ({
  useExternalService: jest.fn(),
}));

describe('Design Architecture Component Tests', () => {
  const mockUseExternalService = (value) => ({ data: value, error: null });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders Design Architecture component with loading state', async () => {
    useExternalService.mockReturnValueOnce({ data: null, error: null });
    render(<DesignArchitectureComponent />);
    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
  });

  test('displays error message when external service fails', async () => {
    const errorMessage = 'Failed to fetch data';
    useExternalService.mockReturnValueOnce({ data: null, error: new Error(errorMessage) });
    render(<DesignArchitectureComponent />);
    await waitFor(() => expect(screen.getByText(/Error:/i)).toBeInTheDocument());
  });

  test('renders design architecture when data is fetched successfully', async () => {
    const mockData = { name: 'Sample Design' };
    useExternalService.mockReturnValueOnce(mockUseExternalService(mockData));
    render(<DesignArchitectureComponent />);
    await waitFor(() => expect(screen.getByText(/Sample Design/i)).toBeInTheDocument());
  });

  test('handles user interaction with design elements', async () => {
    const mockData = { name: 'Sample Design' };
    useExternalService.mockReturnValueOnce(mockUseExternalService(mockData));
    render(<DesignArchitectureComponent />);
    await waitFor(() => expect(screen.getByText(/Sample Design/i)).toBeInTheDocument());
    fireEvent.click(screen.getByRole('button', { name: /Edit design/i }));
    expect(useExternalService).toHaveBeenCalledWith({ action: 'edit' });
  });

  test('ensures accessibility features are properly implemented', async () => {
    const mockData = { name: 'Sample Design' };
    useExternalService.mockReturnValueOnce(mockUseExternalService(mockData));
    render(<DesignArchitectureComponent />);
    await waitFor(() => expect(screen.getByText(/Sample Design/i)).toBeInTheDocument());
    const button = screen.getByRole('button', { name: /Edit design/i });
    expect(button).toHaveAttribute('aria-label');
  });

  test('handles edge cases such as empty data response', async () => {
    useExternalService.mockReturnValueOnce({ data: [], error: null });
    render(<DesignArchitectureComponent />);
    await waitFor(() => expect(screen.getByText(/No designs available/i)).toBeInTheDocument());
  });
});