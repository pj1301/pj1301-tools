import React, { useState } from 'react';
import download from 'downloadjs';

const PDFUnlocker = () => {

  const [ pdfString, setPdfString ] = useState('');

  const convertBase64 = file => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    })
  }

  const convertFile = async file => {
    const string = await convertBase64(file);
    setPdfString(string);
  }

  const savePdf = () => {
    download(pdfString, 'unlocked.pdf', 'application/pdf');
  }

  return(
    <div className="pdf-card">
      <h3 className="card-head">PDF Unlocker</h3>
      <input type="file" onChange={(event) => convertFile(Object.values(event.target.files)[0])}/>
      <button onClick={() => savePdf()}>Save PDF</button>
    </div>
  )
}

export default PDFUnlocker;
