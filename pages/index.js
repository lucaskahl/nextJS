import React from "react";

import Link from "next/link";
import Head from "next/head";

const Home = () => (
  <div>
    <Head>
      <title>Inicio</title>
    </Head>
    <h1>Hello World</h1>
    <Link href="/users">
      <a>Usuários</a>
    </Link>
  </div>
);

export default Home;
