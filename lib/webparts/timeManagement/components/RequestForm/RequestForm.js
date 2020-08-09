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
import { ErrorMessages } from "./IRequestForm";
import { TextField } from "office-ui-fabric-react/lib/TextField";
import { PrimaryButton, DefaultButton } from "office-ui-fabric-react/lib/Button";
;
import { Label } from "office-ui-fabric-react/lib/Label";
import { PeoplePicker, PrincipalType } from "@pnp/spfx-controls-react/lib/PeoplePicker";
import { TaxonomyPicker } from "@pnp/spfx-controls-react/lib/TaxonomyPicker";
import styles from "./RequestForm.module.scss";
var RequestForm = /** @class */ (function (_super) {
    __extends(RequestForm, _super);
    /**
     *
     */
    function RequestForm(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            approverErrorMessage: "",
            categoryErrorMessage: "",
            descriptionErrorMessage: "",
            effortErrorMessage: "",
            titleErrorMessage: "",
            approver: [],
            category: [],
            description: "",
            effort: "",
            title: ""
        };
        return _this;
    }
    RequestForm.prototype._saveButtonClickHandler = function () {
        var requestValues = this.state;
        this.props.saveItem(requestValues);
    };
    RequestForm.prototype._cancelButtonClickHandler = function () {
        alert("cancel button clicked");
    };
    RequestForm.prototype.componentDidUpdate = function () {
    };
    RequestForm.prototype._textBoxChangeEventHandler = function (event, name) {
        // event.target.att
        var fieldNameProperty = event.target.attributes.getNamedItem("name").value;
        var fieldValue = event.target.value;
        switch (fieldNameProperty) {
            case "Title":
                if (fieldValue == "") {
                    this.setState({ title: fieldValue, titleErrorMessage: ErrorMessages.required });
                }
                else {
                    this.setState({ title: fieldValue, titleErrorMessage: ErrorMessages.noError });
                }
                break;
            case "Description":
                if (fieldValue == "") {
                    this.setState({ description: fieldValue, descriptionErrorMessage: ErrorMessages.required });
                }
                else {
                    this.setState({ description: fieldValue, descriptionErrorMessage: ErrorMessages.noError });
                }
                break;
            case "Effort":
                if (fieldValue == "") {
                    this.setState({ effort: fieldValue, effortErrorMessage: ErrorMessages.required });
                }
                else {
                    var effortFloat = parseFloat(fieldValue);
                    if (isNaN(effortFloat)) {
                        this.setState({ effort: fieldValue, effortErrorMessage: ErrorMessages.notANumber });
                    }
                    else {
                        this.setState({ effort: fieldValue, effortErrorMessage: ErrorMessages.noError });
                    }
                }
                break;
            default:
                break;
        }
    };
    RequestForm.prototype._getPeoplePickerItems = function (items) {
        var users = [];
        for (var item in items) {
            users.push(items[item].id);
        }
        this.setState({ approver: users });
    };
    RequestForm.prototype._onTaxPickerChangeHandler = function (terms) {
        this.setState({ category: terms });
    };
    RequestForm.prototype.render = function () {
        return (React.createElement("div", { className: styles.requestform },
            React.createElement("div", { className: "ms-Grid-row" },
                React.createElement(Label, { className: styles.heading }, "Effort Update Form")),
            React.createElement("div", { className: "ms-Grid-row" },
                React.createElement("div", { className: "ms-Grid-col ms-sm12 ms-md12 ms-lg12" },
                    React.createElement(TextField, { required: true, name: "Title", label: "Title", placeholder: "Enter Title", onChange: this._textBoxChangeEventHandler.bind(this), defaultValue: this.props.requestFormValues.title, errorMessage: this.state.titleErrorMessage }))),
            React.createElement("div", { className: "ms-Grid-row" },
                React.createElement("div", { className: "ms-Grid-col ms-sm12 ms-md12 ms-lg12" },
                    React.createElement(TextField, { label: "Effort", name: "Effort", onChange: this._textBoxChangeEventHandler.bind(this), required: true, placeholder: "Enter Effort", defaultValue: this.props.requestFormValues.effort, errorMessage: this.state.effortErrorMessage }))),
            React.createElement("div", { className: "ms-Grid-row" },
                React.createElement("div", { className: "ms-Grid-col ms-sm12 ms-md12 ms-lg12" },
                    React.createElement(PeoplePicker, { context: this.props.context, titleText: "Approver", personSelectionLimit: 1, showtooltip: true, disabled: false, selectedItems: this._getPeoplePickerItems.bind(this), showHiddenInUI: false, ensureUser: true, principalTypes: [PrincipalType.User], resolveDelay: 1000, placeholder: "Enter Approver", errorMessage: this.state.approverErrorMessage }))),
            React.createElement("div", { className: "ms-Grid-row" },
                React.createElement("div", { className: "ms-Grid-col ms-sm12 ms-md12 ms-lg12" },
                    React.createElement(TextField, { label: "Description", name: "Description", onChange: this._textBoxChangeEventHandler.bind(this), placeholder: "Enter Description", required: true, multiline: true, defaultValue: this.props.requestFormValues.title, errorMessage: this.state.descriptionErrorMessage }))),
            React.createElement("div", { className: "ms-Grid-row" },
                React.createElement("div", { className: "ms-Grid-col ms-sm12 ms-md12 ms-lg12" },
                    React.createElement(TaxonomyPicker, { allowMultipleSelections: true, termsetNameOrID: "Category", panelTitle: "Select Term", label: "Category", context: this.props.context, onChange: this._onTaxPickerChangeHandler.bind(this), isTermSetSelectable: false }))),
            React.createElement("div", { className: "ms-Grid-row" },
                React.createElement("div", { className: "ms-Grid-col ms-sm4 ms-md4 ms-lg4 ms-smOffset4 ms-mdOffset4 ms-lgOffset4" },
                    React.createElement(PrimaryButton, { text: "Save", onClick: this._saveButtonClickHandler.bind(this) }),
                    React.createElement(DefaultButton, { text: "Cancel", onClick: this._cancelButtonClickHandler.bind(this) })))));
    };
    return RequestForm;
}(React.Component));
export default RequestForm;
//# sourceMappingURL=RequestForm.js.map