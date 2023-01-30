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

export default class DashboardDataService {
  public static readonly GET_TABLE_DATA = "entries";

  private static async table() {
    const { data } = await HttpClient.get(`${this.GET_TABLE_DATA}`);
    return data;
  }

  public static async getDashboardData() {
    return await DashboardDataService.table();
  }
}
