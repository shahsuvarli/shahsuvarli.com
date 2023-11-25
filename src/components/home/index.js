import React from "react";
import styles from "./home.module.css";
import Stack from "./stack";
import Link from "next/link";
import { BsGithub, BsLinkedin, BsYoutube } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

function HomeContainer() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className={styles.subContainer}>
        <div className="w-full  flex justify-evenly items-center flex-col p-8">
          <h1 className={styles.contentHeader}>Elvin Shah</h1>
          <p className={styles.position}>frontend developer</p>
          <span className="text-sm m-4 border-solid border-2 border-[#fff6ff55] rounded-lg p-2 shadow-md hover:scale-125 duration-500">
            <Link
              href={
                "mailto:el.shahsuvarli@gmail.com?subject=Hey%20hey&body=Hey Elvin!%0A%0AYou%20have%20a%20perfect%20portfolio!"
              }
            >
              <AiOutlineMail size={24} />
            </Link>
          </span>
          <div className="flex flex-row justify-center items-center gap-4 h-12">
            <Link
              href={
                "https://firebasestorage.googleapis.com/v0/b/portfolio-82fbb.appspot.com/o/Elvin%20Shahsuvarli%20resume.pdf?alt=media&token=3b95340c-0bc7-4cbb-9a24-37b2f1b073b6"
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
