import { WebPartContext } from "@microsoft/sp-webpart-base";
import { IPickerTerms } from "@pnp/spfx-controls-react/lib/TaxonomyPicker";
export interface IRequestFormValues {
    title: string;
    effort: string;
    approver: number[];
    description: string;
    category: IPickerTerms;
}
export interface IRequestFormProps {
    context: WebPartContext;
    requestFormValues: IRequestFormValues;
    updateRequestFormValue(requestFormValues: IRequestFormValues): void;
    saveItem(requestFormValues: IRequestFormValues): void;
}
export interface IRequestFormState extends IRequestFormValues {
    titleErrorMessage: string;
    effortErrorMessage: string;
    approverErrorMessage: string;
    descriptionErrorMessage: string;
    categoryErrorMessage: string;
}
export declare const ErrorMessages: {
    required: string;
    notANumber: string;
    noError: string;
};
//# sourceMappingURL=IRequestForm.d.ts.map