import styled from 'styled-components';

const DeviceInfoContainer = styled.div`
  display: flex;
  flex-direction: column;

  p {
    text-align: left;
    &.system-name {
      color: var(--color-text-primary);
    }
    &.type {
      color: var(--color-info);
    }
    &.hdd-capacity {
      color: var(--color-text-secondary);
    }
  }
`;

export default DeviceInfoContainer;