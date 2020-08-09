
import * as React from 'react';
import { Announced } from 'office-ui-fabric-react/lib/Announced';
import { TextField, ITextFieldStyles } from 'office-ui-fabric-react/lib/TextField';
import { DetailsList, DetailsListLayoutMode, Selection, IColumn } from 'office-ui-fabric-react/lib/DetailsList';
import { MarqueeSelection } from 'office-ui-fabric-react/lib/MarqueeSelection';
import { Fabric } from 'office-ui-fabric-react/lib/Fabric';
import { mergeStyles } from 'office-ui-fabric-react/lib/Styling';

import { IMyRequestProps, IMyRequestState } from "./IMyRequest";
import { IRequestListItem } from '../MyApprovals/IMyApprovals';
import { Label } from 'office-ui-fabric-react/lib/Label';
import styles from "./MyRequest.module.scss";
const exampleChildClass = mergeStyles({
  display: 'block',
  marginBottom: '10px',
});

const textFieldStyles: Partial<ITextFieldStyles> = { root: { maxWidth: '100%' } };



export  default class MyRequests extends React.Component<IMyRequestProps, IMyRequestState> {
  private _selection: Selection;

  private _columns: IColumn[];

  constructor(props: IMyRequestProps) {
    super(props);

    this._selection = new Selection({
      onSelectionChanged: () => this.setState({ selectionDetails: this._getSelectionDetails() }),
    });

    

    this._columns = [
      { key: 'column1', name: 'Title', fieldName: 'Title', minWidth: 100, maxWidth: 200, isResizable: true },
      { key: 'column2', name: 'Effort', fieldName: 'Effort', minWidth: 100, maxWidth: 200, isResizable: true },
      { key: 'column3', name: 'Description', fieldName: 'Description', minWidth: 100, maxWidth: 200, isResizable: true },
      { key: 'column4', name: 'Pending With', fieldName: 'Approver', minWidth: 100, maxWidth: 200, isResizable: true },
      { key: 'column5', name: 'Category', fieldName: 'Category', minWidth: 100, maxWidth: 200, isResizable: true },
     
    ];

    this.state = {
      
      selectionDetails: this._getSelectionDetails(),
    };
  }
public componentDidMount():void{
    this.props.getMyApprovals();
}
  public render(): JSX.Element {
    const {  selectionDetails } = this.state;

    return (
      <Fabric>
        <div className={styles.myRequests}>
        
          <Label  className={styles.heading} >My Requests</Label></div>
        <Announced message={selectionDetails} />
        <TextField
          className={exampleChildClass}
          label="Filter by name:"
          onChange={this._onFilter}
          styles={textFieldStyles}
        />
        {/* <Announced message={`Number of items after filter applied: ${items.length}.`} /> */}
        <MarqueeSelection selection={this._selection}>
          <DetailsList
            items={this.props.myRequests}
            columns={this._columns}
            setKey="set"
            layoutMode={DetailsListLayoutMode.justified}
            selection={this._selection}
            selectionPreservedOnEmptyClick={true}
            ariaLabelForSelectionColumn="Toggle selection"
            ariaLabelForSelectAllCheckbox="Toggle selection for all items"
            checkButtonAriaLabel="Row checkbox"
            onItemInvoked={this._onItemInvoked}
          />
        </MarqueeSelection>
      </Fabric>
    );
  }

  private _getSelectionDetails(): string {
    const selectionCount = this._selection.getSelectedCount();

    switch (selectionCount) {
      case 0:
        return 'No items selected';
      case 1:
        return '1 item selected: ' + (this._selection.getSelection()[0] as IRequestListItem).Title;
      default:
        return `${selectionCount} items selected`;
    }
  }

  private _onFilter = (ev: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, text: string): void => {
    this.props.filterContent(text);
   
  };

  private _onItemInvoked = (item: IRequestListItem): void => {
    alert(`Item invoked: ${item.Title}`);
  };
}
