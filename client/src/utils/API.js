import axios from "axios";

export default {
  // Gets all books
  scrape: function() {
    return axios.get("/api/dashboard");
  },
  // Gets the book with the given id
  getArticles: function() {
    return axios.get("/api/articles");
  },
  deleteArticle: function(articleID) {
    return axios.delete("/api/articles/" +
      articleID)
  }
};