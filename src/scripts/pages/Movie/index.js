import React from "react";
import { connect } from "react-redux";

const Movie = () => {


  return (
    <main className="main">
      <h1>{}</h1>

      <dl>
        <dt>Название</dt>
        <dd>...</dd>

        <dt>Страна</dt>
        <dd>...</dd>

        <dt>Жанр</dt>
        <dd>...</dd>
      </dl>
    </main>
  );
};

// const mapStateToProps = (store) => {
//   return {
//     currentTab: store.tabs.currentTab,
//   };
// };
//
// const mapDispatchToProps = (dispatch) => {
//   return {
//     setTabAction: (tabName) => dispatch(setTab(tabName)),
//   };
// };
//
export default Movie;
