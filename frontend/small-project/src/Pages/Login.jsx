import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import BASE_URL from "../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "../Css/All.css"; // Import your CSS file
import { Container } from "react-bootstrap";

const DoctorLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let api = `${BASE_URL}/fitness/login`;

    try {
      const response = await axios.post(api, {
        email: email,
        password: password,
      });
      console.log(response.data);
      localStorage.setItem("name", response.data.name);
      localStorage.setItem("email", response.data.email);
      localStorage.setItem("docid", response.data._id);

      toast.success("You are successfully logged in!");
      navigate("/fitdashboard");
    } catch (error) {
      toast.error(error.response.data.msg);
    }
  };

  return (
    <>
      <Container
        id="doclogin"
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "100vh", backgroundColor: "black" }}
      >
        <div
          style={{
            marginLeft: "450px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            border: "8px solid #ccc",
            borderRadius: "15px",
            padding: "20px",
            backgroundColor: " #14b8a6",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
            maxWidth: "600px",
            width: "100%",
          }}
        >
          <img
            src="Screenshot 2024-11-29 165956.png" // Replace with your image URL
            alt="Doctor"
            style={{
              borderRadius: "15px",
              marginBottom: "20px",
              width: "150px",
              height: "150px",
              transition: "transform 0.2s",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.transform = "scale(1.1)")
            }
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />
          <h1 style={{ fontSize: "4rem", marginTop: "20px", color: "white" }}>
            Trainer <span style={{ color: "black" }}>Login</span>
          </h1>
          <Form className="form-content" style={{ width: "100%" }}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label
                style={{
                  fontSize: "1.5rem",
                  color: "black",
                  marginLeft: "50px",
                }}
              >
                Email
              </Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                size="lg"
                style={{ fontSize: "1.2rem", padding: "10px" }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label style={{ fontSize: "1.5rem", color: "black" }}>
                Password
              </Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                size="lg"
                style={{ fontSize: "1.2rem", padding: "10px" }}
              />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              onClick={handleSubmit}
              size="lg"
              style={{
                fontSize: "1.2rem",
                padding: "10px 20px",
                backgroundColor: "black",
              }}
            >
              Submit
            </Button>
          </Form>
        </div>
      </Container>

      <ToastContainer />
    </>
  );
};

export default DoctorLogin;
