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
  getComments: function() {
    return axios.get("/api/comments");
  },
  saveComment: function(articleObj) {
    return axios.post("/api/comments", articleObj);
  }
};