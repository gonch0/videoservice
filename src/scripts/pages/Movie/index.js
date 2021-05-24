import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import useFetch from "use-http";
import { setFilms } from "../../actions/filmsActions";
import { useHistory } from "react-router-dom";

const Movie = ({ setFilms, films }) => {
  const { get, loading, error } = useFetch("/films.json", []);
  const history = useHistory();
  const { pathname } = history.location;
  const [filmInfo, setFilmInfo] = useState({});

  const currentMovieId = pathname.split("/").pop();

  async function loadFilms() {
    if (!error) {
      const films = await get();
      setFilms(films);

      if (films.length > 0) {
        const info = films.filter(
          (item) => JSON.stringify(item.id) === currentMovieId
        );

        setFilmInfo(...info);
      }
    }
  }

  useEffect(() => {
    loadFilms();
  }, []);

  return (
    <main className="main">
      <div className="movie">
        <img src={filmInfo.image} alt={filmInfo.title} />

        <div className="right">
          <dl className="dl-grid mb-24">
            <dt>Название</dt>
            <dd>{filmInfo.title}</dd>

            <dt>Страна</dt>
            <dd>{filmInfo.country}</dd>

            <dt>Жанр</dt>
            <dd>{filmInfo.genre}</dd>
          </dl>

          <p>{filmInfo.description}</p>
        </div>
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Movie);
