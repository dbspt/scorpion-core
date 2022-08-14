import { Driver } from "../driver";

const driver = Driver.getInstance();

export class Navigation {
  public static getInstance() {
    if (!Navigation.instance) {
      Navigation.instance = new Navigation();
    }

    return Navigation.instance;
  }

  private static instance: Navigation;

  public constructor() {}

  public async url(url: string, callback?: (...args: any[]) => void) {
    return await driver.session.get(url).then(callback);
  }

  public async back(callback?: (...args: any[]) => void) {
    return await driver.session.navigate().back().then(callback);
  }

  public async forward(callback?: (...args: any[]) => void) {
    return await driver.session.navigate().forward().then(callback);
  }

  public async refresh(callback?: (...args: any[]) => void) {
    return await driver.session.navigate().refresh().then(callback);
  }

  public async title(callback?: (...args: any[]) => void) {
    return await driver.session.getTitle().then(callback);
  }

  public async clearCookies(callback?: (...args: any[]) => void) {
    return await driver.session.manage().deleteAllCookies().then(callback);
  }

  public async addCookie(
    name: string,
    value: string,
    callback?: (...args: any[]) => void
  ) {
    return await driver.session
      .manage()
      .addCookie({ name, value })
      .then(callback);
  }
}
