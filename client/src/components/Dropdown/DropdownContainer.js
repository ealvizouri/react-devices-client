import styled from 'styled-components';

const DropdownContainer = styled.div`
  margin: 10px 5px;
  display: inline-flex;
  position: relative;
  cursor: pointer;
  @extend .noselect;
  .arrow {
    margin-left: 5px;
    position: relative;
    top: ${({ arrowSize = '5px' }) => arrowSize};
    width: 0;
    height: 0;
    border-left: ${({ arrowSize = '5px' }) => arrowSize} solid transparent;
    border-right: ${({ arrowSize = '5px' }) => arrowSize} solid transparent;
  }
  ul {
    position: absolute;
    bottom: 0;
    right: 0;
    transform: translateY(100%);
    border: 1px solid var(--color-secondary);
    li button {
      margin: 0;
      width: 100%;
      border-radius: 0;
    }
  }
  .arrow {
    border-${({ open }) => open ? 'bottom' : 'top'}: ${({ arrowSize = '5px' }) => arrowSize} solid var(--color-secondary-darker);
  }
  ul {
    display: ${({ open }) => open ? 'block' : 'none'};
  }
`;

export default DropdownContainer;