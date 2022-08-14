import { WebElement } from "selenium-webdriver";
import { Driver } from "../driver";

const driver = Driver.getInstance();

export class Frames {
  public static getInstance() {
    if (!Frames.instance) {
      Frames.instance = new Frames();
    }

    return Frames.instance;
  }

  private static instance: Frames;

  public constructor() {}

  public async frame(
    frame: number | WebElement,
    callback?: (...args: any[]) => void
  ) {
    return await driver.session.switchTo().frame(frame).then(callback);
  }

  public async defaultContent(callback?: (...args: any[]) => void) {
    return await driver.session.switchTo().defaultContent().then(callback);
  }
}
