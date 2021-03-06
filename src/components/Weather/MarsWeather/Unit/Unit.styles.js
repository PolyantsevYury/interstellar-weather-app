import styled from 'styled-components';

export const UnitStyles = styled.div`
  color: #fff;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  opacity: 0.7;
  transition: opacity 275ms linear;

  :hover {
    opacity: 1;
  }
`;

export const Toggle = styled.button`
  cursor: pointer;
  width: 4em;
  border: 2px solid #fff;
  background: transparent;
  padding: 0;
  border-radius: 100vmax;
  margin: 0 10px;
  outline: 0;

  ::after {
    content: '';
    display: block;
    background: #fff;
    border-radius: 50%;
    height: 1rem;
    margin: 3px;
    margin-left: ${(props) => (props.metric ? '3px' : 'auto')};
    width: 1rem;
  }
`;
