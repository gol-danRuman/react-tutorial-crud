import React from "react";
import { MDBRow, MDBBtn, MDBContainer } from "mdbreact";
import ModalView from "../modal";
import CustomTable from "../table";
import HomeForm from "./home_form";
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
      currentRow: {}
    };
    this.toogleModal = this.toogleModal.bind(this);
    this.deleteRow = this.deleteRow.bind(this);
  }

  toogleModal = () => {
    this.setState({
      modalOpen: !this.state.modalOpen
    });
  };

  deleteRow = (row: any) => {
    alert("Are you sure ?");
    console.log(row);
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
            />
          </ModalView>
        </MDBContainer>
        <MDBContainer>
          <CustomTable columns={columns}>
            {rows.map((row: any, index: number) => {
              return (
                <tr key={index}>
                  <td>{row.id}</td>
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
                        this.setState({ currentRow: rows[index] });
                      }}
                    >
                      Edit
                    </MDBBtn>
                    <MDBBtn
                      color="red"
                      onClick={() => {
                        this.deleteRow(rows[index]);
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
