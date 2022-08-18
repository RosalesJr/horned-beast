import React from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

class SelectedBeast extends React.Component {
  render() {
    return (
      <Modal show={this.props.show} onHide={this.props.onHide}>
        <Modal.Dialog>

          <Modal.Header closeButton>
            <Modal.Title>{this.props.beast.title}</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <img src={this.props.beast.imageURL} alt={this.props.beast.description} />
            <p>{this.props.beast.description}</p>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="primary" onClick={this.props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal.Dialog>
      </Modal>
    );
  }
};

export default SelectedBeast;