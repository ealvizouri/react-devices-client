import { render } from '@testing-library/react';
import Spinner from './Spinner';

test('renders Spinner component',async () => {
  const { container } = render(<Spinner />);
  // Can't use screen.getByRole('img') because it has aria-hidden true, and is excluded for the query. https://testing-library.com/docs/queries/byrole#hidden
  // eslint-disable-next-line testing-library/no-container
  const svg = container.querySelector('svg');
  expect(svg).toBeInTheDocument();
  expect(svg.dataset.icon).toBe('spinner');
});
