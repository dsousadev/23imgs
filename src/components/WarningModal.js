import React from 'react';
import { Button, Header, Modal } from 'semantic-ui-react';

const WarningModal = props => {
  return (
    <Modal blurred="true" open={props.open} size="small">
      <Header icon="warning circle" content="Image too small" />
      <Modal.Content>
        <p>Please make sure your image is at least 614 x 614 pixels</p>
      </Modal.Content>
      <Modal.Actions>
        <Button
          color="teal"
          onClick={() => {
            props.toggleModal('warningVisible');
          }}
        >
          Okay
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default WarningModal;
