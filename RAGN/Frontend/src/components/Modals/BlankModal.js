import React from 'react';
import ReactDOM from 'react-dom';
import {
  Row,
  Column,
  Modal,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Close,
  Button
} from './styled';
import FocusLock from 'react-focus-lock';

class BlankModal extends React.Component {
  render() {
    const { isOpen } = this.props;

    if (!isOpen) {
      return null;
    }

    return ReactDOM.createPortal(
      <FocusLock>
        <Modal>
          <ModalContent>
            <ModalHeader>
              <Close
                type="button  "
                onClick={this.props.handleModal}
                className="close"
                aria-label="close"
              >
                &times;
              </Close>
              {this.props.header}
            </ModalHeader>
            {/* <form> */}
            <ModalBody>{this.props.body}</ModalBody>
            <ModalFooter>
              <Row>
                <Column lg="12" md="12" sm="12" xs="12">
                  <Button
                    type="submit"
                    onClick={this.props.footerMethod}
                    aria-label="submit or send"
                  >
                    {this.props.footer}
                  </Button>
                </Column>
              </Row>
            </ModalFooter>
            {/* </form> */}
          </ModalContent>
        </Modal>
      </FocusLock>,
      document.querySelector('#modal')
    );
  }
}

export default BlankModal;
