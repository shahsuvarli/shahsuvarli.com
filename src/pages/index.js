import Head from "next/head";
import Layout from "@/components/layout";
import React from "react";
import HomeContainer from "../components/home/index";

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
