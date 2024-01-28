import React from "react";
import styles from "./home.module.css";
import Stack from "./stack";
import Link from "next/link";
import { BsGithub, BsLinkedin, BsYoutube } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

function HomeContainer() {
  return (
    <div className="w-full flex flex-col justify-center items-center text-[#dddada]">
      <div className={styles.subContainer}>
        <div className="w-full flex justify-evenly items-center flex-col p-8">
          <h1 className={styles.contentHeader}>Elvin Shah</h1>
          <p className={styles.position}>react frontend developer</p>
          <div className={styles.icons}>
            <Link href="https://github.com/shahsuvarli" target="_blank">
              <BsGithub size={30} color="#dddada" />
            </Link>
            <Link href="https://linkedin.com/in/shahsuvarli" target="_blank">
              <BsLinkedin size={30} color="#dddada" />
            </Link>
            <Link
              href="https://www.youtube.com/channel/UCisTXXhZhVMsEJW_tv54mGg"
              target="_blank"
            >
              <BsYoutube size={30} color="#dddada" />
            </Link>
            <Link
              href={
                "mailto:el.shahsuvarli@gmail.com?subject=Hey%20hey&body=Hey Elvin!%0A%0AYou%20have%20a%20perfect%20portfolio!"
              }
            >
              <AiOutlineMail size={30} color="#dddada" />
            </Link>
          </div>
          <div className="flex flex-row justify-center items-center gap-4 h-12 mt-4">
            <Link
              href={
                "https://firebasestorage.googleapis.com/v0/b/portfolio-82fbb.appspot.com/o/Elvin%20Shahsuvarli.pdf?alt=media&token=4aef01b1-f69d-46d8-aeda-55de200dd10d"
              }
              target="_blank"
            >
              <button className={styles.button}>resume</button>
            </Link>
            <Link href={"/projects"} className={styles.buttonLink}>
              <button className={styles.button}>projects</button>
            </Link>
          </div>
        </div>
        <Stack />
      </div>
    </div>
  );
}

export default HomeContainer;
