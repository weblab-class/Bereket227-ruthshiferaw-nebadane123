import React, { useState } from "react";
import { Link } from "@reach/router";
import NavBar from "../modules/NavBar";
import { Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import { worker } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "./vlogs.css";

export const Vlogs = () => {
  const [pdfFile, setPdfFile] = useState(null);
  const [pdfFileError, setPdfFileError] = useState("");
  const [viewPdf, setViewPdf] = useState(null);

  const fileType = ["application/pdf"];
  const handlePdfFileChange = (e) => {
    let selectedFile = e.target.files[0];
    if (selectedFile) {
      if (selectedFile && fileType.includes(selectedFle.type)) {
        let reader = new FileReader();
        reader.readAsDataURL(selectedFile);
        reader.onloadend = (e) => {
          setPdfFile(e.target.result);
          setPdfFileError("");
          console.log(e.target.result);
        };
      } else {
        setPdfFileError("Please select valid pdf file");
        setPdfFile(null);
      }
    } else {
      console.log("select your file");
    }
  };
  //form

  const handlePdfFileSubmit = (e) => {
    e.preventDefault();
    if (pdfFile !== null) {
      setViewPdf(pdfFile);
    } else {
      setViewPdf(null);
    }
  };

  return (
    <>
      <div className="container">
        <form className="form-group" onChange={handlePdfFileSubmit}>
          <input type="file" className="form-group" required onChange={handlePdfFileChange} />
          {pdfFileError && <div className="error-msg">{pdfFileError}</div>}
        </form>

        <br></br>
        <button type="Submit" className="btn">
          UPLOAD
        </button>
        <br></br>
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
