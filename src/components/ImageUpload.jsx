
import React from 'react';

const ImageUpload = ({ onImageUpload }) => {
  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      onImageUpload(e.target.files[0]);
    }
  };

  return (
    <div className="upload-container">
      <h2>Upload Your Image</h2>
      <p>Please upload the image you are concerned about.</p>
      <input type="file" onChange={handleImageChange} accept="image/*" />
    </div>
  );
};

export default ImageUpload;
