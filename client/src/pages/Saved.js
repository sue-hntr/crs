//detail.js from #11 
import React, { Component } from "react";
import BookDataAxios from "../utils/BookDataAxios";
import Container from "../components/Container";
import DeleteBtn from "../components/DeleteBtn";


class Saved extends Component {
  state = {
    books: []
  };

  
  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  componentDidMount() {
    BookDataAxios.getBooks()
      .then(res => this.setState({ books: res.data }))
      .catch(err => console.log(err));
  };

  deleteBook = id => {
    BookDataAxios.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

loadBooks = () => {
  BookDataAxios.getBooks()
    .then(res =>
      this.setState({ books: res.data, title: "", author: "", synopsis: "" })
    )
    .catch(err => console.log(err));
};


  render() {
    return (
      <Container style={{ minHeight: "80%" }}> */}
      <h1 className="text-center"> Database </h1>
          {this.state.books.map(book => (
             <p key={book._id}>
             <strong> 
                  {book.title} by {book.author} 
                 </strong> 
              <DeleteBtn onClick={() => this.deleteBook(book._id)} /> 
             </p>
          ))}
            </Container>
        
      );
    }
  }

export default Saved;


