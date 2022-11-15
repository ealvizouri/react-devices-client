import { useState } from 'react';
import "./Dropdown.scss";
import Button from '../Button';

const Dropdown = ({
  label,
  items,
  selected,
  click
}) => {
  const [open, setOpen] = useState(false);

  return <div ariarole="button" className={`dropdown dropdown--${open ? 'open' : 'closed'}`} onClick={() => setOpen(state => !state)}>
    <span>{label}: {selected.text}</span>
    <div className="arrow"></div>
    <ul>
      {items.filter(item => selected.value !== item.value).map(item => <li key={item.value}>
        <Button onClick={() => click(item)}>{item.text}</Button>
      </li>)}
    </ul>
  </div>;
}

export default Dropdown;