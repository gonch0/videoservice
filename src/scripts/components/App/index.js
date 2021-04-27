import React from "react";

import style from "./App.scss";
import Header from "components/Header";

export default function App() {
  return (
    <>
        <Header/>

      <div className={style.main}>
        <a href=""> Hello World!</a>
      </div>
    </>
  );
}
