import api from "./axios";

/* @Create Register 
HTTP METHOD IS POST 
RESPONSE STATUS CODE is 201 
RESPONSE STATUS TEXT is created 
this global  view
must have request payload 
response has data or not 
*/

export const createUser = async(payload) =>{
   const {data} = await api.post("/auth/register" , payload); //we http post request for creating new user
  console.log(data);
   return data;
}



/*------------------ACTIVATION SERVICE --------------------*/
/* VALIDATE ACTIVATION SERVICE 
HTTP METHOD IS POST 
RESPONSE STATUS CODE is 201 
RESPONSE STATUS TEXT is created 
this global  view
must have request payload 
response has data  
*/
export const ActivationServiceApi = async(payload) =>{
   const {data} = await api.post("/auth/activate-user" , payload);
   return data;
}

/*------------------ACTIVATION SERVICE ENDS HERE--------------------*/

export const Login = async(payload) =>{
   const {data} = await api.post("/auth/login" , payload);
     return data;
}



/*=============Get me user ==========*/
export const GetMe= async()=>{
   const {data} = await api.get('/auth/me');
   console.log(data)
      return data;
   
}

export const LogoutServiceApi = async() =>
{
const {data}= await api.get("/auth/logout");
console.log(data)
     return data;
}
   
//=======Update User INFO=======//

/*------------------ACTIVATION SERVICE --------------------*/
/* VALIDATE ACTIVATION SERVICE 
HTTP METHOD IS PUT
RESPONSE STATUS CODE is 200
RESPONSE STATUS TEXT is ok
this Private view
must have request payload 
response has data  
*/
export const UpdateUserInfoApi= async(payload)=>{
   const {data} = await api.get('/auth/update-user-info',payload);
   
      return data;
   
}
