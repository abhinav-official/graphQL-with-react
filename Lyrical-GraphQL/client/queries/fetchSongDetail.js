import gql from "graphql-tag";

export default gql`
  query SongDetails($id: ID!) {
    song(id: $id) {
      id
      title
      lyrics {
        id
        content
      }
    }
  }
`;
