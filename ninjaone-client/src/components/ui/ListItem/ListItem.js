import ListItemContainer from './ListItemContainer';
import Button from '../Button';

const ListItem = ({ id, label, actions = [], children }) => {
  return <ListItemContainer data-testid={`list-item-${id ?? 'default'}`} aria-label={label}>
    <div className="list-item__content">{children}</div>
    <div className="list-item__actions">
      {actions.map(({ action, icon, ...props}) => <Button key={action} {...props}>{icon}</Button>)}
    </div>
  </ListItemContainer>;
}

export default ListItem;