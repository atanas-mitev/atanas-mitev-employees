import React, { useState } from 'react';
import FileUploader from './components/FileUploader';
import DataGridTable from './components/DataGridTable';
import { parseCSV } from './utils/csvParser';
import { calculateWorkPairs } from './utils/workCalculator';
import './App.css';

function App() {
  const [workData, setWorkData] = useState([]);
  const [fileUploaded, setFileUploaded] = useState(false); 

  const handleFile = (file) => {
    setFileUploaded(true); 
    parseCSV(file, (parsedData) => {
      const result = calculateWorkPairs(parsedData);
      setWorkData(result);
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-blue-100 p-4">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-blue-800 text-center mb-6">
          🧑‍💻 Employee Pair Work Tracker
        </h1>

        <FileUploader onFileLoaded={handleFile} />

        {fileUploaded ? (
          workData.length > 0 ? (
            <DataGridTable data={workData} />
          ) : (
            <div className="mt-6 text-center text-red-500 font-medium bg-red-50 p-4 rounded shadow">
              ❗ No employee pairs have worked together on any common project.
            </div>
          )
        ) : (
          <p className="text-center text-gray-600 mt-6">
            Upload a CSV file to see shared project data.
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
