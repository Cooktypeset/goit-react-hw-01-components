import PropTypes from 'prop-types';
import { StatList, Label, Percentage } from './Statistics.styled';
const StatisticsItem = ({ stats }) => {
  return (
    <StatList>
      {stats.map(item => {
        return (
          <li key={item.id}>
            <Label className="label">{item.label}</Label>
            <Percentage>{item.percentage}%</Percentage>
          </li>
        );
      })}
    </StatList>
  );
};

StatisticsItem.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

export default StatisticsItem;