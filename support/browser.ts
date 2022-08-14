import { Builder } from "selenium-webdriver";
import { Options } from "selenium-webdriver/chrome";

export class Browser {
  private chrome() {
    const server: string = process.env.SERVER;

    const chromeOptions = new Options();
    chromeOptions.addArguments("--disable-gpu");
    chromeOptions.addArguments("--no-sandbox");
    chromeOptions.addArguments("--disable-extensions");
    chromeOptions.addArguments("--disable-notifications");
    chromeOptions.addArguments("--disable-popup-blocking");
    chromeOptions.addArguments("--disable-web-security");
    chromeOptions.excludeSwitches("enable-logging");
    chromeOptions.excludeSwitches("enable-automation");
    chromeOptions.setAcceptInsecureCerts(true);

    const driver = new Builder()
      .withCapabilities({
        browserName: "chrome",
        javascriptEnabled: true,
        acceptSslCerts: true,
      })
      .setChromeOptions(chromeOptions);

    if (server) {
      driver.usingServer(server);
    }

    return driver.build();
  }

  public init() {
    const browser: string = process.env.BROWSER;

    switch (browser) {
      case "chrome":
        return this.chrome();
      default:
        return this.chrome();
    }
  }
}
