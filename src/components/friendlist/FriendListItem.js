import css from './FriendListItem.module.css';

function FriendListItem({friend}){
    const {isOnline, avatar, name} = friend;
    return (
        <li className={css.item}>
            <span className={`${css.status} ${css[isOnline ? 'online' : 'offline']}`}></span>
            <img className={css.avatar} src={avatar} alt={name} width="48" />
            <p className={css.name}>{name}</p>
        </li>
    );
}

export default FriendListItem;