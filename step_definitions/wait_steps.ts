import { setDefaultTimeout, Then } from "@cucumber/cucumber";
import { Wait } from "../support";

Then(/^I wait for (\d+) seconds$/, async function (seconds: number) {
  await Wait.seconds(seconds);
});

Then(/^I wait for (\d+) milliseconds$/, async function (milliseconds: number) {
  await Wait.milliseconds(milliseconds);
});

Then(/^I set timeout as (\d+) seconds$/, async function (seconds: number) {
  const setTimeout = seconds * 1000;
  setDefaultTimeout(setTimeout);
});

Then(/^I set timeout as (\d+) minutes$/, async function (minutes: number) {
  const setTimeout = minutes * 60 * 1000;
  setDefaultTimeout(setTimeout);
});