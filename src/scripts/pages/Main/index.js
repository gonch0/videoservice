import React from "react";
import { setTab } from "../../actions/tabActions";
import { connect } from "react-redux";

const Main = ({ currentTab, setTabAction }) => {
  const onFilmsTabClick = () => {
    setTabAction("films");
  };

  const onChannelsTabClick = () => {
    setTabAction("channels");
  };

  const renderFilms = () => {
    return (
      <div className="content films">
        <div className="news">
          <h2>Новинки</h2>

          <ul>
            <li>Мульт в кино. Выпуск №103. Некогда грустить!</li>
            <li>Новый Бэтмен</li>
            <li>Однажды... в Голливуде</li>
            <li>Стриптизёрши</li>
          </ul>
        </div>

        <div className="genres">
          <h2>Жанры</h2>

          <ul>
            <li>Мульт в кино. Выпуск №103. Некогда грустить!</li>
            <li>Новый Бэтмен</li>
            <li>Однажды... в Голливуде</li>
            <li>Стриптизёрши</li>
          </ul>
        </div>
      </div>
    );
  };

  const renderChannels = () => {
    return <div className="content films">channels</div>;
  };

  return (
    <main className="main">
      <h1>{currentTab}</h1>

      <div className="tabs">
        <button onClick={onFilmsTabClick} type={"button"} className="btn">
          Фильмы
        </button>
        <button onClick={onChannelsTabClick} type={"button"} className="btn">
          Телеканалы
        </button>
      </div>

      {currentTab === "films" && renderFilms()}
      {currentTab === "channels" && renderChannels()}
    </main>
  );
};

const mapStateToProps = (store) => {
  return {
    currentTab: store.tabs.currentTab,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setTabAction: (tabName) => dispatch(setTab(tabName)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
