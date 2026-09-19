import { Fragment } from "react";
import {BrowserRouter as Router ,Route,Routes} from "react-router-dom"
import HomePage from "./pages/HomePage";
import Navbar from "./components/layouts/Navbar";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Logout from "./components/auth/Logout";
import "./App.css";
import ActivationCode from "./components/auth/ActivationCode";
import ProfileDashboard from "./components/profile/ProfileDashboard";
const App = () => {
  return (
    <>
      <Router>
        <section id="navbar">
          <article className="container">
            <aside className="top_header">
             <Navbar/>
            </aside>
            <main className="main">
              <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/auth/register" element={<Register/>}/>
                <Route path="/auth/activate" element={<ActivationCode/>}/>
                <Route path="/auth/login" element={<Login/>}/>
                <Route path="/" element={<Login/>}/>
                //authenticated Route
                <Route path="/user/profile" element={<ProfileDashboard/>}/>
              </Routes>
            </main>
          </article>
           </section>
      </Router>
    </>
  )
}

export default App