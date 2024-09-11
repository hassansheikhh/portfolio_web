import styles from "./About.module.css";
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
  faEnvira,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const About = () => {
  return (
    <div id="about" className={styles.about}>
      <div data-aos="fade-left" className={styles.left}>
        <div className={styles.cube}>
          <div className={styles.box + " " + styles.box1}>
            <FontAwesomeIcon icon={faEnvira} />
          </div>

          <div className={styles.box + " " + styles.box2}>
            <FontAwesomeIcon icon={faHtml5} />
          </div>

          <div className={styles.box + " " + styles.box3}>
            <FontAwesomeIcon icon={faCss3} />
          </div>

          <div className={styles.box + " " + styles.box4}>
            <FontAwesomeIcon icon={faReact} />
          </div>

          <div className={styles.box + " " + styles.box5}>
            <FontAwesomeIcon icon={faJsSquare} />
          </div>

          <div className={styles.box + " " + styles.box6}>
            <FontAwesomeIcon icon={faGitAlt} />
          </div>
        </div>
      </div>

      <div data-aos="fade-right" className={styles.right}>
        <h1 className={styles.title}>About Me</h1>
        <p className={styles.sub}>
          "Design is not just what it looks like and feels like. Design is how
          it works" - Steve Jobs
        </p>
        <p className={styles.description}>
          I'm a passionate Frontend Developer with expertise in crafting responsive, dynamic websites and web applications. My skill set includes HTML, CSS, Bootstrap, GSAP, Webflow, WordPress, React, Next.js, Redux, Material UI, Pug, Gulp, and many more. I thrive in creating seamless user experiences with modern tools and technologies, always pushing the boundaries of web development to deliver high-quality, engaging solutions.
        </p>
      </div>
    </div>
  );
};

export default About;
