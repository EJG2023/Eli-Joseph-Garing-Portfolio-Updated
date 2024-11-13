import React from 'react';
import styles from '../sections/Projects/ProjectStyles.module.css';

function ProjectCard({ src, link, h3, p }) {
  return (
    <a href={link} target="_blank">
        <img className="hover" src={src} alt={h3} />
        <h3>{h3}</h3>
            <p className={styles.description}>
               {p}
            </p>
    </a>
  );
}

export default ProjectCard;