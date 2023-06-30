import PropTypes from 'prop-types';
import css from './friendList.module.css';

export const FriendItem = ({ avatar, name, isOnline, id }) => {
    return (
        <li key={id} className={css.item}>
            <span
                className={isOnline ? css.status_active : css.status_notActive}
            ></span>
            <img
                className={css.avatar}
                src={avatar}
                alt="User avatar"
                width="48"
            />
            <p className={css.name}>{name}</p>
        </li>
    );
};

FriendItem.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.string.isRequired,
        })
    ),
};
