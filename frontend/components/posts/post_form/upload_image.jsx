import React from 'react';
import PostFormContainer from './post_form_container';

class UploadImage extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="upload-image">
        {/* <div>STUFF</div> */}
        <PostFormContainer /> 
      </div>
      )
  }
}

export default UploadImage;