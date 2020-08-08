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
import * as React from "react";
import { TextField } from "office-ui-fabric-react/lib/TextField";
import { Label } from "office-ui-fabric-react/lib/Label";
var RequestForm = /** @class */ (function (_super) {
    __extends(RequestForm, _super);
    function RequestForm() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RequestForm.prototype._getPeoplePickerItems = function () {
    };
    RequestForm.prototype.render = function () {
        return (React.createElement("div", { className: "ms-Grid" },
            React.createElement("div", { className: "ms-Grid-row" },
                React.createElement("div", { className: "ms-Grid-col ms-sm6 ms-md6 ms-lg6" },
                    React.createElement(Label, null, "Title")),
                React.createElement("div", { className: "ms-Grid-col ms-sm6 ms-md6 ms-lg6" },
                    React.createElement(TextField, { placeholder: "Enter Title" }, " "))),
            React.createElement("div", { className: "ms-Grid-row" },
                React.createElement("div", { className: "ms-Grid-col ms-sm6 ms-md6 ms-lg6" },
                    React.createElement(Label, null, "Effort")),
                React.createElement("div", { className: "ms-Grid-col ms-sm6 ms-md6 ms-lg6" },
                    React.createElement(TextField, { placeholder: "Enter Effort" }, " "))),
            React.createElement("div", { className: "ms-Grid-row" },
                React.createElement("div", { className: "ms-Grid-col ms-sm6 ms-md6 ms-lg6" },
                    React.createElement(Label, null, "Approver")),
                React.createElement("div", { className: "ms-Grid-col ms-sm6 ms-md6 ms-lg6" })),
            React.createElement("div", { className: "ms-Grid-row" },
                React.createElement("div", { className: "ms-Grid-col ms-sm6 ms-md6 ms-lg6" },
                    React.createElement(Label, null, "Description ")),
                React.createElement("div", { className: "ms-Grid-col ms-sm6 ms-md6 ms-lg6" },
                    React.createElement(TextField, { placeholder: "Enter Description", multiline: true }, " "))),
            React.createElement("div", { className: "ms-Grid-row" },
                React.createElement("div", { className: "ms-Grid-col ms-sm6 ms-md6 ms-lg6" },
                    React.createElement(Label, null, " Category ")),
                React.createElement("div", { className: "ms-Grid-col ms-sm6 ms-md6 ms-lg6" },
                    React.createElement(TextField, { placeholder: "Enter Category " }, " ")))));
    };
    return RequestForm;
}(React.Component));
export default RequestForm;
//# sourceMappingURL=RequestForm.js.map