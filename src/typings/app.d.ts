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

declare interface IBookmarkedEmployeesState {
    [employeeId: string]: BriefEmployee;
}

declare type BriefEmployee = {
    id: number;
    firstName: string;
    lastName: string;
    title: string;
    picture: string;
}

declare interface GenericAction {
    type: string;
    payload: any;
}
