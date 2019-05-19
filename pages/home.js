import React from "react";
import styled from "styled-components";

import Link from "next/link";
import Head from "next/head";

import withAnalytics from "~/hocs/withAnalytics";

const Title = styled.h1`
  color: #069;
  font-size: 40px;
`;

const Home = () => (
  <div>
    <Head>
      <title>Inicio</title>
    </Head>
    <img src="/static/logo.png" width="300" />
    <Title>Hello World</Title>
    <Link href="/users">
      <a>Usuários</a>
    </Link>
  </div>
);

export default withAnalytics()(Home);
