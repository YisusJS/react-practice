import styled from 'styled-components';

const Button = styled.button`
  background: palevioletred;
  border: 2px solid palevioletred;
  border-radius: 3px;
  color: white;
  padding: 0.25em 1em;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background: white;
    color: palevioletred;
    border: 2px solid white;
  }
`;

export default Button;
