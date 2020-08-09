import * as React from "react";
import { IRequestFormProps, IRequestFormState, ErrorMessages, IRequestFormValues } from "./IRequestForm";
import { TextField } from "office-ui-fabric-react/lib/TextField";
import { PrimaryButton, DefaultButton } from "office-ui-fabric-react/lib/Button";;
import { Label } from "office-ui-fabric-react/lib/Label";
import { PeoplePicker, PrincipalType } from "@pnp/spfx-controls-react/lib/PeoplePicker";
import { TaxonomyPicker, IPickerTerms } from "@pnp/spfx-controls-react/lib/TaxonomyPicker";
import { FieldTextRenderer } from "@pnp/spfx-controls-react/lib/FieldTextRenderer";
import styles from "./RequestForm.module.scss";

export default class RequestForm extends React.Component<IRequestFormProps, IRequestFormState>{
    /**
     *
     */
    constructor(props: IRequestFormProps) {
        super(props);
        this.state = {
            approverErrorMessage: "",
            categoryErrorMessage: "",
            descriptionErrorMessage: "",
            effortErrorMessage: "",
            titleErrorMessage: "",
            approver:[],
            category:[],
            description:"",
            effort:"",
            title:""
        }
       
    }
    private _saveButtonClickHandler(): void {
        const requestValues:IRequestFormValues=this.state;
        this.props.saveItem(requestValues);
    }
    private _cancelButtonClickHandler(): void {
       
        alert("cancel button clicked");
    }
    
    public componentDidUpdate(): any {
       
        
    }
    private _textBoxChangeEventHandler(event: React.ChangeEvent<HTMLInputElement>, name): void {
        // event.target.att
        let fieldNameProperty: string = event.target.attributes.getNamedItem("name").value;
        let fieldValue: string = event.target.value;       
       
        switch (fieldNameProperty) {
            case "Title":
               
                if(fieldValue==""){
                    this.setState({title: fieldValue,titleErrorMessage:ErrorMessages.required});
                }else{
                    this.setState({title: fieldValue,titleErrorMessage:ErrorMessages.noError});
                }
                break;
            case "Description":
                
                if(fieldValue==""){
                    this.setState({description: fieldValue,descriptionErrorMessage:ErrorMessages.required});
                }else{
                    this.setState({description: fieldValue,descriptionErrorMessage:ErrorMessages.noError});
                }
                break;
            case "Effort":
                
                if (fieldValue == "") {
                    this.setState({effort: fieldValue , effortErrorMessage: ErrorMessages.required });
                } else {
                    let effortFloat: number = parseFloat(fieldValue);
                    if (isNaN(effortFloat)) {
                        this.setState({ effort: fieldValue , effortErrorMessage: ErrorMessages.notANumber });
                    } else {

                        this.setState({effort: fieldValue ,  effortErrorMessage: ErrorMessages.noError });
                    }
                }
                break;
            default:
                break;

        }

    }
    private _getPeoplePickerItems(items: any[]) {
        let users=[];
        for (let item in items) {
            users.push(items[item].id);
        }
         this.setState({ approver: users });  
    }
    private _onTaxPickerChangeHandler(terms: IPickerTerms) {
        this.setState({category:terms})
    }
    public render(): React.ReactElement {

        return (
            <div className={styles.requestform} >
                <div className="ms-Grid-row">
                    <Label className={styles.heading} >Effort Update Form</Label>
                </div>
                <div className="ms-Grid-row">

                    <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg12">
                        <TextField required={true} name="Title" label="Title" placeholder="Enter Title"
                            onChange={this._textBoxChangeEventHandler.bind(this)}
                            defaultValue={this.props.requestFormValues.title}
                            errorMessage={this.state.titleErrorMessage}></TextField>
                    </div>
                </div>
                <div className="ms-Grid-row">

                    <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg12">
                        <TextField label="Effort" name="Effort" onChange={this._textBoxChangeEventHandler.bind(this)} required={true} placeholder="Enter Effort"
                            defaultValue={this.props.requestFormValues.effort} errorMessage={this.state.effortErrorMessage}></TextField>
                    </div>
                </div>
                <div className="ms-Grid-row">
                    <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg12">
                        <PeoplePicker
                            context={this.props.context}
                            titleText="Approver"
                            personSelectionLimit={1}
                            showtooltip={true}

                            disabled={false}
                            selectedItems={this._getPeoplePickerItems.bind(this)}
                            showHiddenInUI={false}
                            ensureUser={true}
                            principalTypes={[PrincipalType.User]}
                            resolveDelay={1000}
                            placeholder="Enter Approver"
                            errorMessage={this.state.approverErrorMessage}
                           
                        />
                    </div>
                </div>

                <div className="ms-Grid-row">

                    <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg12">
                        <TextField label="Description" name="Description" onChange={this._textBoxChangeEventHandler.bind(this)} placeholder="Enter Description" required={true} multiline={true} defaultValue={this.props.requestFormValues.title} errorMessage={this.state.descriptionErrorMessage}></TextField>
                    </div>
                </div>
                <div className="ms-Grid-row">

                    <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg12">
                        <TaxonomyPicker allowMultipleSelections={true}
                            termsetNameOrID="Category"
                            panelTitle="Select Term"
                            label="Category"
                            context={this.props.context}
                            onChange={this._onTaxPickerChangeHandler.bind(this)}
                            isTermSetSelectable={false}

                        />

                    </div>
                </div>
                <div className="ms-Grid-row">
                    <div className="ms-Grid-col ms-sm4 ms-md4 ms-lg4 ms-smOffset4 ms-mdOffset4 ms-lgOffset4">
                        <PrimaryButton text="Save" onClick={this._saveButtonClickHandler.bind(this)}></PrimaryButton>
                        <DefaultButton text="Cancel" onClick={this._cancelButtonClickHandler.bind(this)}></DefaultButton>
                    </div>
                </div>
            </div>

        )
    }
}