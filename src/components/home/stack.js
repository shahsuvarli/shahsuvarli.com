import React from "react";
import styles from "./home.module.css";
import stack from "../../utils/stack.json";
import Image from "next/image";

function Stack() {
  return (
    <div className={styles.stack}>
      {stack.map((item, index) => {
        return (
          <a
            href={item.href}
            key={item.alt}
            target="_blank"
            rel="noreferrer"
            className={styles.stackElement}
          >
            <Image
              width={50}
              height={50}
              id={item.alt === "nextjs" ? styles.nextjs : undefined}
              src={item.src}
              alt={item.alt}
              title={item.alt}
            />
          </a>
        );
      })}
    </div>
  );
}

export default Stack;
