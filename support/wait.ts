import { Driver } from "./";

const driver = Driver.getInstance();

export class Wait {
  public static async milliseconds(milliseconds: number) {
    if (milliseconds < 0) {
      return Promise.reject(
        Error(
          "It is not possible to wait for a negative time. Please enter a positive value."
        )
      );
    }

    await driver.session.sleep(milliseconds);
  }

  public static async seconds(seconds: number) {
    if (seconds < 0) {
      return Promise.reject(
        Error(
          "It is not possible to wait for a negative time. Please enter a positive value."
        )
      );
    }

    const milliseconds = seconds * 1000;
    await driver.session.sleep(milliseconds);
  }
}
