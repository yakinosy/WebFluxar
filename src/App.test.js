// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Web3Fluxar title', () => {
    render(<App />);
    const titleElement = screen.getByText(/Web3Fluxar/i);
    expect(titleElement).toBeInTheDocument();
});
