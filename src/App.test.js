import { render, screen } from '@testing-library/react';
import App from './App';

test('renders App component with welcome text', () => {
  render(<App />);
  const element = screen.getByText(/Welcome to Nasa Photo of the Day!/i);
  expect(element).toBeInTheDocument();
});
