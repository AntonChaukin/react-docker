import { render, screen } from '@testing-library/react';
import BrowserRouter from './App';

test('renders learn react link', () => {
  render(<BrowserRouter />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
