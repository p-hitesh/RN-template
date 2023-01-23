import Environment from "../utils/environment";
import Storage from "../utils/local-storage";
import HttpClient from "./http-client";

export interface IDashboardData {
  createdAt: DateConstructor;
  system: string;
  applicationName: string;
  version: number;
  vendor: string;
  alternateName: string;
  summary: string;
  documentation: string;
  productSite: string;
  startURL: string;
  respITdept: string;
  respITcontact: string;
  respITsubscription: string;
  techITcontact: string;
  id: number;
}

enum dashboard {
  TABLE_DATA = "table",
}

export default class DashboardDataService {
  public static readonly GET_TABLE_DATA = "entries";

  private static async table() {
    const { data } = await HttpClient.get(`${this.GET_TABLE_DATA}`);
    if (Environment.isOffline()) {
      await Storage.setItem(dashboard.TABLE_DATA, JSON.stringify(data));
    }
    return data;
  }

  public static async getDashboardData() {
    if (Environment.isOffline()) {
      const response =
        (await Storage.getItem(dashboard.TABLE_DATA)) ||
        (await DashboardDataService.table());

      return response;
    } else {
      return await DashboardDataService.table();
    }
  }
}
