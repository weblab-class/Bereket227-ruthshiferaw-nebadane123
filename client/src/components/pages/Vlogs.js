import React, { useEffect, useState } from "react";
import { Link } from "@reach/router";
import NavBar from "../modules/NavBar";
import { Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import { Worker } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "./vlogs.css";

export const Vlogs = () => {
  const [pdfFile, setPdfFile] = useState(null);
  const [pdfFileError, setPdfFileError] = useState("");
  const [viewPdf, setViewPdf] = useState(null);
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  const fileType = ["application/pdf"];
  const handlePdfFileChange = (e) => {
    let selectedFile = e.target.files[0];
    if (selectedFile) {
      if (selectedFile && fileType.includes(selectedFile.type)) {
        let reader = new FileReader();
        reader.readAsDataURL(selectedFile);
        reader.onloadend = (e) => {
          setViewPdf(e.target.result);
          setPdfFileError("");
        };
      } else {
        setPdfFile(null);
        setPdfFileError("Please select valid pdf file");
      }
    } else {
      console.log("select your file");
    }
  };
  //form

  const handlePdfFileSubmit = (e) => {
    e.preventDefault();
    console.log(pdfFile);
    // if (pdfFile !== null) {
    //   setViewPdf(pdfFile);
    // } else {
    //   setViewPdf(null);
    // }
  };

  useEffect(() => {
    console.log(pdfFile);
  }, [pdfFile]);

  return (
    <>
      <div className="container">
        <h3 className="title">Please post usefull pdf files here and comment!</h3>
        <form className="form-group" onChange={handlePdfFileSubmit}>
          <input type="file" className="form-group" required onChange={handlePdfFileChange} />
          {pdfFileError && <div className="error-msg">{pdfFileError}</div>}
          <br></br>
          <br></br>
          <button type="Submit" className="btn">
            UPLOAD
          </button>
        </form>

        <label className="title">
          <h4> View PDF</h4>
        </label>
        <div
          style={{
            border: "10px solid rgba(0, 0, 0, 0.3)",
            height: "550px",
            width: "50%",
            align: "center",
            marginLeft: "300px",
          }}
          className="pdf-container"
        >
          {viewPdf && (
            <>
              <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
                <Viewer fileUrl={viewPdf} plugins={[defaultLayoutPluginInstance]} />
              </Worker>
            </>
          )}
          {!viewPdf && <>No pdf file selected</>}
        </div>
      </div>
    </>
  );
};

export default Vlogs;
