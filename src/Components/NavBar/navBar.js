import { Link } from "react-router-dom";
import styles from "./navBar.module.css";

function NavBar(props) {
  const { user } = props;
  return (
    <div className={styles.navBar}>
      <h1 className={styles.h1}>NASA API</h1>

      <div className={styles.links}>
        <Link to="home">Home</Link>
      </div>

      <label className={styles.user}>{user}</label>
    </div>
  );
}

export default NavBar;
