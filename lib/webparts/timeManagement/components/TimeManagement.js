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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import * as React from 'react';
import styles from './TimeManagement.module.scss';
import RequestForm from "./RequestForm/RequestForm";
import { ActionButton, PrimaryButton } from "office-ui-fabric-react/lib/Button";
import MyRequests from './MyRequests/MyRequest';
import { MyApprovals } from './MyApprovals/MyApprovals';
import { Configuration } from "../../../Configuration/Configuration";
import Dialog, { DialogType } from 'office-ui-fabric-react/lib/Dialog';
var TimeManagement = /** @class */ (function (_super) {
    __extends(TimeManagement, _super);
    function TimeManagement(props) {
        var _this = _super.call(this, props) || this;
        _this.dialogContent = {
            type: DialogType.normal,
            title: 'Request Statusr',
            subText: 'Request has been saved successfully',
        };
        _this.state = {
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
        };
        return _this;
    }
    TimeManagement.prototype.componentDidMount = function () {
        this._getMasterdata();
    };
    TimeManagement.prototype._getMasterdata = function () {
        return __awaiter(this, void 0, void 0, function () {
            var userInfo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.props.sharepointHelper.getCurrentUserDetails()];
                    case 1:
                        userInfo = _a.sent();
                        this.setState({ currentUserInformation: userInfo });
                        return [2 /*return*/];
                }
            });
        });
    };
    TimeManagement.prototype._actionButtonClicked = function (event) {
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
    };
    TimeManagement.prototype._updateRequestFormValue = function (requestFormValues) {
    };
    TimeManagement.prototype._requestFormSaveButtonClickHandler = function (requestFormValues) {
        debugger;
        this.saveItemsToList(requestFormValues);
    };
    TimeManagement.prototype._myApprovalFormLoadHandler = function () {
        return __awaiter(this, void 0, void 0, function () {
            var select, expand, items, requestListItems;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        debugger;
                        select = ["Title", "Id", "Description", "Effort", "Approver/Title", "Author/Title", "Category"];
                        expand = ["Author", "Approver"];
                        return [4 /*yield*/, this.props.sharepointHelper.getListItems(Configuration.listName, select, "ApproverId eq " + this.state.currentUserInformation.Id, expand)];
                    case 1:
                        items = _a.sent();
                        requestListItems = items.map(function (item) {
                            return {
                                Approver: item.Approver ? item.Approver.Title : "",
                                Author: item.Author.Title,
                                Description: item.Description,
                                Effort: item.Effort,
                                Id: item.Id,
                                Title: item.Title,
                                Category: item.Category ? item.Category.Label : ""
                            };
                        });
                        this.setState({ myApprovals: requestListItems, myApprovalsCopy: requestListItems.slice() });
                        return [2 /*return*/];
                }
            });
        });
    };
    TimeManagement.prototype.saveItemsToList = function (requestFormValues) {
        return __awaiter(this, void 0, void 0, function () {
            var terms, approverId, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        terms = requestFormValues.category.length > 0 ? {
                            "__metadata": { "type": "SP.Taxonomy.TaxonomyFieldValue" },
                            "Label": requestFormValues.category[0].name,
                            'TermGuid': requestFormValues.category[0].key,
                            'WssId': '-1'
                        } : null;
                        approverId = requestFormValues.approver.length > 0 ? requestFormValues.approver[0] : null;
                        return [4 /*yield*/, this.props.sharepointHelper.addItemtoList(Configuration.listName, { "ApproverId": approverId, Category: terms, "Title": requestFormValues.title, "Effort": requestFormValues.effort, "Description": requestFormValues.description })];
                    case 1:
                        result = _a.sent();
                        this.setState({ showDialog: false });
                        return [2 /*return*/];
                }
            });
        });
    };
    TimeManagement.prototype.getMyRequestsFromList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var select, expand, items, requestListItems;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        select = ["Title", "Id", "Description", "Effort", "Approver/Title", "Author/Title", "Category"];
                        expand = ["Author", "Approver"];
                        return [4 /*yield*/, this.props.sharepointHelper.getListItems(Configuration.listName, select, "AuthorId eq " + this.state.currentUserInformation.Id, expand)];
                    case 1:
                        items = _a.sent();
                        requestListItems = items.map(function (item) {
                            return {
                                Approver: item.Approver ? item.Approver.Title : "",
                                Author: item.Author.Title,
                                Description: item.Description,
                                Effort: item.Effort,
                                Id: item.Id,
                                Title: item.Title,
                                Category: item.Category ? item.Category.Label : ""
                            };
                        });
                        this.setState({ myRequests: requestListItems, myRequestsCopy: requestListItems.slice() });
                        return [2 /*return*/];
                }
            });
        });
    };
    TimeManagement.prototype._filterMyRequestHandler = function (text) {
        this.setState({ myRequests: text ? this.state.myRequestsCopy.filter(function (i) { return i.Title.toLowerCase().indexOf(text) > -1; }) : this.state.myRequestsCopy });
    };
    TimeManagement.prototype.dialogDismissEventHandler = function () {
        this.setState({ showDialog: true, showMyApprovals: false, showMyRequest: true, showRequestForm: false });
    };
    TimeManagement.prototype.render = function () {
        var control = null;
        if (this.state.showRequestForm) {
            control = React.createElement(RequestForm, { context: this.props.context, saveItem: this._requestFormSaveButtonClickHandler.bind(this), requestFormValues: this.state.requestFormValues, updateRequestFormValue: this._updateRequestFormValue.bind(this) });
        }
        else if (this.state.showMyRequest) {
            debugger;
            control = React.createElement(MyRequests, { filterContent: this._filterMyRequestHandler.bind(this), getMyApprovals: this.getMyRequestsFromList.bind(this), myRequests: this.state.myRequests });
        }
        else if (this.state.showMyApprovals) {
            control = React.createElement(MyApprovals, { approvals: this.state.myApprovals, getRequestDetails: this._myApprovalFormLoadHandler.bind(this) });
        }
        return (React.createElement("div", { className: styles.timeManagement },
            React.createElement("div", { className: styles.container },
                React.createElement("div", { className: styles.row },
                    React.createElement(ActionButton, { name: "btnCreateRequest", text: "Create Request", onClick: this._actionButtonClicked.bind(this) }),
                    React.createElement(ActionButton, { name: "btnViewMyRequests", text: "My Requests", onClick: this._actionButtonClicked.bind(this) }),
                    React.createElement(ActionButton, { name: "btnPendingWithMe", text: "Pending With Me", onClick: this._actionButtonClicked.bind(this) })),
                React.createElement("div", { className: styles.row }, control),
                React.createElement("div", null,
                    React.createElement(Dialog, { hidden: this.state.showDialog, onDismiss: this.dialogDismissEventHandler.bind(this), dialogContentProps: this.dialogContent, modalProps: {
                            isBlocking: false,
                            styles: { main: { maxWidth: 450 } },
                        } },
                        React.createElement(PrimaryButton, { onClick: this.dialogDismissEventHandler.bind(this), text: "Close" }))))));
    };
    return TimeManagement;
}(React.Component));
export default TimeManagement;
//# sourceMappingURL=TimeManagement.js.map