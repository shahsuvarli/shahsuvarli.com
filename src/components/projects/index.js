import React from "react";
import styles from "./projects.module.css";
import projects from "../../utils/projects.json";
import Image from "next/image";
import { BsGithub } from "react-icons/bs";
import { BiHome, BiSlideshow } from "react-icons/bi";
import Link from "next/link";

function ProjectsContainer() {
  return (
    <div className={styles.projectsContainer}>
      <Link href={"/"}>
        <BiHome color="#fff" size={50} />
      </Link>
      <div className={styles.myProjects}>
        {projects.map((project) => {
          const imagePath = project.image;
          return (
            <div key={project.id} className={styles.projectContainer}>
              <div className={styles.projectCard}>
                <Image
                  // quality={100}
                  width={300}
                  height={300}
                  src={imagePath}
                  alt={project.name}
                  className={styles.projectImage}
                />
                <div className={styles.iconsContainer}>
                  <a href={project.githubLink} target="_blank">
                    <BsGithub size={40} color="#fff" />
                  </a>
                  <a href={project.viewLink} target="_blank">
                    <BiSlideshow size={40} color="#fff" />
                  </a>
                </div>
              </div>
              <p className={styles.projectName}>{project.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProjectsContainer;
