import { Driver } from "../driver";

const driver = Driver.getInstance();

export class Screenshot {
  public static getInstance() {
    if (!Screenshot.instance) {
        Screenshot.instance = new Screenshot();
    }

    return Screenshot.instance;
  }

  private static instance: Screenshot;

  public constructor() {}

  public async capture(attach) {
    const screenShot = await driver.session.takeScreenshot();
    attach(screenShot, "base64:image/png");
  }
}