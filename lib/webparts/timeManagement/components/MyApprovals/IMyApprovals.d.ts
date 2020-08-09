export interface IRequestListItem {
    Id: number;
    Title: string;
    Description: string;
    Effort: string;
    Approver: string;
    Author: string;
    Category: string;
}
export interface IMyApprovalsProps {
    approvals: IRequestListItem[];
    getRequestDetails(): void;
}
export interface IDetailsListBasicExampleItem {
    key: number;
    name: string;
    value: number;
}
export interface IMyApprovalsState {
    selectionDetails: string;
}
//# sourceMappingURL=IMyApprovals.d.ts.map