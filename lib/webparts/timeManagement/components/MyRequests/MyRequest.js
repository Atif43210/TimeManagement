var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from 'react';
import { Announced } from 'office-ui-fabric-react/lib/Announced';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { DetailsList, DetailsListLayoutMode, Selection } from 'office-ui-fabric-react/lib/DetailsList';
import { MarqueeSelection } from 'office-ui-fabric-react/lib/MarqueeSelection';
import { Fabric } from 'office-ui-fabric-react/lib/Fabric';
import { mergeStyles } from 'office-ui-fabric-react/lib/Styling';
import { Label } from 'office-ui-fabric-react/lib/Label';
import styles from "./MyRequest.module.scss";
var exampleChildClass = mergeStyles({
    display: 'block',
    marginBottom: '10px',
});
var textFieldStyles = { root: { maxWidth: '100%' } };
var MyRequests = /** @class */ (function (_super) {
    __extends(MyRequests, _super);
    function MyRequests(props) {
        var _this = _super.call(this, props) || this;
        _this._onFilter = function (ev, text) {
            _this.props.filterContent(text);
        };
        _this._onItemInvoked = function (item) {
            alert("Item invoked: " + item.Title);
        };
        _this._selection = new Selection({
            onSelectionChanged: function () { return _this.setState({ selectionDetails: _this._getSelectionDetails() }); },
        });
        _this._columns = [
            { key: 'column1', name: 'Title', fieldName: 'Title', minWidth: 100, maxWidth: 200, isResizable: true },
            { key: 'column2', name: 'Effort', fieldName: 'Effort', minWidth: 100, maxWidth: 200, isResizable: true },
            { key: 'column3', name: 'Description', fieldName: 'Description', minWidth: 100, maxWidth: 200, isResizable: true },
            { key: 'column4', name: 'Pending With', fieldName: 'Approver', minWidth: 100, maxWidth: 200, isResizable: true },
            { key: 'column5', name: 'Category', fieldName: 'Category', minWidth: 100, maxWidth: 200, isResizable: true },
        ];
        _this.state = {
            selectionDetails: _this._getSelectionDetails(),
        };
        return _this;
    }
    MyRequests.prototype.componentDidMount = function () {
        this.props.getMyApprovals();
    };
    MyRequests.prototype.render = function () {
        var selectionDetails = this.state.selectionDetails;
        return (React.createElement(Fabric, null,
            React.createElement("div", { className: styles.myRequests },
                React.createElement(Label, { className: styles.heading }, "My Requests")),
            React.createElement(Announced, { message: selectionDetails }),
            React.createElement(TextField, { className: exampleChildClass, label: "Filter by name:", onChange: this._onFilter, styles: textFieldStyles }),
            React.createElement(MarqueeSelection, { selection: this._selection },
                React.createElement(DetailsList, { items: this.props.myRequests, columns: this._columns, setKey: "set", layoutMode: DetailsListLayoutMode.justified, selection: this._selection, selectionPreservedOnEmptyClick: true, ariaLabelForSelectionColumn: "Toggle selection", ariaLabelForSelectAllCheckbox: "Toggle selection for all items", checkButtonAriaLabel: "Row checkbox", onItemInvoked: this._onItemInvoked }))));
    };
    MyRequests.prototype._getSelectionDetails = function () {
        var selectionCount = this._selection.getSelectedCount();
        switch (selectionCount) {
            case 0:
                return 'No items selected';
            case 1:
                return '1 item selected: ' + this._selection.getSelection()[0].Title;
            default:
                return selectionCount + " items selected";
        }
    };
    return MyRequests;
}(React.Component));
export default MyRequests;
//# sourceMappingURL=MyRequest.js.map