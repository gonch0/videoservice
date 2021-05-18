import React, { useState } from "react";

import Auth from "../Auth";

export default function Header() {

  const onFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <header className="header">
      <h1>Видеосервис</h1>

      <form onSubmit={onFormSubmit}>
        <input type="text" placeholder={`text`} />

        <button className="btn" type="submit">
          Найти
        </button>
      </form>

      <Auth />

    </header>
  );
}
