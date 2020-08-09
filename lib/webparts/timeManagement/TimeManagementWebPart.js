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
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import { PropertyPaneTextField } from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import * as strings from 'TimeManagementWebPartStrings';
import TimeManagement from './components/TimeManagement';
import { SharePontHelper } from "../../Utilities/SPHelper";
var TimeManagementWebPart = /** @class */ (function (_super) {
    __extends(TimeManagementWebPart, _super);
    function TimeManagementWebPart() {
        return _super.call(this) || this;
    }
    TimeManagementWebPart.prototype.render = function () {
        this.sharepointHelper = new SharePontHelper(this.context);
        var element = React.createElement(TimeManagement, {
            description: this.properties.description,
            context: this.context,
            sharepointHelper: this.sharepointHelper
        });
        ReactDom.render(element, this.domElement);
    };
    TimeManagementWebPart.prototype.onDispose = function () {
        ReactDom.unmountComponentAtNode(this.domElement);
    };
    Object.defineProperty(TimeManagementWebPart.prototype, "dataVersion", {
        get: function () {
            return Version.parse('1.0');
        },
        enumerable: true,
        configurable: true
    });
    TimeManagementWebPart.prototype.getPropertyPaneConfiguration = function () {
        return {
            pages: [
                {
                    header: {
                        description: strings.PropertyPaneDescription
                    },
                    groups: [
                        {
                            groupName: strings.BasicGroupName,
                            groupFields: [
                                PropertyPaneTextField('description', {
                                    label: strings.DescriptionFieldLabel
                                })
                            ]
                        }
                    ]
                }
            ]
        };
    };
    return TimeManagementWebPart;
}(BaseClientSideWebPart));
export default TimeManagementWebPart;
//# sourceMappingURL=TimeManagementWebPart.js.map