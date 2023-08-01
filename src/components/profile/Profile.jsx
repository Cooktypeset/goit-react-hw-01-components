import PropTypes from 'prop-types';
import {
    ProfileWrapper,
    Description,
    Stats,
    StatsItem,
} from './Profile.styled';

const Profile = ({ avatar, location, stats, tag, username }) => {
    return (
        <ProfileWrapper>
            <Description>
                <img src={avatar} alt="User avatar" />
                <p>{username}</p>
                <p>{tag}</p>
                <p>{location}</p>
            </Description>

            <Stats>
                <StatsItem>
                    <span>Follovers</span>
                    <span>{stats.followers}</span>
                </StatsItem>
                <StatsItem>
                    <span>Views</span>
                    <span>{stats.views}</span>
                </StatsItem>
                <StatsItem>
                    <span>Likes</span>
                    <span>{stats.likes}</span>
                </StatsItem>
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