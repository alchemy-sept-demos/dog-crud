import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import DogDetail from './DogDetail';

it('should render an individual dog', async () => {
  // render the thing
  // OPTION 1 -- when using react router hooks (useParams)
  // const { container } = render(
  //   // MemoryRouter is needed because <Teams> uses the <Link> component
  //   <MemoryRouter initialEntries={['/dogs/4']}>
  //     <Route path="/dogs/:id" component={DogDetail} />
  //   </MemoryRouter>
  // );

  // OPTION 2 -- when using props.match.params.id
  const { container } = render(<DogDetail match={{ params: { id: 4 } }} />);
  // wait for stuff to load
  await screen.findByText('Meet Franny');

  // take a snapshot
  expect(container).toMatchSnapshot();
});
