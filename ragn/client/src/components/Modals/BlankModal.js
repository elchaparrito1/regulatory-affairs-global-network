import React from "react";
import ReactDOM from "react-dom";
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
} from "./styled";

class BlankModal extends React.Component {

    render() {
        const { isOpen } = this.props;

        if(!isOpen) {
            return null;
        }

        return ReactDOM.createPortal (
            <Modal>
            <ModalContent>
                <ModalHeader>
                    <Close onClick={this.props.handleModal} className="close">&times;</Close>
                    {this.props.header}
                        </ModalHeader>
                            <ModalBody>
                                {this.props.body}
                            </ModalBody>
                        <ModalFooter>
                    <Row>
                        <Column lg="12" md="12" sm="12" xs="12">
                            <Button onClick={this.props.footerMethod}>{this.props.footer}</Button>
                        </Column>
                    </Row>
                </ModalFooter>
            </ModalContent>
        </Modal>,
        document.querySelector("#modal")
        )
    }
};

export default BlankModal;