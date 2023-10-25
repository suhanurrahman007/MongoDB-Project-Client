import { useLoaderData } from "react-router-dom";

const UpdateUser = () => {
  const user = useLoaderData();

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value 
    const email = form.email.value 
    const userUpdate = {name , email}
    console.log(userUpdate);

    fetch(`http://localhost:5000/users/${user._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userUpdate),
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if (data.modifiedCount > 0) {
          alert("User modify Successfully");
        }else{
            alert("User Not a Modify. Please Update User")
        }
    }
    )


  };

  return (
    <div>
      <h2>UpdateUser {user.name}</h2>
      <form onSubmit={handleUpdate}>
        <input type="text" name="name" defaultValue={user.name} id="" />
        <br />
        <input type="email" name="email" defaultValue={user.email} id="" />
        <br />
        <input type="submit" value="Update" id="" />
        <br />
      </form>
    </div>
  );
};

export default UpdateUser;
