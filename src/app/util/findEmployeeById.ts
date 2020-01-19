export default function findEmployeeById(id: number, employees: IEmployeeProfile[]): IEmployeeProfile | null {
  let targetEmployee = null;
  for (const employee of employees) {
    if (employee.id === id) {
      targetEmployee = employee;
      break;
    }
  }

  return targetEmployee;
}
