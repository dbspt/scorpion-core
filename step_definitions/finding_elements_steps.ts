import { Then } from "@cucumber/cucumber";
import { Selector } from "../support";
import { FindingElements } from "../support/web";

const finding = FindingElements.getInstance();
const selector = Selector.getInstance();

Then(
  /^I wait for the "([^"]*)" element to be visible$/,
  async function (locator: string) {
    const element = await selector.getElement(locator);
    await finding.waitForElementVisible(element);
  }
);

Then(
  /^I wait for the "([^"]*)" element to be enabled$/,
  async function (locator: string) {
    const element = await selector.getElement(locator);
    await finding.elementIsEnabled(element);
  }
);

Then(
  /^I wait for element "([^"]*)" to become stale$/,
  async function (locator: string) {
    const element = await selector.getElement(locator);
    await finding.stalenessOf(element);
  }
);