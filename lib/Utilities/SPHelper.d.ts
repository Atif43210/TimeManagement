import { IItemAddResult } from "@pnp/sp/presets/all";
import { ISPFXContext } from "@pnp/common";
import { ISiteUserInfo } from "@pnp/sp/site-users/types";
export interface ISharePointHelper {
    getListItems(listName: string, select: string[], filter: string, expand: string[]): Promise<any>;
    addItemtoList(listName: string, properties: any): Promise<any>;
    getCurrentUserDetails(): Promise<ISiteUserInfo>;
}
export declare class SharePontHelper implements ISharePointHelper {
    constructor(context: ISPFXContext);
    getListItems(listName: string, select: string[], filter: string, expand?: string[]): Promise<any>;
    addItemtoList(listName: string, properties: any): Promise<IItemAddResult>;
    getCurrentUserDetails(): Promise<ISiteUserInfo>;
}
//# sourceMappingURL=SPHelper.d.ts.map