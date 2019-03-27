import React from 'react';
import ImageUploader from 'react-images-upload';
import { Button } from 'semantic-ui-react';

const Header = props => {
  return (
    <div className="Header">
      <div className="title">
        23imgs
        <Button
          className="About"
          size="mini"
          circular
          icon="question"
          onClick={() => {
            props.toggleModal('aboutModalOpen');
          }}
        />
      </div>
      {props.uploadVisible && (
        <ImageUploader
          id="ImageUploader"
          className="ImageUploader"
          withIcon={true}
          onChange={props.onDrop}
          buttonText="Upload Image"
          singleImage={true}
          imgExtension={['.jpg', '.png', '.gif', '.jpeg']}
          label="Max File Size: 500kb | Format: jpg / png / gif"
          maxFileSize={500000}
        />
      )}
    </div>
  );
};

export default Header;
