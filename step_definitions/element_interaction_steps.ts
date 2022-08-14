import { Then } from "@cucumber/cucumber";
import { ElementInteraction } from "../support/web";

const interaction = ElementInteraction.getInstance();

Then(/^I click on "([^"]*)"$/, async function (locator: string) {
  await interaction.click(locator);
});

Then(/^I click on the text "([^"]*)"$/, async function (text: string) {
  await interaction.click(`xpath: /\/\*[contains(text(), '${text}')]`);
});

Then(/^I click on the tag "([^"]*)"$/, async function (label: string) {
  await interaction.click(`xpath: /\/\label[text() = '${label}']`);
});

Then(
  /^I fill the "([^"]*)" field with "([^"]*)"$/,
  async function (locator: string, text: string) {
    await interaction.sendKeys(locator, text);
  }
);

Then(/^I clean the field "([^"]*)"$/, async function (element: string) {
  await interaction.clear(element);
});