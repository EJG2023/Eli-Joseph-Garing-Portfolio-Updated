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
            link="https://github.com/EJG2023/VR-Arcade-Basketball-Application"
            h3="VR Arcade Basketball Game"

            // Keep paragraph into 3 lines max for display
            p="Developed an immersive VR Arcade Basketball game using Unity and Blender, featuring 
               realistic basketball mechanics for a dynamic, arcade-style experience."
            />
             <ProjectCard src={BasketIcon} 
            link="https://github.com/EJG2023/Online-Grocery-Application-Project"
            h3="Online Grocery Shopping Application"
            p="Developed an Online Grocery Shopping Application with a health-centric experience and 
            personalized meal-planning, using Python (Flask) and MySQL for backend services, and React for frontend."
            />
            <ProjectCard src={ArcadeIcon} 
            link="https://github.com/EJG2023/VR-Arcade-Basketball-Application"
            h3="VR Arcade Basketball Game"
            p="Developed an immersive VR Arcade Basketball game using Unity and Blender, featuring 
               realistic basketball mechanics for a dynamic, arcade-style experience."
            />
             <ProjectCard src={BasketIcon} 
            link="https://github.com/EJG2023/Online-Grocery-Application-Project"
            h3="Online Grocery Shopping Application"
            p="Developed an Online Grocery Shopping Application with a health-centric experience and 
            personalized meal-planning, using Python (Flask) and MySQL for backend services, and React for frontend."
            />       
        </div>

    </section>
    
  );
}

export default Projects;