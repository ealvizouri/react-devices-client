import { useState, useEffect, useCallback, useRef } from 'react';
import PropTypes from 'prop-types';
import cloneDeep from 'lodash.clonedeep';
import DropdownContainer from './DropdownContainer';
import Button from '../Button';

const Dropdown = ({
  id,
  label,
  items,
  selected,
  click,
}) => {
  const [open, setOpen] = useState(false);
  const itemsRef = useRef();
  const isMultiselect = Array.isArray(selected);

  useEffect(() => {
    const findClosest = (e) => {
      const hasClosest = e.target.closest(`#${id}`) || e.target.closest('ul.dropdown-items');
      const isOpen = itemsRef.current.classList.contains('dropdown-items--open');
      if (!hasClosest && isOpen) {
        setOpen(false);
      }
    }
    document.addEventListener('click', findClosest);
    return () => {
      document.removeEventListener('click', findClosest);
    }
  }, [id, itemsRef]);

  const onClickMultiselect = useCallback((action, item) => {
    let clonedItems = cloneDeep(selected);
    if (item.isLabel) {
      clonedItems = [item];
    }
    else if (action === 'add') {
      const i = clonedItems.findIndex(obj => obj.isLabel);
      if (i >= 0) {
        clonedItems.splice(i, 1);
      }
      clonedItems.push(item);
    }
    else if (action === 'remove') {
      if (clonedItems.length === 1) {
        clonedItems = items.filter(item => item.isLabel);
      } else {
        const i = clonedItems.findIndex(obj => obj.value === item.value);
        if (i >= 0) {
          clonedItems.splice(i, 1);
        }
      }
    }
    if (clonedItems.length === items.length - 1) {
      clonedItems = items.filter(item => item.isLabel);
    }
    click(clonedItems);
  }, [click, items, selected]);

  const onClick = useCallback((item) => {
    click(item);
  }, [click]);

  return (
    <DropdownContainer id={id} data-testid={`dropdown-${id}`} aria-roledescription="dropdown" open={open} onClick={() => setOpen(state => !state)}>
      <span>
        {label}: <span data-testid={`dropdown-current-${id}`} aria-label="dropdown" className="current">{
          isMultiselect ? selected.map(({ text }) => text).join(', ') : selected.text
        }</span>
      </span>
      <div className="arrow"></div>
      <ul ref={itemsRef} data-testid={`dropdown-items-${id}`} className={`dropdown-items dropdown-items--${open ? 'open' : 'closed'}`}>
        {items.map(item => {
          if (isMultiselect) {
            const isActive = selected.some(selectedItem => selectedItem.value === item.value);
            const action = isActive ? 'remove' : 'add';
            return (
              <li key={item.value}>
                <Button variant={isActive ? 'info' : 'clean'} onClick={() => onClickMultiselect(action, item)} data-testid={`dropdown-item-${item.value}`}>{item.text}</Button>
              </li>
            );
          } else {
            const isActive = selected.value === item.value;
            return (
              <li key={item.value}>
                <Button variant={isActive ? 'info' : 'clean'} onClick={() => onClick(item)} data-testid={`dropdown-item-${item.value}`}>{item.text}</Button>
              </li>
            );
          } 
        })}
      </ul>
    </DropdownContainer>
  );
}

const dropdownItemShape = PropTypes.shape({
  text: PropTypes.string,
  value: PropTypes.string
});

Dropdown.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  selected: PropTypes.oneOfType([
    PropTypes.arrayOf(dropdownItemShape),
    dropdownItemShape
  ]),
  items: PropTypes.arrayOf(dropdownItemShape).isRequired,
  click: PropTypes.func.isRequired
};

export default Dropdown;