import ListItemContainer from './ListItemContainer';
import Button from '../Button';

const ListItem = ({ id, actions = [], children }) => {
  return <ListItemContainer data-testid={`list-item-${id ?? 'default'}`}>
    <div className="list-item__content">{children}</div>
    <div className="list-item__actions">
      {actions.map(({ action, icon, ...props}) => <Button key={action} {...props}>{icon}</Button>)}
    </div>
  </ListItemContainer>;
}

export default ListItem;