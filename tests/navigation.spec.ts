import { describe, it } from "mocha";
import { Browser, Driver } from "../support";
import { Assert, Navigation } from "../support/web";

describe("Navigation tests", async function () {
  const driver = Driver.getInstance();
  const assert = Assert.getInstance();
  const navigation = Navigation.getInstance();
  this.timeout(0);

  before(async function () {
    driver.session = new Browser().init();
    driver.session.manage().window().maximize();
  });

  afterEach(async function (this: Mocha.Context) {
    let testCaseName: string | undefined = this.currentTest?.title;
    let testCaseStatus: string | undefined = this.currentTest?.state;

    if (testCaseStatus === "failed") {
      console.log(`Test: ${testCaseName}, Status: Failed!`);
    } else if (testCaseStatus === "passed") {
      console.log(`Test: ${testCaseName}, Status: Passed!`);
    } else {
      console.log(`Test: ${testCaseName}, Status: Unknown!`);
    }
  });

  after(async function () {
    await driver.session.quit();
  });

  it("Search on google page", async function () {
    await navigation.url("https://www.google.com.br");
    await assert.shouldTitle("Google");
    await assert.attributeContains("name: q", "class: gsfi");
    await assert.notAttributeContains("name: q", "class: lol");
    await assert.attributeEquals("name: q", "class: gLFyf gsfi");
    await assert.notAttributeEquals("name: q", "class: lol");
    await assert.cssProperty("name: q", "display: flex");
    await assert.notCssProperty("name: q", "display: none");
  });
});
