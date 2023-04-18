export interface Item {
    office: string;
    id: number;
    issueTypes: IssueType[];
}

export interface IssueType {
    id: number;
    descriptionTemplate?: string;
    maxLength: number;
    label: string;
}