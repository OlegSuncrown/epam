import React, { useState, useContext } from "react";
import axios from "axios";
import setAuthToken from "../../utils/setAuthToken";
import { Form, Spinner } from "react-bootstrap";
import { AuthContext } from "../../context/auth/AuthContext";

const FileUploader = () => {
  const URL = "https://hwtaweb20201216131958.azurewebsites.net";

  const { loadImage } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);

  const uploadFileHandler = async (e) => {
    if (localStorage.AuthToken) {
      setAuthToken(localStorage.AuthToken);
    }
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("uploadedFile", file);
    setIsLoading(true);
    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };
      await axios.post(`${URL}/LoadProfilePicture`, formData, config);

      loadImage();
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Form>
        <label className="uploadButton" htmlFor="upload-photo">
          <span className="text-info btn-upload">
            Set profile photo
            {isLoading && (
              <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
              />
            )}
          </span>
        </label>
        <input
          onChange={uploadFileHandler}
          type="file"
          name="photo"
          id="upload-photo"
          style={{ visibility: "hidden" }}
        />
      </Form>
    </>
  );
};

export default FileUploader;
