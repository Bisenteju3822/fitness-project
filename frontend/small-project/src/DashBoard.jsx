import { useEffect } from "react";
import { useNavigate, Link, Outlet } from "react-router-dom";
import "./Css/All.css";
import Button from "react-bootstrap/Button";

const FitDashBoard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("name")) {
      navigate("/");
    }
  }, []);

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <>
      <div className="admin-header fade-in">
        <h1>Welcome To Fitness Admin Panel</h1>
      </div>
      <div className="admin-welcome fade-in">
        Welcome: {localStorage.getItem("name")}
        <br />
        Email: {localStorage.getItem("email")}
        <br />
        <Button
          variant="success"
          onClick={logout}
          style={{ backgroundColor: "#14b8a6" }}
        >
          Logout
        </Button>
      </div>
      <div id="dotordashboard">
        <div id="docleftmenu" className="slide-in">
          <Link to="/mypatient">My Appointments</Link>
          <br />
        </div>
        <div id="dashboarddata" className="show fade-in">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default FitDashBoard;
