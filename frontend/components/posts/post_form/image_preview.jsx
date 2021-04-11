import React from 'react';

const ImagePreview = ({photoUrl, title}) => {
  return(
    photoUrl ? (
      <div className="image-preview">
        <img src={photoUrl} />
        <span>{title}</span>
      </div>
    ) : null
  )
}

export default ImagePreview;