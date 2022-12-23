import axios from "axios";
import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import googleLogo from "../Images/google.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const history = useHistory();
  // let name, value;
  // const handleInputs = (e) => {
  //   console.log(e);
  //   name = e.target.name;
  //   value = e.target.value;

  //   setUser({ ...user, [name]: value });
  // };
  const [text, setText] = useState(``);
  const [password, setPassword] = useState(``);

  const PostData = async (e) => {
    e.preventDefault();
    console.log(text);
    console.log(password);
    const res = await fetch("https://handbook-backend.onrender.com/login", {
      method: "POST",
      PORT: "5000",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        text,
        password,
      }),
    });

    const data = res.json();
    if (res.status === 201) {
      toast.success("Login Successful !", {
        position: toast.POSITION.BOTTOM_RIGHT,
        className: "toast-login",
      });
      history.push("/");
      console.log("Login Successful");
    } else {
      toast.error("Invalid Credentials !", {
        position: toast.POSITION.BOTTOM_RIGHT,
        className: "toast-login",
      });
      console.log("Invalid Credentials");
    }
  };

  // const PostData = async (e) => {
  //   e.preventDefault();
  //   console.log(text);
  //   console.log(password);
  //   fetch("/login", {
  //     method: "POST",
  //     PORT: "5000",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({
  //       text,
  //       password,
  //     }),
  //   })
  //     .then(() => console.log("res"))
  //     .catch((err) => console.log(err));

  //  axios
  //   .post("/login", {
  //     text,
  //     password,
  //   })
  //   .then((res)=> {
  //     console.log(res);
  //   })
  //   .catch((error)=> {
  //     console.log(error);
  //   });

  // const data = res.json();
  // if (res.status === 201) {
  //   console.log("Login Successful");
  // } else {
  //   console.log("Invalid Credentials");
  // }

  return (
    <section>
      <ToastContainer />
      <div
        id="loginSignup"
        className="justify-content-center d-flex align-items-center"
      >
        <div
          className="rounded bg-white p-3"
          style={{
            width: "100%",
            maxWidth: "512px",
            boxShadow: "0px 4px 24px rgb(0 0 0 / 10%)",
          }}
        >
          <div className="text-center justify-content-center d-flex py-4">
            <div className="" style={{ width: "314px" }}>
              <span
                className="fa fa-book fa-4x text-center"
                style={{ color: "#5082ff" }}
              ></span>
              <div className="" style={{ fontWeight: "700", fontSize: "48px" }}>
                <span style={{ color: "#5082ff" }}>Hand</span>Book
              </div>
              <div
                className="my-2 mb-5"
                style={{ color: "#333333", fontSize: "16px" }}
              >
                Remember everything important.
              </div>
              <input
                name="text"
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="form-control shadow-none"
                placeholder="Enter email"
                style={{
                  height: "45px",
                  boxShadow: "1px solid #e6e6e6",
                  borderRadius: "7px",
                }}
              />
              <input
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                className="form-control shadow-none mt-2"
                placeholder="Password"
                style={{
                  height: "45px",
                  boxShadow: "1px solid #e6e6e6",
                  borderRadius: "7px",
                }}
              />
              <div
                className="btn btn-primary border-0 w-100 align-items-center justify-content-center d-flex mt-3"
                style={{ height: "45px", background: "#5082ff" }}
                onClick={PostData}
              >
                Continue
              </div>
              <div
                className="d-flex justify-content-center mt-5"
                style={{ marginBottom: "25px" }}
              >
                <input
                  type="checkbox"
                  className="form-check mr-2"
                  style={{ width: "16px", cursor: "pointer" }}
                />
                <div style={{ color: "#737373" }}>Remember me for 30 days</div>
              </div>
              <div style={{ color: "#737373" }}>Don't have an account?</div>
              <NavLink to="/signup" className="text-decoration-none">
                <div
                  className="mt-2"
                  style={{
                    color: "#5082ff",
                    cursor: "pointer",
                    fontWeight: "500",
                    fontSize: "16px",
                  }}
                >
                  Create account
                </div>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
