import { useState, useEffect, useRef } from 'react';
import DropdownContainer from './DropdownContainer';
import Button from '../Button';

const Dropdown = ({
  label,
  items,
  selected,
  click
}) => {
  const [open, setOpen] = useState(false);
  const itemsRef = useRef();

  useEffect(() => {
    const findClosest = (e) => {
      const hasClosest = e.target.closest('div.dropdown') || e.target.closest('ul.dropdown-items');
      const isOpen = itemsRef.current.classList.contains('dropdown-items--open');
      if (!hasClosest && isOpen) {
        setOpen(false);
      }
    }
    
    document.addEventListener('click', findClosest);
    return () => {
      document.removeEventListener('click', findClosest);
    }
  }, [itemsRef, open]);

  return <DropdownContainer className="dropdown" ariarole="button" open={open} onClick={() => setOpen(state => !state)}>
    <span>{label}: {selected.text}</span>
    <div className="arrow"></div>
    <ul ref={itemsRef} className={`dropdown-items dropdown-items--${open ? 'open' : 'closed'}`}>
      {items.filter(item => selected.value !== item.value).map(item => <li key={item.value}>
        <Button variant="clean" onClick={() => click(item)}>{item.text}</Button>
      </li>)}
    </ul>
  </DropdownContainer>;
}

export default Dropdown;