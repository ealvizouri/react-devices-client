import PropTypes from 'prop-types';
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

ListItem.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string.isRequired,
  actions: PropTypes.arrayOf(PropTypes.shape({
    action: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired
  })),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default ListItem;