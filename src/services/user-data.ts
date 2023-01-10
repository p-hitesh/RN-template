import Environment from "../utils/environment";
import Storage from "../utils/local-storage";
import HttpClient from "./http-client";

export interface IUserData {
  id?: number;
  name?: string;
}

enum User {
  USER_DATA = "user",
}

export default class UserDataServices {
  public static readonly GET_USER_DATA = "";

  private static async landing() {
    const { data } = await HttpClient.get(`${this.GET_USER_DATA}`);
    if (Environment.isOffline()) {
      await Storage.setItem(User.USER_DATA, JSON.stringify(data));
    }
    return data;
  }

  public static async getLandingPageInfo() {
    if (Environment.isOffline()) {
      const response =
        (await Storage.getItem(User.USER_DATA)) ||
        (await UserDataServices.landing());

      return response;
    } else {
      return await UserDataServices.landing();
    }
  }
}
