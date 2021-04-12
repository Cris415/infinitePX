import React from 'react';
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const UploadImageInput = (props) => {
  return (
    <div className="image-upload">
      <label>
        <FontAwesomeIcon icon={faArrowUp} />
        Upload a photo
        <input
          type="file"
          accept="image/jpeg"
          className="file-input"
          required
          onChange={props.handleFile}
        />
      </label>

      <div className="upload-requirements">
        <h3>Photo requirements</h3>
        <p>.jpg only</p>
        <p>Max. photo dimensions are 200MP/megapixels</p>
      </div>
    </div>  
  );
}

export default UploadImageInput;