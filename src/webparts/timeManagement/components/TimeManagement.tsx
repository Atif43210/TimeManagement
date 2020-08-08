import * as React from 'react';
import styles from './TimeManagement.module.scss';
import { ITimeManagementProps } from './ITimeManagementProps';
import { escape } from '@microsoft/sp-lodash-subset';
import RequestForm from "./RequestForm/RequestForm";
import { ActionButton } from "office-ui-fabric-react/lib/Button";

export default class TimeManagement extends React.Component<ITimeManagementProps, {}> {
  private _actionButtonClicked(event:React.MouseEvent<HTMLAnchorElement>,name){
    
    alert(name +"button clicked");
  }
  public render(): React.ReactElement<ITimeManagementProps> {
    return (
      <div className={styles.timeManagement}>
        <div className={styles.container}>
          <div className={styles.row}>
            {/* <ActionButton name="btnCreateRequest" text="Create Request" onClick={this._actionButtonClicked.bind(this)}></ActionButton>
            <ActionButton name="btnViewMyRequests" text="My Requests" onClick={this._actionButtonClicked.bind(this)}></ActionButton>
            <ActionButton name="btnPendingWithMe" text="Pending With Me" onClick={this._actionButtonClicked.bind(this)}></ActionButton> */}
          </div>
          <div className={styles.row}>
            <RequestForm context={this.props.context}></RequestForm>
          </div>
        </div>

      </div>
    );
  }
}
