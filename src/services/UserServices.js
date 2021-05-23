
    const getUsers = async ()  => {
        const response  = await fetch("https://api-rentapp.herokuapp.com/user");
        const jsonResponse = await response.json();
        return jsonResponse;
      }


      const getUser = async (id)  => {
        const response  = await fetch("https://api-rentapp.herokuapp.com/user/"+id);
        const jsonResponse = await response.json();
        return jsonResponse;
      }

      const getUserEmail = async (email)  => {
        const response  = await fetch("https://api-rentapp.herokuapp.com/user-email/"+email);
        const jsonResponse = await response.json();
        return jsonResponse;
      }

const UserService = {
          getUsers,
          getUser,
          getUserEmail
}

export default UserService;