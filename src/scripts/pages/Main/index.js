import React from "react";
import Tabs from "components/Tabs";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Main = ({ films }) => {
  const renderFilms = () => {
    return (
      <ul className="films-list grid-row-24">
        {films &&
          films.map((film) => (
            <li key={film.id}>
              <img src={film.image} alt={film.title} />

              <Link to={`/movie/${film.id}`}>{film.title}</Link>
            </li>
          ))}
      </ul>
    );
  };

  return (
    <main className="main">
      <Tabs />
      {renderFilms()}
    </main>
  );
};

const mapStateToProps = (store) => {
  return {
    films: store.films.results,
  };
};

export default connect(mapStateToProps)(Main);
