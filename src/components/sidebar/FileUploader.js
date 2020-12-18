import React from "react";

const FileUploader = (props) => {
  return (
    <>
      <form>
        <label className="uploadButton" htmlFor="upload-photo">
          <strong className="h5">Upload avatar</strong>
        </label>
        <input
          onChange={props.handleSubmit()}
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
