import React from "react";

const FileUploader = () => {
  return (
    <>
      <form>
        <label className="uploadButton" for="upload-photo">
          <strong className="h5">Upload avatar</strong>
        </label>
        <input
          type="file"
          name="photo"
          id="upload-photo"
          style={{ visibility: "hidden" }}
        />
      </form>
    </>
  );
};

export default FileUploader;
