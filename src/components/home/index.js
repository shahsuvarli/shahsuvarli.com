import React from "react";
import styles from "./home.module.css";
import Stack from "./stack";
import Link from "next/link";
import { BsGithub, BsLinkedin, BsYoutube } from "react-icons/bs";

function HomeContainer() {
  return (
    <div className="w-[100%] h-screen flex flex-col justify-center items-center">
      <div className={styles.subContainer}>
        <div className="w-2/5 flex justify-evenly items-center flex-col pr-8">
          <h1 className={styles.contentHeader}>Elvin Shah</h1>
          <p className={styles.position}>frontend developer</p>
          <span className="text-sm m-4 border border-white rounded-sm">
            el.shahsuvarli@gmail.com
          </span>
          <div className="flex flex-row justify-center items-center gap-4 h-12">
            <Link
              href={
                "https://firebasestorage.googleapis.com/v0/b/portfolio-82fbb.appspot.com/o/Elvin%20Shahsuvarli%20CV.pdf?alt=media&token=19383572-798f-41f9-ab0c-fd50aa6df86b"
              }
              target="_blank"
            >
              <button className={styles.button}>resume</button>
            </Link>
            <Link href={"/projects"} className={styles.buttonLink}>
              <button className={styles.button}>projects</button>
            </Link>
          </div>
          <div className={styles.icons}>
            <Link href="https://github.com/shahsuvarli" target="_blank">
              <BsGithub size={30} />
            </Link>
            <Link href="https://linkedin.com/in/shahsuvarli" target="_blank">
              <BsLinkedin size={30} />
            </Link>
            <Link
              href="https://www.youtube.com/channel/UCisTXXhZhVMsEJW_tv54mGg"
              target="_blank"
            >
              <BsYoutube size={30} />
            </Link>
          </div>
        </div>
        <Stack />
      </div>
    </div>
  );
}

export default HomeContainer;
