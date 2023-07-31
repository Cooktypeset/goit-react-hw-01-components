import styled from 'styled-components';

const Section = styled.section`
  background-color: grey;
  padding: 20px;

  h2 {
    text-align: center;

    background-color: white;
    text-transform: uppercase;
    padding-top: 20px;
    padding-bottom: 20px;
  }
`;
const StatList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  li {
    width: 80px;
    padding-top: 20px;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  li:first-child {
    background-color: ${Color()};
  }
  li:nth-child(2) {
    background-color: ${Color()};
  }
  li:nth-child(3) {
    background-color: ${Color()};
  }
  li:nth-child(4) {
    background-color: ${Color()};
  }
  li:last-child {
    background-color: ${Color()};
  }
`;

const Label = styled.span`
  font-size: 20px;
  color: white;
`;
const Percentage = styled.span`
  font-size: 25px;
  font-weight: bold;
  color: white;
`;

function Color() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

export { Section, StatList, Label, Percentage };