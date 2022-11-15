import styled from 'styled-components';

const DeviceInfoContainer = styled.div`
  display: flex;
  flex-direction: column;

  p {
    text-align: left;
  }
`;

const DeviceInfo = ({ systemName, type, hddCapacity }) => {
  return <DeviceInfoContainer>
    <p>{systemName}</p>
    <p>{type}</p>
    <p>{hddCapacity}</p>
  </DeviceInfoContainer>;
}

export default DeviceInfo;