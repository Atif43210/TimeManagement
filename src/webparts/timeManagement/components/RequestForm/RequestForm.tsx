import * as React from "react";
import { IRequestFormProps, IRequestFormState } from "./IRequestForm";
import { TextField } from "office-ui-fabric-react/lib/TextField";
import { Label } from "office-ui-fabric-react/lib/Label";
import { PeoplePicker, PrincipalType } from "@pnp/spfx-controls-react/lib/PeoplePicker";
import { TaxonomyPicker } from "@pnp/spfx-controls-react/lib/TaxonomyPicker";
export default class RequestForm extends React.Component<IRequestFormProps, IRequestFormState>{
    private _getPeoplePickerItems(){
        
    }
    public render(): React.ReactElement {
        return (
            <div className="ms-Grid">
                <div className="ms-Grid-row">
                    <div className="ms-Grid-col ms-sm6 ms-md6 ms-lg6">
                        <Label>Title</Label>
                    </div>
                    <div className="ms-Grid-col ms-sm6 ms-md6 ms-lg6">
                        <TextField placeholder="Enter Title"> </TextField>
                    </div>
                </div>
                <div className="ms-Grid-row">
                    <div className="ms-Grid-col ms-sm6 ms-md6 ms-lg6">
                        <Label>Effort</Label>
                    </div>
                    <div className="ms-Grid-col ms-sm6 ms-md6 ms-lg6">
                        <TextField placeholder="Enter Effort"> </TextField>
                    </div>
                </div>
                <div className="ms-Grid-row">
                    <div className="ms-Grid-col ms-sm6 ms-md6 ms-lg6">
                        <Label>Approver</Label>
                    </div>
                    <div className="ms-Grid-col ms-sm6 ms-md6 ms-lg6">
                   
                    </div>
                </div>

                <div className="ms-Grid-row">
                    <div className="ms-Grid-col ms-sm6 ms-md6 ms-lg6">
                        <Label>Description </Label>
                    </div>
                    <div className="ms-Grid-col ms-sm6 ms-md6 ms-lg6">
                        <TextField placeholder="Enter Description" multiline={true}> </TextField>
                    </div>
                </div>
                <div className="ms-Grid-row">
                    <div className="ms-Grid-col ms-sm6 ms-md6 ms-lg6">
                        <Label> Category </Label>
                    </div>
                    <div className="ms-Grid-col ms-sm6 ms-md6 ms-lg6">
                        <TextField placeholder="Enter Category "> </TextField>
                    </div>
                </div>
            </div>

        )
    }
}