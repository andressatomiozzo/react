import "./UserCard.css";

const UserCard = ({ user }) => {
  return (
    <div className="user-card">
      <img className="user-card-avatar" src={`https://robohash.org/${user.id}`} alt="" />
      <div className="user-card-info">
        <p>Nome: {user.name}</p>
        <p>Email: {user.email}</p>
        <p>Idade: {user.age}</p>
      </div>
    </div>
  );
};

export default UserCard;
