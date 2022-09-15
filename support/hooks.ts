import {
  After,
  AfterAll,
  Before,
  BeforeAll,
  ITestCaseHookParameter,
  Status,
} from "@cucumber/cucumber";
import { Config, Driver, Selector } from "./";
import { Screenshot } from "./web";
import * as Report from "@dbservices/scorpion-report";

const driver = Driver.getInstance();
const selector = Selector.getInstance();
const screenShot = Screenshot.getInstance();

Before(async function (scenario) {
  selector.tags = scenario.pickle.tags;
});

Before({ tags: "@skipped" }, async function () {
  return Status.SKIPPED.toLowerCase();
});

After(async function (scenario: ITestCaseHookParameter) {
  console.log("");
  console.log(`Feature: ${scenario.gherkinDocument.feature.name}`);
  console.log(scenario.gherkinDocument.uri);

  if (scenario.result.status === Status.FAILED) {
    await screenShot.capture(this.attach);
  }

  console.log("After Hook: " + scenario.result.status);

  if (driver.session) {
    await driver.session.quit();
    driver.session = null;
  }
});

BeforeAll(async function () {
  console.log(" ██████╗ ██████╗ ██████╗ ██████╗ ██████╗ ██╗ ██████╗ ███╗   ██╗     ██████╗ ██████╗ ██████╗ ███████╗");
  console.log("██╔════╝██╔════╝██╔═══██╗██╔══██╗██╔══██╗██║██╔═══██╗████╗  ██║    ██╔════╝██╔═══██╗██╔══██╗██╔════╝");
  console.log("███████╗██║     ██║   ██║██████╔╝██████╔╝██║██║   ██║██╔██╗ ██║    ██║     ██║   ██║██████╔╝█████╗  ");
  console.log("╚════██║██║     ██║   ██║██╔══██╗██╔═══╝ ██║██║   ██║██║╚██╗██║    ██║     ██║   ██║██╔══██╗██╔══╝  ");
  console.log("███████║╚██████╗╚██████╔╝██║  ██║██║     ██║╚██████╔╝██║ ╚████║    ╚██████╗╚██████╔╝██║  ██║███████╗");
  console.log("╚══════╝ ╚═════╝ ╚═════╝ ╚═╝  ╚═╝╚═╝     ╚═╝ ╚═════╝ ╚═╝  ╚═══╝     ╚═════╝ ╚═════╝ ╚═╝  ╚═╝╚══════╝");
  console.log("by DBServices PT");
  console.log("----------------------------------------------------------------------------------------------------");
  console.log("");
});

AfterAll(async function () {
  if (await new Config().getValue("husky.url")) {
    setTimeout(async function () {
      let huskyUrl = await new Config().getValue("husky.url");
      let huskyAppId = await new Config().getValue("husky.app_id");
      let huskyToken = await new Config().getValue("husky.token");
      await Report.generate({
        jsonFile: "reports/cucumber_report.json",
        output: "reports/report.html",
        husky: {
          url: huskyUrl,
          appId: huskyAppId,
          token: huskyToken,
        }
      });
    }, 1000);
  }
});