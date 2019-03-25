import React from 'react';

const ImageCard = props => {
  return (
    <div className="ImageCard">
      <img id="CardImage" src={props.url} alt="img" />
      <div className="CaptionArea">
        <div className="CaptionText">
          <p>{props.caption}</p>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
