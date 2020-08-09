import { IRequestListItem } from "../MyApprovals/IMyApprovals";
export interface IMyRequestProps {
    myRequests: IRequestListItem[];
    getMyApprovals(): void;
    filterContent(text: string): void;
}
export interface IMyRequestState {
    selectionDetails: string;
}
//# sourceMappingURL=IMyRequest.d.ts.map