import axios from "axios";

export default {
  // Gets all books
  getComments: function() {
    return axios.get("/api/comments");
  },
  // Gets the book with the given id
  getComment: function(id) {
    return axios.get("/api/comments/" + id);
  },
  // Deletes the book with the given id
  deleteComment: function(id) {
    return axios.delete("/api/comments/" + id);
  },
  // Saves a book to the database
  saveComment: function(bookData) {
    return axios.post("/api/comments", bookData);
  }
};