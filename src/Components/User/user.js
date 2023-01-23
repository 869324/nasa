import { useEffect } from "react";
import { Route, Routes, useNavigate, Navigate } from "react-router-dom";
import NavBar from "../NavBar/navBar";
import Home from "../Home/home";
import styles from "./user.module.css";

function User(props) {
  const navigate = useNavigate();
  const { user } = props;

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user]);

  return (
    <div>
      <NavBar user={user} />

      <div className={styles.pages}>
        <Routes>
          <Route path="/" element={<Navigate to="home" />} />
          <Route path="home" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default User;
