import "./App.css";
import Cv from "./components";
import { PDFExport } from "@progress/kendo-react-pdf";
import React, { useRef } from "react";
import FullCV from "./container/cv";

function App() {
  const pdfExportComponent = useRef(null);

  const exportPDF = () => {
    if (pdfExportComponent.current) {
      pdfExportComponent.current.save();
      setTimeout(() => {
        alert("Downloaded as pdf");
      }, 1000);
    }
  };

  const zoomout = () => {
    const height = pdfExportComponent.current;
    const width = pdfExportComponent.current;
    console.log(height);
    console.log(width);
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
