import { Link } from "react-router-dom";
import styles from "./navBar.module.css";

function NavBar(props) {
  const { user, logout } = props;
  return (
    <div className={styles.navBar}>
      <h1 className={styles.h1}>NASA API</h1>

      <div className={styles.links}>
        <Link to="home" className={styles.link}>
          Home
        </Link>
        <Link to="marsRover" className={styles.link}>
          Mars Rover Photos
        </Link>
        <Link to="marsWeather" className={styles.link}>
          Mars Weather
        </Link>
      </div>

      <div>
        <label className={styles.user}>{user}</label>
        <button onClick={logout}>Logout</button>
      </div>
    </div>
  );
}

export default NavBar;
