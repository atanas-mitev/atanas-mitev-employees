import React from 'react';

const FileUploader = ({ onFileLoaded }) => {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) onFileLoaded(file);
  };

  return (
    <div className="flex flex-col sm:flex-row items-center gap-4 justify-center mb-6">
      <label className="block text-gray-700 font-medium">
        Choose CSV File:
      </label>
      <input
        type="file"
        accept=".csv"
        onChange={handleFileChange}
        className="file:mr-4 file:py-2 file:px-4
                   file:rounded-full file:border-0
                   file:text-sm file:font-semibold
                   file:bg-blue-600 file:text-white
                   hover:file:bg-blue-700
                   transition duration-150 ease-in-out"
      />
    </div>
  );
};

export default FileUploader;
