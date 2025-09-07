import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useDropzone } from 'react-dropzone';
import './ImageUpload.css';

const ImageUpload = ({ onNext, onBack }) => {
  const [files, setFiles] = useState([]);
  const [showCaution, setShowCaution] = useState(false);

  const onDrop = useCallback(acceptedFiles => {
    setFiles(prevFiles => [
      ...prevFiles,
      ...acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      }))
    ]);
    if (acceptedFiles.length > 0) {
      setShowCaution(true);
    }
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: 'image/*'
  });

  const handleNext = () => {
    onNext({ images: files });
  };

  const handleSendWarning = () => {
    // Handle sending the warning
    console.log('Sending warning...');
  };

  const handleStartOver = () => {
    setFiles([]);
    setShowCaution(false);
  };

  const previews = files.map(file => (
    <img
      key={file.name}
      src={file.preview}
      alt={file.name}
      className="preview-image"
    />
  ));

  return (
    <div className="image-upload-container">
      {!showCaution ? (
        <>
          <h2>Upload Images/Screenshots</h2>
          <div {...getRootProps({ className: 'dropzone' })}>
            <input {...getInputProps()} />
            <p>Drag and drop some files here, or click to select files</p>
          </div>
          <aside className="preview-container">
            {previews}
          </aside>
          <div className="button-group">
            <button type="button" className="btn-secondary" onClick={onBack}>Back</button>
            <button type="button" className="btn-primary" onClick={handleNext}>Next</button>
          </div>
        </>
      ) : (
        <div className="caution-message">
          <div className="caution-header">
            <h2>Image Found Online 🚨</h2>
          </div>
          <p>Our AI has found a match for your image. Your image may be circulating online.</p>
          <p>Do you want to send a formal legal warning to the contact you provided?</p>
          <div className="button-group">
            <button type="button" className="btn-danger" onClick={handleSendWarning}>Yes, Send Warning</button>
            <button type="button" className="btn-secondary" onClick={handleStartOver}>No, Start Over</button>
          </div>
        </div>
      )}
    </div>
  );
};

ImageUpload.propTypes = {
  onNext: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired
};

export default ImageUpload;
