import React from "react";
import { MDBRow, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from "mdbreact";

export default class CustomTable extends React.Component<any,any> {
  render() {
    const {columns, rows} = this.props;
    return (
      <React.Fragment>
        <MDBTable>
          <MDBTableHead color="primary-color" textWhite>
            <tr>
              {
                columns.map((column:any, index: any) => {
                  return <th key={index}>{column.field}</th>
                }
                )
              }
            </tr>
          </MDBTableHead>
          <MDBTableBody>
              {this.props.children}
            
          </MDBTableBody>
        </MDBTable>
      </React.Fragment>
    );
  }
}
