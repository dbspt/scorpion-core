import { Then } from "@cucumber/cucumber";
import { Selector } from "../support";
import { Frames } from "../support/web";

const frames = Frames.getInstance();
const selector = Selector.getInstance();

Then(/^I should see the frame "([^"]*)"$/, async function (locator: string) {
  const element = await selector.getElement(locator);
  await frames.frame(element);
});

Then(/^I should leave frame$/, async function () {
  await frames.defaultContent();
});