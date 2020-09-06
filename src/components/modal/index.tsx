import * as React from "react";
import { MDBModal, MDBModalHeader, MDBModalBody, MDBContainer } from "mdbreact";
import { MDBModalFooter } from "mdbreact";
import { MDBBtn } from "mdbreact";

interface IModalViewProps {
  onToogle: () => void;
  title: string;
  show?: boolean;
}

const ModalView: React.SFC<IModalViewProps> = props => {
  const { onToogle, title, show } = props;
  return (
    <MDBContainer>
      <MDBModal toogle={() => onToogle} className="addModal" isOpen={show}>
        <MDBModalHeader
          className="text-center"
          titleClass="w-100 font-weight-bold"
          toogle={onToogle}
        >
          {title}
          <button
            type="button"
            onClick={onToogle}
            className="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </MDBModalHeader>
        <MDBModalBody>{props.children}</MDBModalBody>
      </MDBModal>
    </MDBContainer>
  );
};
ModalView.defaultProps = {
  show: true
};
export default ModalView;
