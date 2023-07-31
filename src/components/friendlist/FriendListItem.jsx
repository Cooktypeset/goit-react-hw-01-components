import PropTypes from 'prop-types';

import { Online } from './FriendList.styled';

const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <>
            <Online isOnline={isOnline}>{isOnline}</Online>
            <img src={avatar} alt="User avatar" width="48" />
            <p>{name}</p>
        </>
    );
};

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};
export default FriendListItem;