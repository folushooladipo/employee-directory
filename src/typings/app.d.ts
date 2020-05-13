declare interface IEmployeeProfile {
    id: number;
    firstName: string;
    lastName: string;
    managerId: number;
    managerName: string;
    reports: number;
    title: string;
    department: string;
    cellPhone: string;
    officePhone: string;
    email: string;
    city: string;
    picture: string;
    twitterId: string;
    blog: string;
}

declare interface IRootState {
    bookmarkedEmployees: IBookmarkedEmployeesState;
}

declare type EmployeeName = string;

declare interface IBookmarkedEmployeesState {
    [employeeId: string]: EmployeeName;
}

declare type BriefEmployee = {
    id: string;
    name: string;
}

declare interface GenericAction {
    type: string;
    payload: any;
}
