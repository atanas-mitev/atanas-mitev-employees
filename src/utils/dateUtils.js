// dateUtils.js
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat);

export const parseDate = (dateStr) => {
  if (!dateStr || dateStr.trim().toUpperCase() === 'NULL') return dayjs();

  const formats = [
    'YYYY-MM-DD',
    'DD/MM/YYYY',
    'MM-DD-YYYY',
    'MMM D, YYYY',
    'MMMM D, YYYY'
  ];

  for (let fmt of formats) {
    const parsed = dayjs(dateStr, fmt, true);
    if (parsed.isValid()) return parsed;
  }

  return null; 
};
