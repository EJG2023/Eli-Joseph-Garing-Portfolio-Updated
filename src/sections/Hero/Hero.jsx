import styles from './HeroStyles.module.css';
import heroImg from '../../assets/grad-img.png';
import themeIcon from '../../assets/sun.svg';
import twitterIcon from '../../assets/twitter-light.svg';
import githubIcon from '../../assets/github-light.svg';
import linkedinIcon from '../../assets/linkedin-light.svg';
import CV from '../../assets/Resume.pdf'

function Hero() {
  return <section id="hero" className={styles.container}>
    <div className={styles.colorModeContainer}>
        <img className={styles.hero} 
        src={heroImg} 
        alt="Profile Picture of Eli Joseph Garing" 
        />
        <img className={styles.colorMode}
        src={themeIcon} 
        alt="Color mode Icon"
        />
    </div>
    <div className={styles.info}> 
        <h1>Eli Joseph Garing</h1>
        <h2>Web Developer / Data Analyst</h2>
        <span>
            <a href="https://twitter.com" target="_blank">
            <img src={twitterIcon} alt="Twitter Icon"/>
            </a>
            <a href="https://github.com/EJG2023" target="_blank">
            <img src={githubIcon} alt="github Icon"/>
            </a>
            <a href="https://www.linkedin.com/in/eli-joseph-garing-8376a42b6/" target="_blank">
            <img src={linkedinIcon} alt="linkedin Icon"/>
            </a>
        </span>
        <p>
            Passion for Web Development using React and Data Analytics
        </p>
        <a href={CV} download>
            <button className="hover">Resume</button>
        </a>
    </div>
  </section>;
  
}

export default Hero