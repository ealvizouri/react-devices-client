import styled from 'styled-components';
import Button from '../Button';

const ListItemContainer = styled.li`
  padding: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ListItemContent = styled.div`
  margin-right: 5px;
`;

const ListItemActions = styled.div`
  display: flex;
  justify-content: space-evenly;
  button {
    text-transform: capitalize;
  }
`;

const ListItem = ({actions = [], onActionClick, children}) => {
  return <ListItemContainer>
    <ListItemContent>{children}</ListItemContent>
    <ListItemActions>
      {actions.map(action => <Button key={action} onClick={() => onActionClick(action)}>{action}</Button>)}
    </ListItemActions>
  </ListItemContainer>;
}

export default ListItem;