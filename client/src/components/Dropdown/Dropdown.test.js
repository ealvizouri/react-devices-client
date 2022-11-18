import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Dropdown from './Dropdown';
import { deviceTypes } from '../../api/Device';

describe('Dropdown component', () => {
  test('renders Dropdown component', async () => {
    let selected = deviceTypes[0];
    render(<Dropdown
      id="dropdown-test"
      label="Device type"
      selected={selected}
      items={deviceTypes}
      click={(item) => selected = item}
    />);
    const button = await screen.findByText('All');
    expect(button).toBeInTheDocument();
  });

  test('it selects an item', async () => {
    let selected = deviceTypes[0];
    const lastDeviceType = deviceTypes[deviceTypes.length - 1].text;
    const onClick = (item) => selected = item;
    const { rerender } = render(<Dropdown
      id="dropdown-test"
      label="Device type"
      selected={selected}
      items={deviceTypes}
      click={onClick}
    />);
    const button = await screen.findByText('All');
    userEvent.click(button);

    const dropdownItems = await screen.findByTestId('dropdown-items');
    expect(dropdownItems).toHaveClass('dropdown-items--open');

    const dropdownItem = await screen.findByText(lastDeviceType);
    expect(dropdownItem).toBeInTheDocument();

    userEvent.click(dropdownItem);

    expect(selected.text).toBe(lastDeviceType);

    rerender(<Dropdown
      id="dropdown-test"
      label="Device type"
      selected={selected}
      items={deviceTypes}
      click={onClick}
    />);

    const dropdownCurrent = await screen.findByTestId('dropdown-current');
    expect(dropdownCurrent).toBeInTheDocument();
    expect(dropdownCurrent.textContent).toContain(lastDeviceType);
  });
});