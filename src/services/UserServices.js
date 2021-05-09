
    const getUsers = async ()  => {
        const response  = await fetch("https://api-rentapp.herokuapp.com/user");
        const jsonResponse = await response.json();
        setUsers(jsonResponse)
      }


      const getUser = async (id)  => {
        const response  = await fetch("https://api-rentapp.herokuapp.com/user/"+id);
        const jsonResponse = await response.json();
        setUsers(jsonResponse)
      }

const User = {
          getUsers,
          getUser
}

export default User;