import { until, WebElement } from "selenium-webdriver";
import { Driver } from "../driver";

const driver = Driver.getInstance();

export class FindingElements {
  public static getInstance() {
    if (!FindingElements.instance) {
      FindingElements.instance = new FindingElements();
    }

    return FindingElements.instance;
  }

  private static instance: FindingElements;

  public constructor() {}

  public async waitForElementVisible(
    element: WebElement,
    timeout?: number,
    callback?: (...args: any[]) => void,
    message?: string
  ) {
    return await driver.session
      .wait(until.elementIsVisible(element), timeout, message)
      .then(callback);
  }

  public async elementIsEnabled(
    element: WebElement,
    timeout?: number,
    callback?: (...args: any[]) => void,
    message?: string
  ) {
    return await driver.session
      .wait(until.elementIsEnabled(element), timeout, message)
      .then(callback);
  }

  public async stalenessOf(
    element: WebElement,
    timeout?: number,
    callback?: (...args: any[]) => void
  ) {
    return await driver.session
      .wait(until.stalenessOf(element), timeout)
      .then(callback);
  }
}
