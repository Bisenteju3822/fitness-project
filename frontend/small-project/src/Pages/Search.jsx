import Form from "react-bootstrap/Form";
import { useState } from "react";
import axios from "axios";
import BASE_URL from "../config";
import Table from "react-bootstrap/Table";
import "../Css/All.css";

const SearchTrianer = () => {
  const [input, setInput] = useState({});
  const [mydata, setMydata] = useState([]);

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setInput((values) => ({ ...values, [name]: value }));
    console.log(input);
  };

  const handleSubmit = async () => {
    let api = `${BASE_URL}/fitness/search`;
    const response = await axios.post(api, input);
    console.log(response.data);
    setMydata(response.data);
  };

  const ans = mydata.map((key) => {
    return (
      <tr key={key.email}>
        <td>{key.name} </td>
        <td>{key.address} </td>
        <td>{key.city} </td>
        <td>{key.email} </td>
        <td>{key.mobile} </td>
        <td>{key.specailization} </td>
      </tr>
    );
  });

  return (
    <div className="container">
      <h1>Search Trainer</h1>

      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Enter Trainer Name</Form.Label>
          <Form.Control type="text" name="name" onChange={handleInput} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Select Specialization</Form.Label>
          <Form.Select
            aria-label="Default select example"
            name="speciality"
            onChange={handleInput}
          >
            <option>Open this select menu</option>
            <option value="personal_trainer">Personal Trainer</option>
            <option value="nutritionist">Nutritionist</option>
            <option value="yoga_instructor">Yoga Instructor</option>
            <option value="physical_therapist">Physical Therapist</option>
            <option value="pilates_instructor">Pilates Instructor</option>
            <option value="strength_coach">Strength Coach</option>
            <option value="cardio_expert">Cardio Expert</option>
          </Form.Select>
        </Form.Group>
        <input type="button" value="search" onClick={handleSubmit} />
      </Form>

      <hr />

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Trainer name</th>
            <th>Address</th>
            <th>City</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Specialization</th>
          </tr>
        </thead>
        <tbody>{ans}</tbody>
      </Table>
    </div>
  );
};

export default SearchTrianer;
