import * as fs from "fs";
import * as path from "path";
import { By, until, WebElement } from "selenium-webdriver";
import { Driver } from "./";

const driver = Driver.getInstance();

export class Selector {
  public static getInstance() {
    if (!Selector.instance) {
      Selector.instance = new Selector();
    }

    return Selector.instance;
  }

  private static instance: Selector;

  private _tags: any;

  private constructor() {}

  get tags() {
    return this._tags;
  }

  set tags(tags) {
    this._tags = tags;
  }

  getPageObjects() {
    let selectors: any;

    if (this._tags) {
      for (const tag of this._tags) {
        if (tag.name.includes("_page")) {
          const pageId = tag.name.replace("@", "");
          const cwd = path.join(process.cwd(), `/page_objects/${pageId}.json`);
          const pageContent = fs.readFileSync(cwd, "utf8");
          const pageSelectors = JSON.parse(pageContent);
          selectors = { ...selectors, ...pageSelectors };
        }
      }
    }

    return selectors;
  }

  public getSelector(element: string) {
    const pageObject = this.getPageObjects();

    if (pageObject) {
      const selector = pageObject[element];

      if (selector) {
        return selector;
      }
    }

    return element;
  }

  public async getElement(locator: string): Promise<WebElement> {
    const selector = await this.getSelector(locator);
    const [by, pattern] = selector.includes(":")
      ? selector.split(":")
      : ["pattern", locator];
    const byCondition = await this.getByCondition(by.trim(), pattern.trim());
    return await driver.session.wait(until.elementLocated(byCondition));
  }

  private async getByCondition(by: string, pattern: string): Promise<By> {
    switch (by.toLowerCase()) {
      case "classname":
        return By.className(pattern);
      case "css":
        return By.css(pattern);
      case "id":
        return By.id(pattern);
      case "linktext":
        return By.linkText(pattern);
      case "name":
        return By.name(pattern);
      case "partiallinktext":
        return By.partialLinkText(pattern);
      case "tagname":
        return By.tagName(pattern);
      case "xpath":
        return By.xpath(pattern);
      case "text":
        return By.xpath(`//*[contains(text(), '${pattern}')]`);
      case "pattern":
        return By.xpath(`//*[@name | @id = '${pattern}']`);
      default:
        throw Error("Locator Type not found.");
    }
  }
}