import React from 'react';

const ImageCard = props => {
  return (
    <div className="ImageCard">
      <img id="CardImage" src={'data:image/jpeg;base64,' + props.base64} alt="img" />
      <div className="CaptionArea">
        <div className="CaptionText">
          <p>{props.caption}</p>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
