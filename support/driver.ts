import { ThenableWebDriver } from "selenium-webdriver";

export class Driver {
  public static getInstance() {
    if (!Driver.instance) {
      Driver.instance = new Driver();
    }

    return Driver.instance;
  }

  private static instance: Driver;

  private driver: ThenableWebDriver;

  private constructor() {}

  get session(): ThenableWebDriver {
    return this.driver;
  }

  set session(_driver: ThenableWebDriver) {
    this.driver = _driver;
  }
}