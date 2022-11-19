import { useState, useEffect, useRef } from 'react';
import DropdownContainer from './DropdownContainer';
import Button from '../Button';

const Dropdown = ({
  id,
  label,
  items,
  selected,
  click
}) => {
  const [open, setOpen] = useState(false);
  const itemsRef = useRef();

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

  return <DropdownContainer id={id} data-testid={`dropdown-${id}`} ariarole="button" open={open} onClick={() => setOpen(state => !state)}>
    <span>
      {label}: <span data-testid={`dropdown-current-${id}`} className="current">{selected.text}</span>
    </span>
    <div className="arrow"></div>
    <ul ref={itemsRef} data-testid={`dropdown-items-${id}`} className={`dropdown-items dropdown-items--${open ? 'open' : 'closed'}`}>
      {items.filter(item => selected.value !== item.value).map(item => <li key={item.value}>
        <Button variant="clean" onClick={() => click(item)} data-testid={`dropdown-item-${item.value}`}>{item.text}</Button>
      </li>)}
    </ul>
  </DropdownContainer>;
}

export default Dropdown;