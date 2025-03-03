import { useState, useEffect } from "react";
import BASE_URL from "../config";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { toast } from "react-toastify";
import "../Css/All.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [mydata, setMydata] = useState([]);
  const navigate = useNavigate();
  const loadData = async () => {
    const api = `${BASE_URL}/fitness/display`;
    try {
      const response = await axios.get(api);
      console.log(response);
      setMydata(response.data);
      toast.success("Successfully retrieved data");
    } catch (error) {
      console.log(error);
      toast.error("Error fetching data");
    }
  };
  useEffect(() => {
    loadData();
  }, []);

  const triAppoint = (id) => {
    navigate(`/fitapp/${id}`);
  };

  const ans = mydata.map((key) => (
    <Card className="card" key={key.id}>
      <Card.Img variant="top" src="fitness.png" />
      <Card.Body>
        <Card.Title>{key.name}</Card.Title>
        <Card.Text>
          Specialization: {key.specialization} <br />
          Address: {key.address} <br />
          City: {key.city} <br />
          Mobile: {key.mobile} <br />
          Email: {key.email}
        </Card.Text>
        <Button
          variant="primary"
          className="card-button"
          onClick={() => {
            triAppoint(key._id);
          }}
        >
          Appoint Now
        </Button>
      </Card.Body>
    </Card>
  ));

  return (
    <>
      <h1 className="page-title">
        Welcome to <span style={{ color: "white" }}> Online Appointment</span>
      </h1>
      <div id="homeDoctors">{ans}</div>
    </>
  );
};

export default Home;
