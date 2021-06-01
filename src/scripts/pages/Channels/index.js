import React from "react";
import { connect } from "react-redux";
import Tabs from "components/Tabs";

const Channels = ({ channels }) => {
  return (
    <main className="main">
      <Tabs />

      <ul className="channels grid-row-24">
        {channels !== undefined &&
          channels.map((channel) => <li key={channel.id}>{channel.title}</li>)}
      </ul>
    </main>
  );
};

const mapStateToProps = (store) => {
  return {
    channels: store.channels.items,
  };
};

export default connect(mapStateToProps)(Channels);
