import PropTypes from 'prop-types';
import styled from 'styled-components';

const ModalBaseContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-overlay);
  ${({ open }) => open ? '' : 'display: none;'}

  div.modal {
    border: 1px solid var(--color-secondary);
    border-radius: 5px;
    padding: 10px;
    background-color: var(--color-clean);
    ${({ size, sizeExact }) => {
      let s = {
        sm: [80, 40],
        md: [50, 50],
        lg: [50, 50]
      };
      switch(size) {
        case 'sm':
          s.sm = sizeExact?.sm ?? [80, 20];
          s.md = sizeExact?.md ?? [20, 15];
          s.lg = sizeExact?.lg ?? [20, 15];
          break;
        case 'md':
          s.sm = sizeExact?.sm ?? [80, 30];
          s.md = sizeExact?.md ?? [20, 15];
          s.lg = sizeExact?.lg ?? [20, 15];
          break;
        case 'lg':
        default:;
      }
      return `
        width: ${s.sm[0]}%;
        height: ${s.sm[1]}%;
        @media (min-width: var(--breakpoint-md)) {
          width: ${s.md[0]}%;
          height: ${s.md[1]}%;
        }
        @media (min-width:  var(--breakpoint-lg)) {
          width: ${s.lg[0]}%;
          height: ${s.lg[1]}%;
        }
      `;
    }}
  }
`;

ModalBaseContainer.propTypes = {
  open: PropTypes.bool,
  size: PropTypes.oneOf([
    'sm',
    'md',
    'lg'
  ]),
  sizeExact: PropTypes.shape({
    sm: PropTypes.arrayOf(PropTypes.number),
    md: PropTypes.arrayOf(PropTypes.number),
    lg: PropTypes.arrayOf(PropTypes.number),
  }),
};

export default ModalBaseContainer;