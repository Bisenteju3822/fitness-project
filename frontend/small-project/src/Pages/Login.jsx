import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import BASE_URL from "../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
      <style>
        {`
          #doclogin {
            background-color: black;
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .login-container {
          margin-top:250px;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            border: 8px solid #ccc;
            border-radius: 15px;
            padding: 20px;
            background-color: #14b8a6;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            max-width: 300px;
            width: 100%;
            length:50px
          }

          .login-image {
            border-radius: 15px;
            margin-bottom: 20px;
            width: 150px;
            height: 150px;
            transition: transform 0.2s;
          }

          .login-image:hover {
            transform: scale(1.1);
          }

          h1 {
            font-size: 4rem;
            margin-top: 20px;
            color: white;
          }

          h1 span {
            color: black;
          }

          .form-content {
            width: 100%;
          }

          .submit-button {
            font-size: 1.2rem;
            padding: 10px 20px;
            background-color: black;
            border: none;
            color: white;
            border-radius: 5px;
            transition: background-color 0.3s;
          }

          .submit-button:hover {
            background-color: #333;
          }
        `}
      </style>

      <Container id="doclogin">
        <div className="login-container">
          <img
            src="Screenshot 2024-11-29 165956.png"
            alt="Doctor"
            className="login-image"
          />
          <h1>
            Trainer <span>Login</span>
          </h1>
          <Form className="form-content">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                size="lg"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                size="lg"
              />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              onClick={handleSubmit}
              size="lg"
              className="submit-button"
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
