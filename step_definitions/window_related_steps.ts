import { Then } from "@cucumber/cucumber";
import { Driver, Selector } from "../support";
import { FindingElements, Navigation, WindowRelated } from "../support/web";

const driver = Driver.getInstance();
const finding = FindingElements.getInstance();
const navigation = Navigation.getInstance();
const window = WindowRelated.getInstance();
const selector = Selector.getInstance();

Then(/^I maximize the browser window$/, async function () {
  await window.maximizeWindow();
});

Then(/^I open the link "([^"]*)" in new tab$/, async function (url: string) {
  await window.openNewWindow("tab", async function () {
    await navigation.url(url, async function () {
      const element = await selector.getElement("tagname: body");
      await finding.waitForElementVisible(element, 1000);
    });
  });
});

Then(/^I open the link "([^"]*)" in new window$/, async function (url: string) {
  await window.openNewWindow("window", async function () {
    await navigation.url(url, async function () {
      const element = await selector.getElement("tagname: body");
      await finding.waitForElementVisible(element, 1000);
    });
  });
});

Then(
  /^I switch tabs in (\d+) position of the browser$/,
  async function (position: number) {
    await window.switchWindow(position);
  }
);

Then(/^I close (?:tab|window)?$/, async function () {
  let title = await navigation.title();
  await window.close(async function () {
    const windows = await driver.session.getAllWindowHandles();
    console.log(
      `O guia [${title}](${windows[windows.length - 1]}) foi encerrado`
    );
  });
});