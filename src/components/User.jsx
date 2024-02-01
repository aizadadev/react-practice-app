const User = ({user}) => {
    return (
        <>
        <li>
        <h3>{user.firstName} {user.lastName}</h3>
        <h4>Address</h4>
        <ul> 
          <li>{user.address.city}  </li>
          <li>{user.address.streetName}</li>
          <li>{user.address.postalCode}</li>
        </ul>
        <h4>Hobbies</h4>
        <ul>
          {user.hobbies.map((hobby) => <li>{hobby}</li>)}
        </ul>
      </li>
      </>
    )
}
export default User;