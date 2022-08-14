import { Then } from "@cucumber/cucumber";
import { Assert } from "../support/web";

const assert = Assert.getInstance();

Then(
  /^I assert that the "([^"]*)" element contains the "([^"]*)" attribute$/,
  async function (locator: string, attribute: string) {
    await assert.attributeContains(locator, attribute);
  }
);

Then(
  /^I assert that the "([^"]*)" element does not contain the "([^"]*)" attribute$/,
  async function (locator: string, attribute: string) {
    await assert.notAttributeContains(locator, attribute);
  }
);

Then(
  /^I assert that the page document contains the text "([^"]*)"$/,
  async function (text: string) {
    await assert.domContainsText(text);
  }
);

Then(
  /^I assert that the page document does not contain the text "([^"]*)"$/,
  async function (text: string) {
    await assert.domNotContainsText(text);
  }
);

Then(
  /^I assert that the "([^"]*)" element contains the text "([^"]*)"$/,
  async function (locator: string, text: string) {
    await assert.elementContainsText(locator, text);
  }
);

Then(
  /^I assert that the "([^"]*)" element does not contain the text "([^"]*)"$/,
  async function (locator: string, text: string) {
    await assert.elementNotContainsText(locator, text);
  }
);

Then(/^I assert see "([^"]*)" checked$/, async function (locator: string) {
  await assert.isChecked(locator);
});

Then(/^I assert see "([^"]*)" unchecked$/, async function (locator: string) {
  await assert.isUnchecked(locator);
});

Then(/^I assert to be in "([^"]*)"$/, async function (text: string) {
  await assert.shouldTitle(text);
});