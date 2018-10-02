import React, { Component } from "react";
import { graphql } from "react-apollo";

import fetchSongDetail from "../queries/fetchSongDetail";

class SongDetail extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h3>Song Details</h3>
      </div>
    );
  }
}

export default graphql(fetchSongDetail, {
  options: props => {
    return { variables: { id: props.params.id } };
  }
})(SongDetail);
