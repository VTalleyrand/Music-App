"use client";
import React, { useEffect } from "react";
import styles from "./page.module.css";
import writersImage from "../../../../images/writers.webp";
import { signIn, useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const Page = () => {
  const { data: session } = useSession();

  useEffect(() => {
    if (session && session?.user) {
      redirect("/dashboard");
    }
  }, [session]);

  const customStyle = {
    backgroundImage: `url(${writersImage.src})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  const handleSignin = (e) => {
    e.preventDefault();
    signIn("google");
  };

  return (
    <main className={styles["signin-section"]}>
      <div className={styles["signin-auth"]}>
        <form onSubmit={handleSignin} className={styles["signin-form"]}>
          <hr />
          <h1 style={{ color: "white" }}>Sign In to Aurelius</h1>
          <button type="submit" className={styles["signin-google-btn"]}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="20"
              height="20"
              viewBox="0 0 50 50"
            >
              <path
                d="M 25.996094 48 C 13.3125 48 2.992188 37.683594 2.992188 25 C 2.992188 12.316406 13.3125 2 25.996094 2 C 31.742188 2 37.242188 4.128906 41.488281 7.996094 L 42.261719 8.703125 L 34.675781 16.289063 L 33.972656 15.6875 C 31.746094 13.78125 28.914063 12.730469 25.996094 12.730469 C 19.230469 12.730469 13.722656 18.234375 13.722656 25 C 13.722656 31.765625 19.230469 37.269531 25.996094 37.269531 C 30.875 37.269531 34.730469 34.777344 36.546875 30.53125 L 24.996094 30.53125 L 24.996094 20.175781 L 47.546875 20.207031 L 47.714844 21 C 48.890625 26.582031 47.949219 34.792969 43.183594 40.667969 C 39.238281 45.53125 33.457031 48 25.996094 48 Z"
                fill="#FFFFFF"
              ></path>
            </svg>
            Sign in with Google
          </button>
          <p className={styles["terms"]}>
            By signing up, you agree to the Terms of Service and Privacy Policy.
          </p>
          <hr />
        </form>
      </div>
      <div className={styles["signin-left"]} style={customStyle}></div>
    </main>
  );
};

export default Page;
