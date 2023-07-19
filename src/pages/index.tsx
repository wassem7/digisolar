import { type NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import SignIn from "@/components/SignIn";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>DigiSolar </title>
        <meta name="description" content="DigiSolar" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <SignIn />
      </main>
    </>
  );
};

export default Home;
