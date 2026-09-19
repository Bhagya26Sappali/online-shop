import React, { useContext } from "react";
import Styles from "./auth.module.css";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../state-management/contextApi";
import { useNavigate } from "react-router-dom";

const Register = () => {
  let { register } = useContext(AuthContext);
  const navigate = useNavigate();
  let [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    isLoading: false,
   
  });
  let { name, email, password, isLoading } = state;

  let handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let payload = { name, email, password };
      console.log({
        name,
        email,
        password,
       
      });
      setState({ isLoading: true });
      await register(payload);
      toast.success("Suucessfully user has been registered");
      navigate("/auth/activate");
      // window.location.assign(mailUrl)


    } catch (error) {
      console.log(error);
      toast.error("Something went Wrong");
    } finally {
      setState({ isLoading: false, name: "", email: "", password: "" });
    }
  };
  return (
    <section id={Styles.auth}>
      <article className={Styles.auth_block}>
        <header>
          <h1>Register</h1>
        </header>
        <main>
          <form onSubmit={handleSubmit}>
            <div className={Styles.form_group}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                placeholder="enter name"
                required
                value={name}
                id="name"
                onChange={handleChange}
              />
            </div>
            <div className={Styles.form_group}>
              <label htmlFor="email">Email</label>
              <input
                type="text"
                className="form-control"
                name="email"
                placeholder="enter mail"
                required
                value={email}
                id="email"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                placeholder="enter password"
                required
                value={password}
                id="password"
                onChange={handleChange}
              />
            </div>
            <button>Register</button>
          </form>
        </main>
      </article>
    </section>
  );
};

export default Register;
