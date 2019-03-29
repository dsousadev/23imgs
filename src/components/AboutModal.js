import React from 'react';
import { Button, Modal } from 'semantic-ui-react';

const AboutModal = props => (
  <Modal dimmer="blurring" open={props.open}>
    <Modal.Header>About</Modal.Header>
    <Modal.Content>
      <Modal.Description>
        <ul>
          <li>
            <h2>23imgs is a simple web application built with React.</h2>
          </li>
          <li>Anyone can post an image, only the 23 most recent are posted.</li>
          <li>
            You cannot delete an image once you post it, it will be removed when it is the "24th"
            image.
          </li>
          <li>
            Code for both the React front-end and Node back-end can be found on:{' '}
            <a href="http://www.github.com/dsousadev">Github</a>
          </li>
        </ul>
      </Modal.Description>
    </Modal.Content>
    <Modal.Actions>
      <Button
        color="teal"
        icon="times"
        circular
        onClick={() => {
          props.toggleModal('aboutModalOpen');
        }}
      />
    </Modal.Actions>
  </Modal>
);

export default AboutModal;
