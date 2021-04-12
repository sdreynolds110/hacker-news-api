import axios from "axios";

// eslint-disable-next-line
export default {
  searchByRelevance: function (searchTerm) {
    return axios.get(
      "https://hn.algolia.com/api/v1/search?query=" + searchTerm
    );
  },
};
