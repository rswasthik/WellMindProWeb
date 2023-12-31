const xlsx = require("xlsx");
import { app, database, storage } from "@/firebaseConfig";
import { Button, ThemeProvider, Typography, createTheme } from "@mui/material";

import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import { Inter } from "@next/font/google";
import { FaFileUpload } from "react-icons/fa";
import { MdAccountCircle, MdPersonAdd } from "react-icons/md";

import { addDoc, collection } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Navbar2 from "../components/Navbar2";
import ParticleBackground from "../components/particleBackground";
const inter = Inter({ subsets: ["latin"] });

// const db = firebase.firestore();

export default function Notes() {
  //theme for mui
  const theme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#e6e6e6",
        contrastText: "#fff",
        color: "#fff",
      },
      color: "#fff",
    },
  });

  return (
    <>
      <Head>
        <title>Your Profile</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <Navbar2 />
      <main>
        <ParticleBackground />
        <ThemeProvider theme={theme}>
          <div className="h-auto  flex flex-col justify-center items-center py-8 ">
            <div
              style={{ zIndex: "1" }}
              className="  px-12 py-10 w-11/12 sm:w-10/12 md:w-4/5 lg:w-4/5 xl:w-1/2 glass-morphic border-2 border-black rounded-md flex flex-col box-border"
            >
              <div className="text-5xl text-white text-center">Profile</div>
              {/* <di v className="text-5x text-center">
              Upload Notes
            </di> */}
              {/* <div className="h-1" /> */}

              <div className="flex justify-center mt-8">
                <Avatar
                  className=""
                  alt="Remy Sharp"
                  sx={{ width: 120, height: 120 }}
                  src=""
                />
              </div>
              {/* Data fields */}
              <div className="flex flex-col  justify-center text-white mt-8 ">
                <Typography
                  sx={{ textAlign: "center", my: 1, letterSpacing: 2 }}
                >
                  Name: {"Emp_name"}
                </Typography>
                <Typography
                  sx={{ textAlign: "center", my: 1, letterSpacing: 2 }}
                >
                  Email: {"emp@something.com"}
                </Typography>
                <Typography
                  sx={{ textAlign: "center", my: 1, letterSpacing: 2 }}
                >
                  Emp ID: {"EMP1212"}
                </Typography>
              </div>
            </div>
          </div>
        </ThemeProvider>
      </main>
    </>
  );
}
