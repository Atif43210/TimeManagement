import { Version } from '@microsoft/sp-core-library';
import { IPropertyPaneConfiguration } from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
export interface ITimeManagementWebPartProps {
    description: string;
}
import { ISharePointHelper } from "../../Utilities/SPHelper";
export default class TimeManagementWebPart extends BaseClientSideWebPart<ITimeManagementWebPartProps> {
    sharepointHelper: ISharePointHelper;
    constructor();
    render(): void;
    protected onDispose(): void;
    protected readonly dataVersion: Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
//# sourceMappingURL=TimeManagementWebPart.d.ts.map