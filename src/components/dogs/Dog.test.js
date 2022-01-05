import { render, screen } from '@testing-library/react';
import Dog from './Dog';

test('<Dog> should show the bio if showDetail=true', () => {
  // Render the component
  const { container } = render(
    <Dog
      name="Barton"
      image="https://placedog.net/500?id=6"
      age={1}
      breed="Weimaraner"
      bio="Cute dog"
      showDetail={true}
    />
  );
  // Wait for stuff to load
  const headerElement = screen.getByText('Meet Barton');
  expect(headerElement).toBeInTheDocument();

  const bioElement = screen.getByText('Cute dog');
  expect(bioElement).toBeInTheDocument();

  // Take a picture
  expect(container).toMatchSnapshot();
});
