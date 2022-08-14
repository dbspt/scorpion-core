import { Then } from "@cucumber/cucumber";
import { UserPrompts } from "../support/web";

const prompt = UserPrompts.getInstance();

Then(/^I accept dialog box$/, async function () {
  await prompt.acceptAlert();
});

Then(/^I dismiss dialog box$/, async function () {
  await prompt.dismissAlert();
});

Then(
  /^I fill in the text "([^"]*)" in the dialog box$/,
  async function (text: string) {
    await prompt.setAlertText(text);
  }
);