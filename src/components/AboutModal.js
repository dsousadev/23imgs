import React from 'react';
import { Button, Modal } from 'semantic-ui-react';
import './Modal.css';

const AboutModal = props => (
  <Modal dimmer="blurring" open={props.open}>
    <Modal.Header>About</Modal.Header>
    <Modal.Content>
      <Modal.Description>
        <ul>
          <li id="Heading">
            <h2>23imgs is a simple web application built with React.</h2>
          </li>
          <li>Anyone can post an image, the 23 most recent are visible.</li>
          <li>
            An image is deleted once it becomes the "24th" in the feed.
          </li>
          <li>
          <a href="http://www.github.com/dsousadev">Code for this web app and the Node.js API</a>
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
