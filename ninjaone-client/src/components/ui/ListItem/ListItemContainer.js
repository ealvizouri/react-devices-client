import styled from 'styled-components';

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

export default ListItemContainer;