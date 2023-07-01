import { Profile } from './Profile/Profile';
import user from './Profile/user.json';

import { Statisctics } from './Statistics/Stats';
import data from './Statistics/data.json';

import { FriendList } from './Friend-List/friendList';
import friends from './Friend-List/friends.json';

import { Transactions } from './Transactions/trans';
import transactions from './Transactions/transactions.json';

export const App = () => {
    return (
        <div>
            <Profile
                username={user.username}
                tag={user.tag}
                location={user.location}
                avatar={user.avatar}
                stats={user.stats}
            />
            <Statisctics title="Upload stats" stats={data} />
            <FriendList friends={friends} />;
            <Transactions transactions={transactions} />
        </div>
    );
};
