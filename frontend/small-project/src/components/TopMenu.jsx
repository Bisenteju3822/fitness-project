// import "../Css/All.css";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { FaSearch, FaRunning, FaChartLine } from "react-icons/fa";
import BASE_URL from "../config";

const FitnessNavbar = () => {
  const [input, setInput] = useState({});
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleInput = (e) => {
    let { name, value } = e.target;
    setInput((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    let api = `${BASE_URL}/fitness/registration`;
    try {
      const response = await axios.post(api, input);
      toast.success(response.data.msg);
      setShow(false);
    } catch (error) {
      console.log(error);
      toast.error("Registration failed! Try again.");
    }
  };

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" className="navbar">
        <Container>
          <Navbar.Brand href="#">
            Vitality<span style={{ color: "white" }}>Vibe</span>
          </Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="/" style={{ color: "#14b8a6" }}>
                Home
              </Nav.Link>
              <Nav.Link href="#activities" style={{ color: "white" }}>
                Activities
              </Nav.Link>
              <Nav.Link href="#progress" style={{ color: "white" }}>
                Progress
              </Nav.Link>
              <Nav.Link href="/search" style={{ color: " #14b8a6" }}>
                <FaSearch /> Search
              </Nav.Link>
              <Nav className="ml-auto" style={{ float: "right" }}>
                <Nav.Link href="#profile" style={{ color: " #14b8a6" }}>
                  <FaRunning /> Profile
                </Nav.Link>
                <Nav.Link href="#settings" style={{ color: "white" }}>
                  <FaChartLine /> Settings
                </Nav.Link>
              </Nav>
              <div style={{ marginTop: "2px" }}>
                <Nav.Link href="#register" onClick={handleShow}>
                  <Button variant="success">Fitness Registration</Button>
                </Nav.Link>
                <Nav.Link href="/login">
                  <Button
                    variant="success"
                    style={{ backgroundColor: " #14b8a6" }}
                  >
                    Login
                  </Button>
                </Nav.Link>
                <Nav.Link href="#workouts">
                  <Button variant="success">Workouts</Button>
                </Nav.Link>
                <Nav.Link href="#nutrition">
                  <Button variant="success">Nutrition</Button>
                </Nav.Link>
                <Nav.Link href="#goals">
                  <Button variant="success">Goals</Button>
                </Nav.Link>
                <Nav.Link href="#community">
                  <Button variant="success">Community</Button>
                </Nav.Link>
                <Nav.Link href="#statistics">
                  <Button variant="success">Statistics</Button>
                </Nav.Link>
                <Nav.Link href="#support">
                  <Button variant="success">Support</Button>
                </Nav.Link>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Modal
        show={show}
        onHide={handleClose}
        centered
        dialogClassName="modal-dialog"
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <span style={{ fontStyle: "oblique", color: " #14b8a6" }}>Fit</span>{" "}
            Registration
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                name="name"
                onChange={handleInput}
              />
            </Form.Group>
            <Form.Group controlId="formAddress">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter address"
                name="address"
                onChange={handleInput}
              />
            </Form.Group>
            <Form.Group controlId="formCity">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter city"
                name="city"
                onChange={handleInput}
              />
            </Form.Group>
            <Form.Group controlId="formMobile">
              <Form.Label>Mobile</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter mobile number"
                name="mobile"
                onChange={handleInput}
              />
            </Form.Group>
            <Form.Group controlId="formSpecialization">
              <Form.Label>Specialization</Form.Label>
              <Form.Control
                as="select"
                name="specialization"
                onChange={handleInput}
              >
                <option value="">Select specialization</option>
                <option value="personal_trainer">Personal Trainer</option>
                <option value="nutritionist">Nutritionist</option>
                <option value="yoga_instructor">Yoga Instructor</option>
                <option value="physical_therapist">Physical Therapist</option>
                <option value="pilates_instructor">Pilates Instructor</option>
                <option value="strength_coach">Strength Coach</option>
                <option value="cardio_expert">Cardio Expert</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                onChange={handleInput}
              />
            </Form.Group>
            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                name="password"
                onChange={handleInput}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Register
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
      <ToastContainer />
    </>
  );
};

export default FitnessNavbar;
