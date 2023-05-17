import styles from "./index.module.css";
import { useState } from "react";
import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import ReuseableButton from "../components/common/ReuseableButton";

import { api } from "@/utils/api";
import ColorPalette from "@/components/user/ColorPalette";
import ImageUpload from "@/components/user/ImageUpload";
import SignUpForm from "@/components/user/SignUpForm";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });
  const colors = ['pink', 'yellow', 'blue', 'black', 'red', 'green', 'orange'];
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingButtonTwo, setIsLoadingButtonTwo] = useState(false)
  const [isLoadingButtonThree, setIsLoadingButtonThree] = useState(false)

  const handleClick = () => {
    setIsLoading(true);
    // Simulating an asynchronous action
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  const handleClickButtonTwo = () => {
    setIsLoadingButtonTwo(true);
    // Simulating an asynchronous action
    setTimeout(() => {
      setIsLoadingButtonTwo(false);
    }, 2000);
  };

  const handleSubmit = () => {
    setIsLoadingButtonThree(true);
    // Simulating an asynchronous action
    setTimeout(() => {
      setIsLoadingButtonThree(false);
    }, 2000);
  };


  return (
    <>
          <SignUpForm onClick={handleSubmit}/>
    </>
  );
};

export default Home;

const AuthShowcase: React.FC = () => {
  const { data: sessionData } = useSession();

  const { data: secretMessage } = api.example.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined },
  );

  return (
    <div className={styles.authContainer}>
      <p className={styles.showcaseText}>
        {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
        {secretMessage && <span> - {secretMessage}</span>}
      </p>
      <button
        className={styles.loginButton}
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
};