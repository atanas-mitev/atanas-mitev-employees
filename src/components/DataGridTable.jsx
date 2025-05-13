import React from 'react';

const DataGridTable = ({ data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white shadow-md rounded-md overflow-hidden">
        <thead className="bg-blue-600 text-white">
          <tr>
            <th className="text-left p-3 text-sm sm:text-base">Employee ID #1</th>
            <th className="text-left p-3 text-sm sm:text-base">Employee ID #2</th>
            <th className="text-left p-3 text-sm sm:text-base">Project ID</th>
            <th className="text-left p-3 text-sm sm:text-base">Days Worked</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr key={idx} className="odd:bg-gray-100 even:bg-white transition hover:bg-blue-50">
              <td className="p-3 text-gray-800">{row.emp1}</td>
              <td className="p-3 text-gray-800">{row.emp2}</td>
              <td className="p-3 text-gray-800">{row.projectId}</td>
              <td className="p-3 text-gray-800">{row.daysWorked}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


export default DataGridTable;
