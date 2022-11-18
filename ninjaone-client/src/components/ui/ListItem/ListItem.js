import styled from 'styled-components';
import Button from '../Button';

const ListItemContainer = styled.li`
  padding: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  > div.list-item__content {
    margin-right: 5px;
  }
  > div.list-item__actions {
    display: flex;
    justify-content: space-evenly;
    button {
      text-transform: capitalize;
    }
  }
`;

const ListItem = ({ actions = [], children }) => {
  return <ListItemContainer>
    <div className="list-item__content">{children}</div>
    <div className="list-item__actions">
      {actions.map(({ action, icon, ...props}) => <Button key={action} {...props}>{icon}</Button>)}
    </div>
  </ListItemContainer>;
}

export default ListItem;