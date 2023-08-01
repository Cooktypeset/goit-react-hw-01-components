import styled from 'styled-components';

const Table = styled.table`
  /* margin: 0 auto; */

  border-spacing: 1px;

  background-color: #fff;
`;

const Thead = styled.thead`
  tr {
    border-radius: 6px;
  }
  th {
    min-width: 160px;
    padding: 6px;
    /* border-radius: 6px; */
    background-color: #072c7a;

    color: #fff;

    font-size: 16px;
    line-height: 1.2;
    letter-spacing: 0.2px;
  }

  th:first-child {
    padding-left: 20px;
    text-align: left;
  }
`;

const Tbody = styled.tbody`
  tr {
    td {
      padding: 3px;
      color: #2e2f42;
      font-size: 14px;
      line-height: 1.2;
      letter-spacing: 0.2px;
      text-align: center;
    }

    td:first-child {
      padding-left: 20px;
      text-align: left;
      text-transform: capitalize;
    }
  }
`;

export { Table, Thead, Tbody };