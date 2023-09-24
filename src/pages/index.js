import Head from "next/head";
import { Inter } from "next/font/google";
// import styles from "@/styles/Home.module.css";
import Layout from "@/components/layout";
import React from "react";
import HomeContainer from "../components/home/index";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ children }) {
  return (
    <Layout>
      <Head>
        <title>Portfolio | Elvin Shah</title>
        <meta name="description" content="Portfolio by Elvin Shahsuvarli" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <HomeContainer />
      </main>
    </Layout>
  );
}
