import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Pages/Home";
import DoctorLogin from "./Pages/Login";
import FitDashBoard from "./DashBoard";
import SearchTrianer from "./Pages/Search";
import TrainerAppointment from "./Pages/TraineeAppointment";
import NewLearner from "./Pages/NewLearner";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<DoctorLogin />} />
          <Route path="/search" element={<SearchTrianer />} />
          <Route path="/fitapp/:id" element={<TrainerAppointment />} />
        </Route>
        <Route path="/fitdashboard" element={<FitDashBoard />} />
        <Route path="/mypatient" element={<NewLearner />} />
      </Routes>
    </>
  );
};

export default App;
