export default function findManagedColleagues(employeeId: number, allColleagues: IEmployeeProfile[]): IEmployeeProfile[] {
  const managedColleagues = [];
  allColleagues.forEach(colleague => {
    if (colleague.managerId === employeeId) {
      managedColleagues.push(colleague);
    }
  });

  return managedColleagues;
}
