import React from "react";
import { MDBRow, MDBBtn, MDBContainer } from "mdbreact";
import ModalView from "../modal";
import CustomTable from "../table";
import HomeForm from "./home_form";

export default class HomePage extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      modalOpen: false,
      currentRow: {}
    };
    this.toogleModal = this.toogleModal.bind(this);
  }

  toogleModal = () => {
    this.setState({
      modalOpen: !this.state.modalOpen
    });
  };

  render() {
    const columns = [
      {
        field: "Id"
      },
      {
        field: "First"
      },
      {
        field: "Actions"
      }
    ];
    const rows = [
      {
        field: "1",
        name: "Revolution 2020",
        price : 1000,
        publication : "Nepal",
        rating : 5,
        author: "Reeman"
      },
      {
        field: "2",
        name: "50 shades of grave",
        price : 2000,
        publication : "Nepal",
        rating : 5,
        author: "Reeman"
      }
    ];
    return (
      <React.Fragment>
        <MDBContainer> My Book List </MDBContainer>
        <MDBContainer>
          {" "}
          <MDBBtn className="btn home_btn" onClick={() => {this.toogleModal(); this.setState({currentRow: {}})}}>
            +Add
          </MDBBtn>
          <ModalView
            show={this.state.modalOpen}
            onToogle={this.toogleModal}
            title={Object.entries(this.state.currentRow).length == 0 ? "Add Book" : "Edit Book"}
          >
            <HomeForm row={this.state.currentRow}/>
          </ModalView>
        </MDBContainer>
        <MDBContainer>
          <CustomTable columns={columns}>
            {rows.map((row: any, index: number) => {
              return (
                <tr>
                  <td>{row.field}</td>
                  <td>{row.name}</td>
                  <td>
                    <MDBBtn onClick={() => {this.toogleModal(); this.setState({currentRow: rows[index]})} } >Edit</MDBBtn>
                    <MDBBtn onClick={() => {this.setState({currentRow: rows[index]})}}>Delete</MDBBtn>
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
