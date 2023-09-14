"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import { getProviders, signIn, useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

const Login = ({ url }) => {
  const session = useSession();
  const router = useRouter();
  const params = useSearchParams();
  const [error, setError] = useState("");

  useEffect(() => {
    setError(params.get("error"));
  }, [params]);

  if (session.status === "loading") {
    return <p>Loading...</p>;
  }

  if (session.status === "authenticated") {
    router?.push("/");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const password = e.target[1].value;

    signIn("credentials", {
      name,
      password,
    });
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome</h1>
      <h2 className={styles.subtitle}>Please sign in.</h2>

      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          placeholder="Name"
          required
          className={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          required
          className={styles.input}
        />
        <button className={styles.button}>Login</button>
        {error && error}
      </form>

    </div>
  );
};

export default Login;
