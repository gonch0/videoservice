import React, { useEffect } from "react";
import { connect } from "react-redux";
import Tabs from "components/Tabs";
import useFetch from "use-http";
import { setChannels } from "../../actions/filmsActions";

const Channels = ({ setChannels, channels }) => {
  const { get, loading, error } = useFetch("/channels.json", []);
  async function loadChannels() {
    if (!error) {
      const data = await get();

      setChannels(data);
    }
  }

  useEffect(() => {
    loadChannels();
  }, []);
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

const mapDispatchToProps = (dispatch) => {
  return {
    setChannels: (channel) => dispatch(setChannels(channel)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Channels);
