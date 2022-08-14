import { Then } from "@cucumber/cucumber";
import { Selector } from "../support";
import { Navigation, FindingElements } from "../support/web";

const navigation = Navigation.getInstance();
const finding = FindingElements.getInstance();
const selector = Selector.getInstance();

Then(/^I am on "([^"]*)"$/, async function (url: string) {
  await navigation.url(url, async () => {
    const element = await selector.getElement("tagname: body");
    await finding.waitForElementVisible(element, 1000);
  });
});

Then(/^I navigate forward$/, async function () {
  await navigation.forward();
});

Then(/^I navigate back$/, async function () {
  await navigation.back();
});

Then(/^I refresh page$/, async function () {
  await navigation.refresh();
});

Then(/^I clear cookies$/, async function () {
  await navigation.clearCookies();
});

Then(
  /^I add a cookie "([^"]*)" with value "([^"]*)"$/,
  async function (name: string, value: string) {
    await navigation.addCookie(name, value);
  }
);