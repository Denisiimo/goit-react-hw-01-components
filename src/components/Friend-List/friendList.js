import { FriendItem } from './friendListItem';
import css from './friendList.module.css';

export const FriendList = ({ friends }) => {
    return (
        <ul className={css.friendList}>
            {friends.map(({ id, avatar, name, isOnline }) => (
                <FriendItem
                    avatar={avatar}
                    name={name}
                    isOnline={isOnline}
                    key={id}
                />
            ))}
        </ul>
    );
};
