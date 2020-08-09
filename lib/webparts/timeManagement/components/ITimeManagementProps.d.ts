import { WebPartContext } from "@microsoft/sp-webpart-base";
import { IRequestFormValues } from "./RequestForm/IRequestForm";
import { ISharePointHelper } from "../../../Utilities/SPHelper";
import { IRequestListItem } from "./MyApprovals/IMyApprovals";
import { ISiteUserInfo } from "@pnp/sp/site-users/types";
export interface ITimeManagementProps {
    description: string;
    context: WebPartContext;
    sharepointHelper: ISharePointHelper;
}
export interface ITimeManagementState {
    requestFormValues: IRequestFormValues;
    showMyRequest: Boolean;
    showMyApprovals: Boolean;
    showRequestForm: Boolean;
    myRequests: IRequestListItem[];
    myRequestsCopy: IRequestListItem[];
    myApprovals: IRequestListItem[];
    myApprovalsCopy: IRequestListItem[];
    currentUserInformation: ISiteUserInfo;
    showDialog: boolean;
}
//# sourceMappingURL=ITimeManagementProps.d.ts.map