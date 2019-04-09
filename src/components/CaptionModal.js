import React from 'react';
import { Modal, Input, Header } from 'semantic-ui-react';
import './Modal.css';

class CaptionModal extends React.Component {
  state = {
    caption: '',
    charsRemaining: 60
  };

  handleInput = e => {
    let charsRemaining = 60 - e.target.value.length;
    this.setState({
      caption: e.target.value,
      charsRemaining
    });
  };

  keyPress = e => {
    let event = e;
    if (!event) {
      event = { keyCode: 13 };
    }
    if (event.keyCode === 13 && this.state.charsRemaining >= 0) {
      this.props.toggleModal('captionModalOpen', this.state.caption);
    }
  };

  render = () => (
    <Modal dimmer="blurring" open={this.props.open}>
      <Modal.Header>Caption Your Photo (60 character limit)</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <Header>{this.state.charsRemaining} characters remaining</Header>
          <Input
            fluid
            placeholder="Caption Here"
            value={this.state.caption}
            onChange={this.handleInput}
            onKeyDown={this.keyPress}
            action={{
              color: 'teal',
              content: 'Submit',
              onClick: () => {
                this.keyPress();
              }
            }}
          />
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
}

export default CaptionModal;
