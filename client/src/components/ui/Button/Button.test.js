import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import Button from './Button';

describe('Button component', () => {
  test('renders Button component', async () => {
    render(<Button>A button</Button>);
    const button = await screen.findByText('A button');
    expect(button).toBeInTheDocument();
  });

  test('click changes value to true', async () => {
    let value = false;
    render(<Button onClick={() => value = true}>A button</Button>);
    const button = await screen.findByText('A button');
    userEvent.click(button);
    expect(value).toBe(true);
  });
});