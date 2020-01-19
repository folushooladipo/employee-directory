export default function getStringifiedListOfEmployees(listOfEmployees: IEmployeeProfile[]): string[] {
  const stringifiedListOfEmployees: string[] = listOfEmployees.map(employee => {
    const { firstName, lastName, title, department, cellPhone, twitterId } = employee;
    const stringfiedEmployee = `${ firstName } ${ lastName } ${ title } ${ department } ${ cellPhone } ${ twitterId }`.toLowerCase();

    return stringfiedEmployee;
  });

  return stringifiedListOfEmployees;
}
