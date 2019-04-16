import axios from "axios";
require("dotenv").config();

//This util pulls from Google Books API, not the local db

const API_KEY =`${process.env.REACT_APP_API_KEY}`

export default {
  getBooksGoogle: function(search, apikey) {
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=intitle:${search}&key=${API_KEY}&country=US`);    
  }
};
