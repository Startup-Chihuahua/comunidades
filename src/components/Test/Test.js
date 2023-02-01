import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import { sendImage } from "../../api/sendImage";
const fileTypes = ["JPG", "PNG", "GIF"];

export const Test = () => {
  const [file, setFile] = useState(null);
  const handleChange = (image) => {
    console.log(file);
    setFile(image);
    sendImage(file);
  };
  return (
    <>
      <FileUploader
        handleChange={handleChange}
        name="file"
        types={fileTypes}
        multiple="true"
        maxSize="30"
      />
    </>
  );
};
