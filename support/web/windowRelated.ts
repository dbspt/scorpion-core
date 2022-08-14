import { Driver } from "../driver";

const driver = Driver.getInstance();

export class WindowRelated {
  public static getInstance() {
    if (!WindowRelated.instance) {
      WindowRelated.instance = new WindowRelated();
    }

    return WindowRelated.instance;
  }

  private static instance: WindowRelated;

  public constructor() {}

  public async maximizeWindow(callback?: (...args: any[]) => void) {
    return await driver.session.manage().window().maximize().then(callback);
  }

  public async openNewWindow(
    type: string = "tab",
    callback?: (...args: any[]) => void
  ) {
    return await driver.session.switchTo().newWindow(type).then(callback);
  }

  public async switchWindow(
    position: number = 0,
    callback?: (...args: any[]) => void
  ) {
    const allWindows = await driver.session.getAllWindowHandles();
    return await driver.session
      .switchTo()
      .window(allWindows[position])
      .then(callback);
  }

  public async close(callback?: (...args: any[]) => void) {
    return await driver.session.close().then(callback);
  }
}
