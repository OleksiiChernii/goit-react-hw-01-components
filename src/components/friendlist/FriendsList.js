import FriendListItem from "./FriendListItem";
import PropTypes from "prop-types";
import css from "./FriendList.module.css";

function FriendList({ friends }) {
  return (
    <ul className={css["friend-list"]}>
      {friends.map(friend => <FriendListItem key={friend.id} friend={friend} />)}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired
};

export default FriendList;
