import styled from 'styled-components';
const ProfileWrapper = styled.div`
padding: 20px;
`;
const Description = styled.div`
padding: 20px;
background-color: white;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 24px;
img{
    width: 100px;
    heigt: 100px;
    border-radius: 50%;
    background-color: orange;
}
p:nth-child(2){
   font-size: 35px;
    font-weight: bold;
    color: black;
}
p:nth-child(3){
    font-size: 20px;
    font-weight: bold;
    color: grey;
}
p:nth-child(4){
     font-size: 20px;
    font-weight: bold;
    color: grey;
}
`;

const Stats = styled.ul`
max-height: 180px;
list-style: none;
display: flex;
justify-content: space-around;
align-items: baseline;
 background-color: #dad8d8;
`;

const StatsItem = styled.li`
min-width: 100px;
padding-top: 20px;
padding-bottom: 20px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

span{
    font-size: 20px;
    font-weight: bold;
    color:white;
}
 span:nth-child(2) {
    font-size: 24px;
    font-weight: bold;
    color: black;
  }
`;
export { ProfileWrapper, Description, Stats, StatsItem };