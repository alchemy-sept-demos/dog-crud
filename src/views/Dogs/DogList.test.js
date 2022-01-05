import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import DogList from './DogList';

it('should render a list of dogs', async () => {
  // render the component
  const { container } = render(
    // MemoryRouter is needed because <DogList> uses the <Link> component

    <MemoryRouter>
      <DogList />
    </MemoryRouter>
  );
  // wait for things to load
  await screen.findByText('Meet Barton');
  // take a snapshot
  expect(container).toMatchSnapshot();
});
