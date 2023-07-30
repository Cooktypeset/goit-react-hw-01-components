import PropTypes from 'prop-types';
import {
    ProfileWrapper,
    Dscription,
    Stats,
    StatsItem,
} from './Profile.styled';

const Profile = ({ avatar, location, stats, tag, username }) => {
    return (
        <ProfileWrapper>
            <Dscription>
                <img src={avatar} alt="User avatar" />
                <p>{username}</p>
                <p>@{tag}</p>
                <p>{location}</p>
            </Dscription>

            <Stats>
                <StatsItem></StatsItem>
            </Stats>
        </ProfileWrapper>
    );
};

Profile.propTypes = {
    avatar: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    }).isRequired,
};

export default Profile;