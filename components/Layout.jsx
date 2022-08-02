import React from "react";
import Navbar from "./Navbar";
import { Destaques } from "./Destaques";
import { CategoryMenu } from "./CategoryMenu";

export default function Layout({ children }) {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <main>     
        {children}
      </main>
    </>
  );
}
