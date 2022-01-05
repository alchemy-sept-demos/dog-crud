import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom/cjs/react-router-dom.min';
import App from './App';

test('renders home page link', async () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  const linkElement = screen.getByText(/Home/i);
  await screen.findByText('Meet Barton');
  expect(linkElement).toBeInTheDocument();
});
