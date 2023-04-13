import styles from "../styles/links.module.css";
import { BsGithub, BsLinkedin } from "react-icons/bs";

function Links() {
  return (
    <div className={styles.container}>
      <a className={styles.linkItem} href="" target="_blank">
        <BsGithub />
      </a>
      <a className={styles.linkItem} href="" target="_blank">
        <BsLinkedin />
      </a>
    </div>
  );
}

export default Links;
