import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';
import Profile from './profile/Profile';
import Statistics from './statistics/Statistics';
import StatisticsItem from './statistics/StatisticsItem';
import FriendList from './friendlist/FriendList';
import TransactionHistory from './transaction/TransactionHistory';
import Section from './section/Section';
import { TableWrapper } from './transaction/TableWrapper.styled';
import { Container } from './App.styled';

export const App = () => {
  return (
    <div>
      <Container>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        >
        </Profile>
        <Statistics title="Upload stats" stats={data}>
          <StatisticsItem stats={data} />
        </Statistics>
        <Section>
          <FriendList friends={friends} />
        </Section>
        <TableWrapper>
          <TransactionHistory items={transactions} />
        </TableWrapper>
      </Container>
    </div>
  );
};