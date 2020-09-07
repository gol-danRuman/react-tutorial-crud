import React from "react";
import { MDBRow, MDBBtn } from "mdbreact";
import { MDBInput } from "mdbreact";
import { MDBContainer } from "mdbreact";
import { MDBCol } from "mdbreact";
import { postBookApi, updateBookApi } from "../../../Api/bookApi";

export default class HomeForm extends React.Component<any, any> {
  constructor(props: any){
    super(props);
    this.state = {
        name: null,
        price: null,
        publication: null,
        rating: null,
        author: null
    }
    this.handleInput = this.handleInput.bind(this);

    this.addBook = this.addBook.bind(this);
    this.editBook = this.editBook.bind(this);
    
  }

  handleInput = (e: any) => {
      this.setState({
        [e.target.name]: e.target.value
      })
  }

addBook = () => {
  this.props.onToogle();
  const name = this.state.name == null ? this.props.row.name : this.state.name;
  const price = this.state.price == null ? this.props.row.price : this.state.price;
  const publication = this.state.publication == null ? this.props.row.publication : this.state.publication;
  const rating = this.state.rating == null ? this.props.row.rating : this.state.rating;
  const author = this.state.author == null ? this.props.row.author : this.state.author;
  const form = new FormData();
  form.append("name", name);
  form.append("price", price);
  form.append("publication", publication);
  form.append("rating", rating);
  form.append("author", author);
  postBookApi(form)
            .then((res: any) => {
                this.props.updateRow(true, res);
            })
            .catch((err: any) => {
                console.log('Book Add On Error');
            });
};

editBook = () => {
  this.props.onToogle();
  const name = this.state.name == null ? this.props.row.name : this.state.name;
  const price = this.state.price == null ? this.props.row.price : this.state.price;
  const publication = this.state.publication == null ? this.props.row.publication : this.state.publication;
  const rating = this.state.rating == null ? this.props.row.rating : this.state.rating;
  const author = this.state.author == null ? this.props.row.author : this.state.author;
  const form = new FormData();
  form.append("name", name);
  form.append("price", price);
  form.append("publication", publication);
  form.append("rating", rating);
  form.append("author", author);
  updateBookApi(this.props.row.bookId, form)
            .then((res: any) => {
                this.props.updateRow(false, res);
            })
            .catch((err: any) => {
                console.log('Book Update On Error');
            });
};

  render() {
      const {row, onToogle} = this.props;

      
    return (
      <React.Fragment>
        <MDBContainer>
          <MDBRow>
            <MDBCol md="12">
              {/* <MDBCard>
                <MDBCardBody> */}
                  <form>
                    <div className="grey-text">
                      <MDBInput
                        label="Book Name"
                        icon="book"
                        group
                        name="name"
                        type="text"
                        validate
                        valueDefault={row && row.name}
                        error="wrong"
                        success="right"
                        onInput={this.handleInput}
                      />
                      <MDBInput
                        label="Price"
                        icon="dollar-sign"
                        group
                        name="price"
                        type="number"
                        validate
                        valueDefault={row && row.price}
                        error="wrong"
                        success="right"
                        onInput={this.handleInput}
                      />
                      <MDBInput
                        label="Book Author"
                        icon="user"
                        group
                        type="text"
                        validate
                        name="author"
                        valueDefault={row && row.author}
                        error="wrong"
                        success="right"
                        onInput={this.handleInput}
                      />
                      <MDBInput
                        label="Publication"
                        icon="book-open"
                        group
                        name="publication"
                        type="text"
                        valueDefault={row && row.publication}
                        validate
                        onInput={this.handleInput}
                      />
                      <MDBInput
                        label="Rating"
                        icon="star"
                        group
                        name="rating"
                        valueDefault={row && row.rating}
                        type="text"
                        validate
                        onInput={this.handleInput}
                      />
                    </div>
                    <div className="text-center py-4 mt-3">
                    <MDBBtn color="red" onClick={onToogle} >
                        Close
                      </MDBBtn>
                      {
                        Object.entries(row).length == 0 
                        ? (<MDBBtn color="cyan" onClick={this.addBook}>
                            Add
                        </MDBBtn>) 
                      :(
                        <MDBBtn color="cyan" onClick={this.editBook}>
                        Update
                      </MDBBtn>
                      )
                      
                      }
                      
                    </div>
                  </form>
                {/* </MDBCardBody>
              </MDBCard> */}
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </React.Fragment>
    );
  }
}
