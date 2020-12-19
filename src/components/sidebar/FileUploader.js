import React, { useState } from "react";
import axios from "axios";
import setAuthToken from "../../utils/setAuthToken";
import { Form, Spinner, Button, Image, Nav } from "react-bootstrap";
const FileUploader = () => {
  const URL = "https://hwtaweb20201216131958.azurewebsites.net";

  const [isLoading, setIsLoading] = useState(false);
  const [image, setImage] = useState("");

  const uploadFileHandler = async (e) => {
    if (localStorage.AuthToken) {
      setAuthToken(localStorage.AuthToken);
    }
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("uploadedFile", file);
    setIsLoading(true);
    console.log(file);
    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };
      const res = await axios.post(
        `${URL}/LoadProfilePicture`,
        formData,
        config
      );
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (localStorage.AuthToken) {
      setAuthToken(localStorage.AuthToken);
    }
    try {
      const { data } = await axios.get(`${URL}/GetProfilePicture`);
      setImage(data);

      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <button onClick={submitHandler}>dsdsds</button>
      <Image src={image ? image : ""} fluid />
      <Form>
        <label className="uploadButton" htmlFor="upload-photo">
          <span className="text-info btn-upload">
            Upload avatar{" "}
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
      {/* <form>
        <label className="uploadButton" htmlFor="upload-photo">
          <strong className="h5">Upload avatar</strong>
        </label>
        <input
          type="file"
          name="photo"
          id="upload-photo"
          style={{ visibility: "hidden" }}
        />
      </form> */}
    </>
  );
};

export default FileUploader;
