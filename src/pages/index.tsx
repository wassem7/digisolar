import { type NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import SignIn from "@/components/SignIn";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Water Purity Checker </title>
        <meta name="description" content="Water purity checker" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <SignIn />
      </main>
    </>
  );
};

export default Home;
