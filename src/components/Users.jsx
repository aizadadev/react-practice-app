import User from "./User";


const Users = ({users}) => {
    return(<>
     <h1>User names</h1>
      <ul>
        {users.map((user) => {
          return <User user={user}/>
        })}
      </ul>
    </>)
}
export default Users;