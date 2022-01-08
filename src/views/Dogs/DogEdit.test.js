import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import DogEdit from './DogEdit';

it("should render the dog's information in a form", async () => {
  // render
  const { container } = render(
    // MemoryRouter is needed because <DogEdit> uses the <Link> component
    <MemoryRouter initialEntries={['/dogs/4/edit']}>
      <Route path="/dogs/:id/edit" component={DogEdit} />
    </MemoryRouter>
  );
  // wait for stuff to load
  await screen.findByDisplayValue('Franny');
  // take a snapshot
  expect(container).toMatchSnapshot();
});
