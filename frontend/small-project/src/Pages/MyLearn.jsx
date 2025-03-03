import axios from "axios";
import { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import BASE_URL from "../config";
import "../Css/All.css";

const Learner = () => {
  const [workouts, setWorkouts] = useState([]);

  const loadWorkouts = async () => {
    try {
      const docId = localStorage.getItem("docid");
      if (!docId) {
        console.error("Doctor ID not found in localStorage");
        return;
      }

      let api = `${BASE_URL}/fitness/learnerlist/?docid=${localStorage.getItem(
        "docid"
      )}`;
      const response = await axios.get(api);
      console.log(response.data);
      setWorkouts(response.data);
    } catch (error) {
      console.error("Error loading workouts:", error);
    }
  };

  useEffect(() => {
    loadWorkouts();
  }, []);

  const workoutList = workouts.map((workout) => {
    return (
      <tr key={workout._id}>
        <td>{workout.name}</td>
        <td>{workout.goal}</td>
        <td>{workout.city}</td>
        <td>{workout.mobile}</td>
        <td>{workout.email}</td>
        <td>{workout.date}</td>
      </tr>
    );
  });

  return (
    <>
      <h1>My Learner</h1>
      <hr />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Goals</th>
            <th>City</th>
            <th>Mobile</th>
            <th>Email</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>{workoutList}</tbody>
      </Table>
    </>
  );
};

export default Learner;
