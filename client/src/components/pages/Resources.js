import React, { useEffect, useState } from "react";
import { Link } from "@reach/router";
import NavBar from "../modules/NavBar";
// import { Viewer } from "@react-pdf-viewer/core";
// import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
// import { Worker } from "@react-pdf-viewer/core";
// import "@react-pdf-viewer/default-layout/lib/styles/index.css";
// import "@react-pdf-viewer/core/lib/styles/index.css";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import "./vlogs.css";

export const Resources = () => {
  const [pdfFile, setPdfFile] = useState(null);
  const [pdfFileError, setPdfFileError] = useState("");
  const [viewPdf, setViewPdf] = useState(null);
  const [pageNum, setPageNum] = useState(1);
  const [maxPageNum, setMaxPageNum] = useState(2);
  // const defaultLayoutPluginInstance = defaultLayoutPlugin();

  const fileType = ["application/pdf"];
  const handlePdfFileChange = (e) => {
    let selectedFile = e.target.files[0];
    if (selectedFile) {
      if (selectedFile && fileType.includes(selectedFile.type)) {
        // let reader = new FileReader();
        // reader.readAsDataURL(selectedFile);
        // reader.onloadend = (e) => {
        //   // console.log(e.target.result);
        //   setViewPdf(e.target.result);
        //   setPdfFileError("");
        // };
        selectedFile.arrayBuffer().then((pdfBuffer) => {
          const pdfArray = new Uint8Array(pdfBuffer);
          // console.log(pdfArray);
          setViewPdf(pdfArray);
          setPdfFileError("");
        });
      } else {
        setPdfFile(null);
        setPdfFileError("Please select valid pdf file");
      }
    } else {
      console.log("select your file");
    }
  };
  //form

  const handleSuccess = (pdf) => {
    setMaxPageNum(pdf.numPages);
  };

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
        <h3 className="title">Please post usefull pdf files here!</h3>
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
              <button
                onClick={() => {
                  pageNum > 1
                    ? setPageNum((curNum) => {
                        return curNum - 1;
                      })
                    : console.log("out of bounds");
                }}
              >
                &lt;
              </button>
              <button
                onClick={() => {
                  pageNum < maxPageNum
                    ? setPageNum((curNum) => {
                        return curNum + 1;
                      })
                    : console.log("out of bounds");
                }}
              >
                &gt;
              </button>
              <Document file={{ data: viewPdf }} onLoadSuccess={handleSuccess}>
                <Page pageNumber={pageNum} />
              </Document>
            </>
          )}
          <div className="select"> {!viewPdf && <>No pdf file selected</>}</div>
        </div>
      </div>
    </>
  );
};

export default Resources;
