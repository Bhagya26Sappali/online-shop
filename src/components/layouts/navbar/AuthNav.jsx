import React from 'react'
import { Link } from 'react-router-dom';
import { useAuth } from '../../../hooks/fetchUser';
import { toast } from 'react-hot-toast';



const AuthNav = () => {
    const {user ,logout} = useAuth();
    let handleLogout=()=>
    {
        logout();
        localStorage.removeItem("TOKEN");
        toast.success("Successfully user has been loggedout");
          //refreshing page
      window.location.assign("/auth/login");
        
    }
  return (
    <>
    <li>
        <Link to="#">Dashboard</Link>
      </li>
       <li>

        <Link to="user/profile">
            {user?.name}
        </Link>
      </li>
       <li>
        <Link to="#" onClick={handleLogout}>Logout</Link>
      </li>
    </>
  )
}

export default AuthNav