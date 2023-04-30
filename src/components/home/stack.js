import React from "react";
import styles from "./home.module.css";
import stack from "../../utils/stack.json";
import Image from "next/image";

function Stack() {
  return (
    <div className={styles.stack}>
      {stack.map((item) => {
        return (
          <a href={item.href} key={item.alt}>
            <Image
              width={50}
              height={50}
              id={styles.nextjs}
              src={item.src}
              alt={item.alt}
            />
          </a>
        );
      })}
      {/* <a href="https://nextjs.org" target="_blank" rel="noreferrer">
        <img
          id={styles.nextjs}
          src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg"
          alt="nextjs"
        />
      </a> */}
    </div>
  );
}

export default Stack;
