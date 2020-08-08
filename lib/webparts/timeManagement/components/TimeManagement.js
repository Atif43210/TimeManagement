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
import styles from './TimeManagement.module.scss';
import RequestForm from "./RequestForm/RequestForm";
var TimeManagement = /** @class */ (function (_super) {
    __extends(TimeManagement, _super);
    function TimeManagement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TimeManagement.prototype._actionButtonClicked = function (event, name) {
        alert(name + "button clicked");
    };
    TimeManagement.prototype.render = function () {
        return (React.createElement("div", { className: styles.timeManagement },
            React.createElement("div", { className: styles.container },
                React.createElement("div", { className: styles.row }),
                React.createElement("div", { className: styles.row },
                    React.createElement(RequestForm, { context: this.props.context })))));
    };
    return TimeManagement;
}(React.Component));
export default TimeManagement;
//# sourceMappingURL=TimeManagement.js.map