import jakeImg from "../assets/jake.jpeg";
import styles from "../styles/home.module.css";
import Links from "./Links";

function Profile() {
  return (
    <div className={styles.container}>
      <img className={styles.profileImg} src={jakeImg} />
      <div>
        <h1>Jake Saterlay</h1>
        <h2>Software Developer</h2>
        <Links />
      </div>
    </div>
  );
}

export default Profile;
