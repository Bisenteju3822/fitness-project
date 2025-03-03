import { useParams } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { useState, useEffect } from "react";
import axios from "axios";
import BASE_URL from "../config";
import Button from "react-bootstrap/Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../Css/All.css";

const TrainerAppointment = () => {
  const { id } = useParams();
  const [trainerInfo, setTrainerInfo] = useState({});
  const [input, setInput] = useState({});

  const loadData = async () => {
    let api = `${BASE_URL}/learner/fitapp/?id=${id}`;
    try {
      const response = await axios.get(api);
      console.log(response.data);
      setTrainerInfo(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setInput((values) => ({ ...values, [name]: value }));
    console.log(input);
  };

  const handleSubmit = async () => {
    let api = `${BASE_URL}/learner/appntsave`;
    try {
      const response = await axios.post(api, { docid: id, ...input });
      toast.success("Appointment successfully booked!");
      console.log(response);
    } catch (error) {
      toast.error("Error booking appointment. Please try again.");
      console.log(error);
    }
  };

  return (
    <>
      <ToastContainer />
      <h1 style={{ alignItems: "center" }}> Trainer Appointment Form: </h1>
      <h4 style={{ color: "blue", alignItems: "center" }}>
        {" "}
        Your Trainer: {trainerInfo.name} Speciality:{" "}
        {trainerInfo.specialization}
      </h4>
      <Form style={{ width: "400px", margin: "auto" }}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Enter Your Name</Form.Label>
          <Form.Control type="text" name="name" onChange={handleInput} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicGoal">
          <Form.Label>Enter Your Fitness Goal</Form.Label>
          <Form.Control type="text" name="goal" onChange={handleInput} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCity">
          <Form.Label>Enter City</Form.Label>
          <Form.Control type="text" name="city" onChange={handleInput} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicMobile">
          <Form.Label>Enter Mobile No.</Form.Label>
          <Form.Control type="text" name="mobile" onChange={handleInput} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Enter Email</Form.Label>
          <Form.Control type="email" name="email" onChange={handleInput} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Enter Date</Form.Label>
          <Form.Control type="date" name="date" onChange={handleInput} />
        </Form.Group>
        <Button onClick={handleSubmit}> Book Appointment!</Button>
      </Form>
      <br /> <br />
    </>
  );
};

export default TrainerAppointment;
