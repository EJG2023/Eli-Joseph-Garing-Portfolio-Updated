import styles from './HeroStyles.module.css';
import heroImg from '../../assets/grad-img-modified.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/Resume.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
    const { theme, toggleTheme } = useTheme();

    const themeIcon = theme === 'light' ? sun : moon;
    const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
    const githubIcon = theme === 'light' ? githubLight : githubDark;
    const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return <section id="hero" className={styles.container}>
    <div className={styles.colorModeContainer}>
        <img className={styles.hero} 
        /* image needs to be size of 300x300 */ 
        src={heroImg} 
        alt="Profile Picture of Eli Joseph Garing" 
        />
        <img className={styles.colorMode}
        src={themeIcon} 
        alt="Color mode Icon"
        onClick={toggleTheme}
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
        <p className={styles.description}>
            Passion for Web Development using React and Data Analytics
        </p>
        <a href={CV} download>
            <button className="hover">Resume</button>
        </a>
    </div>
  </section>;
  
}

export default Hero