import React, { useState, useEffect } from "react";
import { setFilms } from "../../actions/filmsActions";
import { connect } from "react-redux";
import Tabs from "components/Tabs";
import useFetch from "use-http";
import { Link } from "react-router-dom";

const Main = ({ setFilms, films }) => {
  const { get, loading, error } = useFetch("/films.json", []);

  async function loadFilms() {
    if (!error) {
      const data = await get();
      setFilms(data);
    }
  }

  useEffect(() => {
    loadFilms();
  }, []);

  const renderFilms = () => {
    return (
      <ul className="grid-row-24">
        {films &&
          films.map((film) => (
            <li key={film.id}>
              <Link to={`/movie/${film.id}`}>{film.title}</Link>
            </li>
          ))}
      </ul>
    );
  };

  return (
    <main className="main">
      <Tabs />
      {error && "Error!"}
      {loading && "Loading..."}
      {!error && renderFilms()}
    </main>
  );
};

const mapStateToProps = (store) => {
  return {
    films: store.films.items,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setFilms: (film) => dispatch(setFilms(film)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
