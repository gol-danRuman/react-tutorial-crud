import React from "react";
import { MDBRow, MDBBtn } from "mdbreact";
import { MDBInput } from "mdbreact";
import { MDBContainer } from "mdbreact";
import { MDBCol } from "mdbreact";
import { MDBCard } from "mdbreact";
import { MDBCardBody } from "mdbreact";

export default class HomeForm extends React.Component<any, any> {
  render() {
      const {row} = this.props;
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
                        type="text"
                        validate
                        valueDefault={row && row.name}
                        error="wrong"
                        success="right"
                      />
                      <MDBInput
                        label="Price"
                        icon="dollar-sign"
                        group
                        type="number"
                        validate
                        valueDefault={row && row.price}
                        error="wrong"
                        success="right"
                      />
                      <MDBInput
                        label="Book Author"
                        icon="user"
                        group
                        type="text"
                        validate
                        valueDefault={row && row.author}
                        error="wrong"
                        success="right"
                      />
                      <MDBInput
                        label="Publication"
                        icon="book-open"
                        group
                        type="text"
                        valueDefault={row && row.publication}
                        validate
                      />
                      <MDBInput
                        label="Rating"
                        icon="star"
                        group
                        valueDefault={row && row.rating}
                        type="text"
                        validate
                      />
                    </div>
                    <div className="text-center py-4 mt-3">
                    <MDBBtn color="red" type="submit">
                        Close
                      </MDBBtn>
                      <MDBBtn color="cyan" type="submit">
                        Submit
                      </MDBBtn>
                      
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
