import { FindingElements } from "./findingElements";
import { Selector } from "../selector";

const finding = FindingElements.getInstance();
const selector = Selector.getInstance();

export class ElementInteraction {
  public static getInstance() {
    if (!ElementInteraction.instance) {
      ElementInteraction.instance = new ElementInteraction();
    }

    return ElementInteraction.instance;
  }

  private static instance: ElementInteraction;

  public constructor() {}

  public async click(locator: string, callback?: (...args: any[]) => void) {
    const element = await selector.getElement(locator);
    await finding.waitForElementVisible(element);
    await finding.elementIsEnabled(element);
    return await element.click().then(callback);
  }

  public async sendKeys(
    locator: string,
    text: string,
    callback?: (...args: any[]) => void
  ) {
    const element = await selector.getElement(locator);
    await finding.waitForElementVisible(element);
    await finding.elementIsEnabled(element);
    return await element.sendKeys(text).then(callback);
  }

  public async clear(locator: string, callback?: (...args: any[]) => void) {
    const element = await selector.getElement(locator);
    await finding.waitForElementVisible(element);
    return await element.clear().then(callback);
  }
}