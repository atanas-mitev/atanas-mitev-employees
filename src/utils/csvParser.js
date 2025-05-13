import Papa from 'papaparse';
import { parseDate } from './dateUtils';

export const parseCSV = (file, callback) => {
  Papa.parse(file, {
    header: false, // ← process manually
    skipEmptyLines: true,
    complete: (result) => {
      const rawData = result.data;

      let hasHeader = false;
      const firstRow = rawData[0];

      // Try to detect if first row is a header (contains "EmpID", etc.)
      if (
        firstRow[0].toLowerCase().includes('empid') ||
        firstRow[1].toLowerCase().includes('projectid')
      ) {
        hasHeader = true;
      }

      const dataRows = hasHeader ? rawData.slice(1) : rawData;

      const data = dataRows.map((row, index) => {
        const [empIdRaw, projectIdRaw, dateFromRaw, dateToRaw] = row;

        const EmpID = parseInt(empIdRaw.trim());
        const ProjectID = parseInt(projectIdRaw.trim());
        const DateFrom = parseDate(dateFromRaw.trim());
        const DateTo = parseDate((dateToRaw || '').trim());

        if (!DateFrom || !DateTo || !DateFrom.isValid() || !DateTo.isValid()) {
          console.warn(`Skipping row ${index + 1} due to invalid date:`, row);
          return null;
        }

        return {
          EmpID,
          ProjectID,
          DateFrom,
          DateTo
        };
      }).filter(Boolean);

      callback(data);
    },
    error: (err) => {
      console.error('CSV parsing error:', err);
    }
  });
};
