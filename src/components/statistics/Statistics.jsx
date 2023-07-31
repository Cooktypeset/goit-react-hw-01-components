import PropTypes from 'prop-types';
import { Section } from './Statistics.styled';

const Statistics = ({ title, children }) => {
    return (
        <Section className="statistics">
            {title && <h2>{title}</h2>}
            {children}
        </Section>
    );
};

Statistics.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Statistics;