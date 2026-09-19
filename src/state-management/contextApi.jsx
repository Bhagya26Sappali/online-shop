import { createContext, useEffect, useState } from "react";
import {
  ActivationServiceApi,
  createUser,
  Login,
  GetMe,
  LogoutServiceApi,
  UpdateUserInfoApi,
} from "../services/api/AuthServices";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("TOKEN"));
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {

    const fetchUser = async () => {
      const token = localStorage.getItem("Token");
      if (!token) {
        setUser(null);
        setLoading(false);
        return;
      }

      try {
        ////if token present in local storage  call getme function
        const res = await GetMe();
         setLoading(true)
        console.log(res)
        setUser(res?.user ?? null);//optional chaining
      } catch (error) {
        console.error(error.res?.data || error.message);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
      fetchUser();
    
  }, []);

  //useEffect for fetching token and based token fetch users

  /*======================== REGISTER BLOCK START HERE ========================*/

  const register = async (name, email, password) => {
    try {
      //fetch
      const { success, activationToken, activationCode, mailUrl } =
        await createUser(name, email, password);

      if (success === true) {
        localStorage.setItem("activationToken", activationToken);
        localStorage.setItem("activationCode", activationCode);
        localStorage.setItem("successRes", success);
        localStorage.setItem("mailUrl", mailUrl);
      }
    } catch (error) {
      console.error(error);
    }
  };

  /*======================== REGISTER BLOCK ENDS HERE ========================*/

  /*========================ACTIVATION USER CODE STARTS HERE ========================*/

  const ActivationUser = async (activation_token, activation_code) => {
    try {
      await ActivationServiceApi(activation_token, activation_code);
    } catch (error) {
      throw error;
    }
  };

  /*========================ACTIVATION USER CODE ENDS HERE ========================*/

  // const login = async (email, password) => {
  //   try {
  //     let { accessToken } = await Login(email, password);
  //     localStorage.setItem("TOKEN", accessToken);
  //       // IMPORTANT
  //       setToken(accessToken);
  //       const userData = await GetMe();
  //       console.log("USER DATA:", userData);
  //       setUser(userData.user);
  //     return userData.user;

  //   } catch (error) {
  //     throw error;
  //   }
  // };

  // -----------------------------------------
  // LOGIN
  // -----------------------------------------
  const login = async (email, password) => {
    try {
      const response = await Login(email, password);
      if (!response?.accessToken) {
        throw new Error("Access token was not returned by login API");
      }
      // Save token
      localStorage.setItem("TOKEN", response.accessToken);
      // Login API already returns user
      setUser(response.user ?? null);
      return response.user;
    } catch (error) {
      console.error(error.response?.data || error.message);

      throw error;
    }
  };
//======Logout=====/
const logout=async()=>
{
  let res=await LogoutServiceApi();
  console.log(res)
  return res;
}

//Profile==================//

 const updateUserInfo=async(payload)=>
{
  let {data}=await UpdateUserInfoApi(payload);
  return data;

}


  return (
    <>
      <AuthContext.Provider
        value={{ register, login, ActivationUser, token, user ,logout ,updateUserInfo}}
      >
        {children}
      </AuthContext.Provider>
    </>
  );
};
