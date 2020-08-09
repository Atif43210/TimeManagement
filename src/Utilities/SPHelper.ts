
import { sp, IItemAddResult, IItems } from "@pnp/sp/presets/all";
import { ISPFXContext } from "@pnp/common";
import { ISiteUserInfo } from "@pnp/sp/site-users/types";
export interface ISharePointHelper {
  getListItems(listName: string, select: string[], filter: string, expand: string[]): Promise<any>
  addItemtoList(listName: string, properties: any): Promise<any>
  getCurrentUserDetails(): Promise<ISiteUserInfo>;
}
export class SharePontHelper implements ISharePointHelper {

  constructor(context: ISPFXContext) {

    sp.setup({
      spfxContext: context
    });
  }
  public async getListItems(listName: string, select: string[], filter: string, expand: string[] = []): Promise<any> {
    let items: IItems = sp.web.lists.getByTitle(listName).items;
    if (filter) {
      items = items.filter(filter)
    }
    if (expand.length > 0) {
      items = items.expand(...expand);
    }
    if (select.length > 0) {
      items = items.select(...select)
    }
    return items.getAll();
  }
  public async addItemtoList(listName: string, properties: any): Promise<IItemAddResult> {
    return sp.web.lists.getByTitle(listName).items.add(properties);
  }
  public async getCurrentUserDetails(): Promise<ISiteUserInfo> {
    return await sp.web.currentUser.get();
  }
}
