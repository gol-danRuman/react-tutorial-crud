import React from "react";
import { MDBRow, MDBBtn, MDBContainer } from "mdbreact";
import ModalView from "../modal";
import CustomTable from "../table";
import HomeForm from "./home_form";
import "./home_page.scss";

import { getAllBookApi, deleteBookApi } from "../../Api/bookApi";

const rows = [
  {
    id: "1",
    name: "Revolution 2020",
    price: 1000,
    publication: "Nepal",
    rating: 5,
    author: "Reeman"
  },
  {
    id: "2",
    name: "50 shades of grave",
    price: 2000,
    publication: "Nepal",
    rating: 5,
    author: "Reeman"
  }
];
const columns = [
  {
    field: "Id"
  },
  {
    field: "Book Name"
  },
  ,
  {
    field: "Price"
  },
  ,
  {
    field: "Publication"
  },
  ,
  {
    field: "Rating"
  },
  ,
  {
    field: "Author"
  },
  {
    field: "Actions"
  }
];
export default class HomePage extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      modalOpen: false,
      currentRow: {},
      rows:[]
    };
    this.toogleModal = this.toogleModal.bind(this);
    this.deleteRow = this.deleteRow.bind(this);
    this.updateRow = this.updateRow.bind(this);
  }

  componentDidMount(){
      getAllBookApi()
        .then( (res: any) => {
          const bookList = res.map( (r: any) => ({
            ...r,
            bookId: r.id
          }))
          this.setState({rows: bookList})
        })
        .catch((err : any) => {
          alert('Error loading books list data')
        })
  }

  toogleModal = () => {
    this.setState({
      modalOpen: !this.state.modalOpen
    });
  };

  updateRow = (addStatus: boolean, row: any) => {
    const allRows = this.state.rows;
    if(addStatus){
        allRows.push(row);
        
    }else{
      const elementIndex = allRows.findIndex( (element: any) => element.bookId == row.bookId);
      allRows[elementIndex] = row;
    }
    this.setState({
      rows: allRows
    })
    
  }
  deleteRow = (row: any) => {
    alert("Are you sure ?");
    deleteBookApi(row.bookId)
      .then( (res: any) => {
        this.setState({
          rows: this.state.rows.filter((r:any) => r.bookId != row.bookId)
        })
      })
      .catch((err : any) => {
        alert('Error loading company data')
      })
  };
 

  render() {
    return (
      <React.Fragment>
        <MDBContainer className="home_title"> My Book List </MDBContainer>
        <MDBContainer>
          {" "}
          <MDBBtn
            className="btn home_btn"
            onClick={() => {
              this.toogleModal();
              this.setState({ currentRow: {} });
            }}
          >
            +Add
          </MDBBtn>
          <ModalView
            show={this.state.modalOpen}
            onToogle={this.toogleModal}
            title={
              Object.entries(this.state.currentRow).length == 0
                ? "Add Book"
                : "Edit Book"
            }
          >
            <HomeForm 
              row={this.state.currentRow} 
              onToogle={this.toogleModal} 
              updateRow={this.updateRow}
            />
          </ModalView>
        </MDBContainer>
        <MDBContainer>
          <CustomTable columns={columns}>
            {this.state.rows.map((row: any, index: number) => {
              return (
                <tr key={index}>
                  <td>{index+1}</td>
                  <td>{row.name}</td>
                  <td>{row.price}</td>
                  <td>{row.publication}</td>
                  <td>{row.rating}</td>
                  <td>{row.author}</td>

                  <td>
                    <MDBBtn
                      color="blue"
                      onClick={() => {
                        this.toogleModal();
                        this.setState({ currentRow: this.state.rows[index] });
                      }}
                    >
                      Edit
                    </MDBBtn>
                    <MDBBtn
                      color="red"
                      onClick={() => {
                        this.deleteRow(this.state.rows[index]);
                      }}
                    >
                      Delete
                    </MDBBtn>
                  </td>
                </tr>
              );
            })}
          </CustomTable>
        </MDBContainer>
      </React.Fragment>
    );
  }
}
