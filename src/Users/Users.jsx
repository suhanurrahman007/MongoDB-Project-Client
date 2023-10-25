import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Users = () => {
    const loadedUsers = useLoaderData()
    const [users, setUsers] = useState(loadedUsers)
    console.log(users);

    const handleRemove = (_id) =>{
        console.log(_id);
        fetch(`http://localhost:5000/users/${_id}`, {
            method: 'DELETE'
        })
          .then(res => res.json())
          .then(data => {
            console.log(data)
            if (data.deletedCount >0) {
                alert("User Data Delete Successfully" )
                const remanding = users.filter(user => user._id !== _id)
                setUsers(remanding)
            }
          });
    }
    return (
      <div>
        <h1>Users Data : {users.length}</h1>
        {users.map((user) => (
          <p key={user._id}>
            {user.name} : {user.email}{" "}
            <Link to={`/update/${user._id}`}>
              <button>Update</button>
            </Link>{" "}
            <button onClick={() => handleRemove(user._id)}>X</button>{" "}
          </p>
        ))}
      </div>
    );
};

export default Users;