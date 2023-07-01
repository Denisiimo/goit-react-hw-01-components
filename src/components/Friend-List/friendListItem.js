import PropTypes from 'prop-types';
import css from './friendList.module.css';

export const FriendItem = ({ avatar, name, isOnline }) => {
    return (
        <li className={css.item}>
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
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};
