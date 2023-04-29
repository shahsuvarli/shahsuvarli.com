import React from "react";
import styles from "./home.module.css";

function Stack() {
  return (
    <div className={styles.stack}>
      <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
          alt="react"
        />
      </a>
      <a href="https://firebase.google.com" target="_blank" rel="noreferrer">
        <img
          src="https://user-images.githubusercontent.com/290451/76235994-04b94800-623d-11ea-9b5b-f7a1626ecb06.png"
          alt="firebase"
        />
      </a>
      <a
        href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
          alt="javascript"
        />
      </a>
      <a href="https://styled-components.com" target="_blank" rel="noreferrer">
        <img
          src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/styled-components/styled-components.png"
          alt="styled-components"
        />
      </a>
      <a href="https://mui.com" target="_blank" rel="noreferrer">
        <img src="https://v4.mui.com/static/logo.png" alt="styled-components" />
      </a>
      <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer">
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
          alt="html5"
        />
      </a>
      <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer">
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
          alt="css3"
        />
      </a>
      <a
        href="https://www.w3schools.com/jquery/"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src="https://cdn.icon-icons.com/icons2/2415/PNG/512/jquery_plain_wordmark_logo_icon_146445.png"
          alt="jquery"
        />
      </a>
      <a href="https://www.figma.com/" target="_blank" rel="noreferrer">
        <img
          src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg"
          alt="figma"
        />
      </a>
      <a href="https://git-scm.com/" target="_blank" rel="noreferrer">
        <img
          src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
          alt="git"
        />
      </a>
      <a href="https://www.mysql.com/" target="_blank" rel="noreferrer">
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg"
          alt="mysql"
        />
      </a>
      <a href="https://www.sqlite.org/" target="_blank" rel="noreferrer">
        <img
          src="https://www.vectorlogo.zone/logos/sqlite/sqlite-icon.svg"
          alt="sqlite"
        />
      </a>
      <a href="https://redux.js.org" target="_blank" rel="noreferrer">
        <img
          src="https://avatars.githubusercontent.com/u/13142323?s=200&v=4"
          alt="redux"
        />
      </a>
      <a href="https://nextjs.org" target="_blank" rel="noreferrer">
        <img
        id={styles.nextjs}
          src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg"
          alt="nextjs"
        />
      </a>
    </div>
  );
}

export default Stack;
