import styles from './SkillsStyles.module.css';
import checkmarkIconDark from '../../assets/checkmark-dark.svg';
import checkmarkIconLight from '../../assets/checkmark-light.svg';
import SkillList from '../../common/SkillList';
import { useTheme } from '../../common/ThemeContext';


function Skills() {
    const { theme, toggleTheme } = useTheme();
    const checkmarkTheme = theme === 'light' ? checkmarkIconLight : checkmarkIconDark;
    

  return (
    <section id="skills" className={styles.container}>
       <h1 className="sectionTitle">Skills</h1>
       <div className={styles.skillList}>
        <SkillList src={checkmarkTheme} skill="HTML"/>
        <SkillList src={checkmarkTheme} skill="CSS"/>
        <SkillList src={checkmarkTheme} skill="JavaScript"/>
       </div>
        <hr/>
       <div className={styles.skillList}>
        <SkillList src={checkmarkTheme} skill="React"/>
        <SkillList src={checkmarkTheme} skill="Vue"/>
        <SkillList src={checkmarkTheme} skill="Vite"/>
        <SkillList src={checkmarkTheme} skill="Python"/>
       </div>
       <hr/>
       <div className={styles.skillList}>
       <SkillList src={checkmarkTheme} skill="Flask"/>
        <SkillList src={checkmarkTheme} skill="Node"/>
        <SkillList src={checkmarkTheme} skill="Git"/>
        <SkillList src={checkmarkTheme} skill="Bootstrap"/>
       </div>
    </section>
  )
}

export default Skills