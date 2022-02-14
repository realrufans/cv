import "./App.css";
import Cv from "./components";
import { PDFExport } from "@progress/kendo-react-pdf";
import React, { useRef } from "react";
import FullCV from "./container/cv";

function App() {
  const pdfExportComponent = useRef(null);
  //  function to export my cv as pdf file.
  const exportPDF = () => {
    if (pdfExportComponent.current) {
      pdfExportComponent.current.save();
      setTimeout(() => {
        alert("Downloaded as pdf");
      }, 1000);
    }
  };

  return (
    <div className="App">
      <PDFExport
        ref={pdfExportComponent}
        paperSize="auto"
        margin={0}
        fileName={`RufansCv ${new Date()}.pdf`}
      >
        <FullCV />
      </PDFExport>
      <button onClick={exportPDF}>Download</button>
    </div>
  );
}

export default App;
