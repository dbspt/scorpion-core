import { until } from "selenium-webdriver";
import { Driver } from "../driver";

const driver = Driver.getInstance();

export class UserPrompts {
  public static getInstance() {
    if (!UserPrompts.instance) {
      UserPrompts.instance = new UserPrompts();
    }

    return UserPrompts.instance;
  }

  private static instance: UserPrompts;

  public constructor() {}

  public async acceptAlert(callback?: (...args: any[]) => void) {
    await driver.session.wait(until.alertIsPresent());
    return await driver.session.switchTo().alert().accept().then(callback);
  }

  public async dismissAlert(callback?: (...args: any[]) => void) {
    await driver.session.wait(until.alertIsPresent());
    return await driver.session.switchTo().alert().dismiss().then(callback);
  }

  public async getAlertText(callback?: (...args: any[]) => void) {
    await driver.session.wait(until.alertIsPresent());
    return await driver.session.switchTo().alert().getText().then(callback);
  }

  public async setAlertText(text: string, callback?: (...args: any[]) => void) {
    await driver.session.wait(until.alertIsPresent());
    return await driver.session
      .switchTo()
      .alert()
      .sendKeys(text)
      .then(callback);
  }
}
