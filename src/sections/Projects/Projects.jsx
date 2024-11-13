import styles from './ProjectStyles.module.css';
import ArcadeIcon from '../../assets/Arcade-Basketball.png';
import ProjectCard from '../../common/ProjectCard';
import BasketIcon from '../../assets/Green-Basket.png';


function Projects() {
  return (
    <section id="projects" className={styles.container}>
        <h1 className='sectionTitle'>Projects</h1>
        <div className={styles.projectsContainer}>
            <ProjectCard src={ArcadeIcon} 
            link="https://github.com/EJG2023/Arcade-Basketball"
            h3="VR Arcade Basketball Game"
            p="Developed an immersive VR Arcade Basketball game using Unity and Blender, featuring 
               realistic basketball mechanics for a dynamic, arcade-style experience."
            />
             <ProjectCard src={BasketIcon} 
            link="https://github.com/Je-et/GP_CS476"
            h3="Online Grocery Shopping Application"
            p="Developed an Online Grocery Shopping Application with a health-centric, personalized experience, 
            using Python (Flask) and MySQL for backend services, and React for a responsive frontend."
            />       
        </div>

    </section>
    
  );
}

export default Projects;