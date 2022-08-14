import { Then } from "@cucumber/cucumber";
import { Screenshot } from "../support/web";

const screenShot = Screenshot.getInstance();

Then(/^I take a screenshot$/, async function () {
  await screenShot.capture(this.attach);
});
