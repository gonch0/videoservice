import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import useFetch from "use-http";
import { setFilms } from "../../actions/filmsActions";
import { setComments, addComment } from "../../actions/commentsActions";
import { Link, useHistory } from "react-router-dom";

const Movie = ({
  setFilms,
  setComments,
  addComment,
  films,
  comments,
  user,
}) => {
  const { get, loading, error } = useFetch("/films.json", []);
  const {
    get: getCommentsFetch,
    loading: loadingCommentsFetch,
    error: errorCommentsFetch,
  } = useFetch("/comments.json", []);

  const history = useHistory();
  const { pathname } = history.location;

  const [filmInfo, setFilmInfo] = useState({});
  const [commentsList, setCommentsList] = useState([]);
  const [commentText, setCommentsText] = useState([]);
  const [commentCounter, setCommentCounter] = useState(0);

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

  async function loadComments() {
    if (!errorCommentsFetch) {
      const comments = await getCommentsFetch();
      setComments(comments);
    }
  }

  useEffect(() => {
    loadFilms();
    loadComments();
  }, []);

  useEffect(() => {
    if (comments !== undefined) {
      const relatedComments = comments.filter((item) => {
        return JSON.stringify(item.filmId) === currentMovieId;
      });

      setCommentsList(relatedComments);
    }
  }, [comments]);

  const sendComment = (e) => {
    e.preventDefault();

    setCommentCounter(commentCounter + 1);

    const comment = {
      id: commentCounter,
      filmId: +currentMovieId,
      userId: user.id,
      userName: user.name,
      text: commentText,
    };

    addComment(comment);
  };

  const onCommentInputChange = (e) => {
    setCommentsText(e.target.value);
  };

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

      <div className="comments">
        <div className="comments__create">
          <form
            onSubmit={sendComment}
            name="login-form"
            className="grid-row-24"
          >
            <textarea
              name="comment"
              id="comment"
              placeholder="Введите текст"
              onChange={onCommentInputChange}
            />

            <button className="btn" type="submit">
              Опубликовать
            </button>
          </form>
        </div>

        <div className="comments__list">
          {commentsList !== undefined &&
            commentsList.map((comment) => (
              <blockquote className="comments__item" key={comment.id}>
                <cite>{comment.userName}</cite>
                <p>{comment.text}</p>
              </blockquote>
            ))}
        </div>
      </div>
    </main>
  );
};

const mapStateToProps = (store) => {
  return {
    films: store.films.items,
    comments: store.comments.items,
    isLoggedIn: store.login.isLoggedIn,
    user: store.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setFilms: (film) => dispatch(setFilms(film)),
    setComments: (comments) => dispatch(setComments(comments)),
    addComment: (comment) => dispatch(addComment(comment)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Movie);
