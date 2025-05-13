export const calculateWorkPairs = (records) => {
  const projectMap = new Map();
  const workDurations = {};

  records.forEach(record => {
    if (!projectMap.has(record.ProjectID)) {
      projectMap.set(record.ProjectID, []);
    }
    projectMap.get(record.ProjectID).push(record);
  });

  projectMap.forEach((employees, projectId) => {
    for (let i = 0; i < employees.length; i++) {
      for (let j = i + 1; j < employees.length; j++) {
        const emp1 = employees[i];
        const emp2 = employees[j];

        const overlapStart = emp1.DateFrom > emp2.DateFrom ? emp1.DateFrom : emp2.DateFrom;
        const overlapEnd = emp1.DateTo < emp2.DateTo ? emp1.DateTo : emp2.DateTo;
        const daysWorked = overlapEnd.diff(overlapStart, 'day');

        if (daysWorked > 0) {
          const key = [emp1.EmpID, emp2.EmpID].sort().join('-');
          if (!workDurations[key]) {
            workDurations[key] = { total: 0, projects: [] };
          }

          workDurations[key].total += daysWorked;
          workDurations[key].projects.push({
            emp1: emp1.EmpID,
            emp2: emp2.EmpID,
            projectId,
            daysWorked
          });
        }
      }
    }
  });

  let max = 0;
  let maxPair = null;
  for (const key in workDurations) {
    if (workDurations[key].total > max) {
      max = workDurations[key].total;
      maxPair = workDurations[key];
    }
  }

  return maxPair ? maxPair.projects : [];
};
