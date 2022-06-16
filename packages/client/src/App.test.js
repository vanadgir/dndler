import { render, screen } from '@testing-library/react';
import App from './App';

test('renders DNDLER link', () => {
  render(<App />);
  expect(screen.getAllByText(`THE DNDLER`)[0]).toBeInTheDocument()
});
