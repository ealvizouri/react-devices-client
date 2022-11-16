import styled from 'styled-components';

const FormItemContainer = styled.div`
  margin: 5px 0;
  display: flex;
  flex-direction: column;
  label {
    display: flex;
    align-items: center;
    text-align: right;
    > span:first-child {
      width: 200px;
      ${({ required }) => !required ? '' : `
      &::after {
        content: '*';
        color:red;
        position: relative;
        left: 3px;
      }
      `}
    }
    input, select {
      padding: 1px 2px;
      box-sizing: border-box;
      flex-basis: 80%;
      margin-left: 10px;
      height: 35px;
    }
  }
  .error {
    color: red;
    text-align: right;
  }
`;

export default FormItemContainer;