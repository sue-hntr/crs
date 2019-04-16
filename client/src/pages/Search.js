import React, { Component } from "react";
import API from "../utils/API";
import BookDataAxios from "../utils/BookDataAxios";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";

class Search extends Component {
    state = {
      search: "",
      results: [],
      error: "",
      bookNow: []
    };
  
    // When the component mounts, get a list of all available base breeds and update this.state.breeds
    // componentDidMount() {
    //   console.log(API);
    //   API.getBooksGoogle()
    //     .then(res => this.setState({ results: res }))
    //     .catch(err => console.log(err));
    // };
  
    handleInputChange = event => {
      this.setState({ search: event.target.value });
    };
  
    handleFormSubmit = event => {
      event.preventDefault();
      API.getBooksGoogle(this.state.search)
        .then(res => {
          if (res.data.status === "error") {
            throw new Error(res.data);
          }
          console.log(res.data.items);
          this.setState({ results: res.data.items});
        })
        .catch(err => this.setState({ error: err.message }));
    };

    saveBook = book => {
      BookDataAxios.saveBook(book);
      // this.setState({
      //   bookNow: "the hobbit"      });
      // console.log(bookNow);  
      console.log(`I've been clicked`);
      console.log(this.props);
      

    }

    render() {

      return (
        <div>
          <Container style={{ minHeight: "80%" }}>
            <h1 className="text-center">Search for Books by Title</h1>
            <SearchForm
              handleFormSubmit={this.handleFormSubmit}
              handleInputChange={this.handleInputChange}
            />
          {this.state.results.map(result => ( 
            <SearchResults 
            saveBook={this.saveBook}
            key={result.id}
            title={result.volumeInfo.title}
            author={result.volumeInfo.authors}
            description={result.volumeInfo.description}
            />
            
          ))}
          </Container>
        </div>
      );
    }
  }
  
  export default Search;
  