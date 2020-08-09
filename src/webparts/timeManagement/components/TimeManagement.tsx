import * as React from 'react';
import styles from './TimeManagement.module.scss';
import { ITimeManagementProps, ITimeManagementState } from './ITimeManagementProps';
import { escape } from '@microsoft/sp-lodash-subset';
import RequestForm from "./RequestForm/RequestForm";
import { ActionButton, PrimaryButton } from "office-ui-fabric-react/lib/Button";
import { IRequestFormValues } from './RequestForm/IRequestForm';
import { IItemAddResult } from '@pnp/sp/items';
import { shouldWrapFocus } from 'office-ui-fabric-react/lib/Utilities';
import MyRequests from './MyRequests/MyRequest';
import { MyApprovals } from './MyApprovals/MyApprovals';
import { Configuration } from "../../../Configuration/Configuration";
import { IRequestListItem } from './MyApprovals/IMyApprovals';
import { ISiteUserInfo } from '@pnp/sp/site-users/types';
import Dialog, { IDialogContentProps, DialogType } from 'office-ui-fabric-react/lib/Dialog';

export default class TimeManagement extends React.Component<ITimeManagementProps, ITimeManagementState> {

  componentDidMount(): void {
    this._getMasterdata();
  }
  private async _getMasterdata() {
    let userInfo: ISiteUserInfo = await this.props.sharepointHelper.getCurrentUserDetails();
    this.setState({ currentUserInformation: userInfo });
  }
  private dialogContent: IDialogContentProps = {
    type: DialogType.normal,
    title: 'Request Statusr',
    subText: 'Request has been saved successfully',
  }
  constructor(props: ITimeManagementProps) {
    super(props);
    this.state = {
      requestFormValues: {
        approver: [],
        category: [],
        description: "",
        effort: "",
        title: ""
      },
      showMyApprovals: false,
      showMyRequest: false,
      showRequestForm: true,
      myRequests: [],
      myApprovals: [],
      myApprovalsCopy: [],
      myRequestsCopy: [],
      currentUserInformation: null,
      showDialog: true

    }
  }
  private _actionButtonClicked(event: any) {
    debugger;
    switch (event.target.innerText) {
      case "Create Request":
        this.setState({ showMyApprovals: false, showMyRequest: false, showRequestForm: true });
        break;
      case "My Requests":

        this.setState({ showMyApprovals: false, showMyRequest: true, showRequestForm: false });
        break;
      case "Pending With Me":
        this.setState({ showMyApprovals: true, showMyRequest: false, showRequestForm: false });
        break;
    }

  }
  private _updateRequestFormValue(requestFormValues: IRequestFormValues): void {

  }
  private _requestFormSaveButtonClickHandler(requestFormValues: IRequestFormValues): void {
    debugger;
    this.saveItemsToList(requestFormValues);
  }
  private async _myApprovalFormLoadHandler() {
    debugger;
    let select: string[] = ["Title", "Id", "Description", "Effort", "Approver/Title", "Author/Title", "Category"]
    let expand: string[] = ["Author", "Approver"];
    let items: any = await this.props.sharepointHelper.getListItems(Configuration.listName, select, `ApproverId eq ${this.state.currentUserInformation.Id}`, expand);
    let requestListItems: IRequestListItem[] = items.map((item): IRequestListItem => {
      return {
        Approver: item.Approver ? item.Approver.Title : "",
        Author: item.Author.Title,
        Description: item.Description,
        Effort: item.Effort,
        Id: item.Id,
        Title: item.Title,
        Category: item.Category ? item.Category.Label : ""
      }
    })

    this.setState({ myApprovals: requestListItems, myApprovalsCopy: [...requestListItems] });
  }
  private async saveItemsToList(requestFormValues: IRequestFormValues) {
    let terms = requestFormValues.category.length > 0 ? {
      "__metadata": { "type": "SP.Taxonomy.TaxonomyFieldValue" },
      "Label": requestFormValues.category[0].name,
      'TermGuid': requestFormValues.category[0].key,
      'WssId': '-1'
    } : null;
    let approverId: number = requestFormValues.approver.length > 0 ? requestFormValues.approver[0] : null;
    let result: IItemAddResult = await this.props.sharepointHelper.addItemtoList(Configuration.listName, { "ApproverId": approverId, Category: terms, "Title": requestFormValues.title, "Effort": requestFormValues.effort, "Description": requestFormValues.description });
    this.setState({ showDialog: false });
    // this.setState({ showMyApprovals: false, showMyRequest: true, showRequestForm: false });
  }
  private async getMyRequestsFromList() {

    let select: string[] = ["Title", "Id", "Description", "Effort", "Approver/Title", "Author/Title", "Category"]
    let expand: string[] = ["Author", "Approver"];
    let items: any = await this.props.sharepointHelper.getListItems(Configuration.listName, select, `AuthorId eq ${this.state.currentUserInformation.Id}`, expand);
    let requestListItems: IRequestListItem[] = items.map((item): IRequestListItem => {
      return {
        Approver: item.Approver ? item.Approver.Title : "",
        Author: item.Author.Title,
        Description: item.Description,
        Effort: item.Effort,
        Id: item.Id,
        Title: item.Title,
        Category: item.Category ? item.Category.Label : ""
      }
    })

    this.setState({ myRequests: requestListItems, myRequestsCopy: [...requestListItems] });
  }
  private _filterMyRequestHandler(text: string): void {

    this.setState({ myRequests: text ? this.state.myRequestsCopy.filter(i => i.Title.toLowerCase().indexOf(text) > -1) : this.state.myRequestsCopy })
  }
  private dialogDismissEventHandler() {
    this.setState({ showDialog: true, showMyApprovals: false, showMyRequest: true, showRequestForm: false })
  }

  public render(): React.ReactElement<ITimeManagementProps> {
    let control = null;
    if (this.state.showRequestForm) {
      control = <RequestForm context={this.props.context} saveItem={this._requestFormSaveButtonClickHandler.bind(this)} requestFormValues={this.state.requestFormValues} updateRequestFormValue={this._updateRequestFormValue.bind(this)}></RequestForm>
    } else if (this.state.showMyRequest) {
      debugger;
      control = <MyRequests filterContent={this._filterMyRequestHandler.bind(this)} getMyApprovals={this.getMyRequestsFromList.bind(this)} myRequests={this.state.myRequests} ></MyRequests>;
    } else if (this.state.showMyApprovals) {
      control = <MyApprovals approvals={this.state.myApprovals} getRequestDetails={this._myApprovalFormLoadHandler.bind(this)}></MyApprovals>;
    }
    return (
      <div className={styles.timeManagement}>
        <div className={styles.container}>
          <div className={styles.row}>
            <ActionButton name="btnCreateRequest" text="Create Request" onClick={this._actionButtonClicked.bind(this)}></ActionButton>
            <ActionButton name="btnViewMyRequests" text="My Requests" onClick={this._actionButtonClicked.bind(this)}></ActionButton>
            <ActionButton name="btnPendingWithMe" text="Pending With Me" onClick={this._actionButtonClicked.bind(this)}></ActionButton>
          </div>
          <div className={styles.row}>
            {control}

          </div>
          <div>
            <Dialog
              hidden={this.state.showDialog}
              onDismiss={this.dialogDismissEventHandler.bind(this)}
              dialogContentProps={this.dialogContent}
              modalProps={{
                isBlocking: false,
                styles: { main: { maxWidth: 450 } },
              }}
            >
              <PrimaryButton onClick={this.dialogDismissEventHandler.bind(this)} text="Close" />
            </Dialog>
          </div>
        </div>

      </div>
    );
  }
}
