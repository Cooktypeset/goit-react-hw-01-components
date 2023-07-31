import styled from 'styled-components';

const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  li {
    background-color: white;
    width: 100%;
    padding-top: 5px;
    padding-bottom: 5px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 25px;
    border-radius: 10px;
    border: 5px solid black;

    img {
      width: 80px;
      height: 80px;
    }
    p {
      text-align: center;
      width: 100px;
      font-size: 30px;
      font-weight: bold;
      color: black;
    }
  }
`;

const Online = styled.span`
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => (props.isonline ? 'red' : 'green')};
`;

export { List, Online };