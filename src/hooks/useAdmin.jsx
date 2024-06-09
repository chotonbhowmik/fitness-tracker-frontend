import { useContext, useState, useEffect } from "react";
import { fetchUser } from "../Api/Api";
import { AuthContext } from "../providers/AuthProvider";

const useAdmin = () => {
  const [role, setRole] = useState(null); 
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchAdminStatus = async () => {
      try {
        const allUsers = await fetchUser();
        console.log("all user data", allUsers);
        const loggedInUser = allUsers.find((u) => u.email === user.email);

        if (loggedInUser) {
         

      
          const updatedAllUsers = await fetchUser();
          const updatedUser = updatedAllUsers.find(
            (u) => u.email === user.email
          );
          console.log("updated user data", updatedUser);

          if (updatedUser) {
            setRole(updatedUser.role);
          }
        }
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchAdminStatus();
  }, [user]);

  return role;
};

export default useAdmin;
