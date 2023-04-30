import React from "react";
import styles from "./articles.module.css";
import { BiComment } from "react-icons/bi";
import articles from "../../utils/articles.json";
import Link from "next/link";

function ArticlesContainer() {
  return (
    <div className={styles.articlesContainer}>
      <div className={styles.cardsContainer}>
        {articles.map((article) => {
          return (
            <Link href={`/articles/${article.id}`} key={article.header} style={{textDecoration:'none'}}>
              <div className={styles.card}>
                <div className={styles.cardImages}>
                  <img
                    src="https://via.placeholder.com/120x120"
                    alt={article.header}
                  />
                </div>
                <div className={styles.cardContent}>
                  <h2>{article.header}</h2>
                  <p className={styles.content}>
                    {article.article.slice(0, 100)}
                  </p>
                  <div className={styles.cardDetails}>
                    <span className={styles.readCount}>
                      {article.article.split(" ").length} words
                    </span>
                    <span className={styles.commentIcon}>
                      <BiComment color="#666"/>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default ArticlesContainer;
