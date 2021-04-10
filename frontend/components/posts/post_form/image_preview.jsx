import React from 'react';

const ImagePreview = ({photoUrl, photoFile}) => {
  return(
    photoUrl ? (
      <div className="image-preview">
        <img src={photoUrl} />
        <span>{photoFile.name.split('.')[0]}</span>
      </div>
    ) : null
  )
}

export default ImagePreview;