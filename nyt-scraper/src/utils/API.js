import axios from 'axios';

export default {
  // Queries the NYT for articles
  queryNYT: (queryURL) => axios.get(queryURL),
  // Gets all articles
  getArticles: () => axios.get("/api/articles"),
  // Gets the article with the given id
  getArticle: (id) => axios.get("/api/articles/" + id),
  // Deletes the article with the given id
  deleteArticle: (id) => axios.delete("/api/articles/" + id),
  // Saves an article to the database
  saveArticle: (articleData) => axios.post("/api/articles", articleData)
};