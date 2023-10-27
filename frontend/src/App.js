import React from "react";
import { useSelector } from "react-redux";
import "./App.css";
import Hero from "./components/Hero";

export default function App() {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  console.log(isLoggedIn);
  return (
    <div>
      <Hero></Hero>
    </div>
  );
}
