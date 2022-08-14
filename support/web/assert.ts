import { expect } from "chai";
import { DocumentHandling } from "./documentHandling";
import { Selector } from "../selector";
import { Navigation } from "./navigation";

const document = DocumentHandling.getInstance();
const selector = Selector.getInstance();
const navigation = Navigation.getInstance();

export class Assert {
  public static getInstance() {
    if (!Assert.instance) {
      Assert.instance = new Assert();
    }

    return Assert.instance;
  }

  private static instance: Assert;

  public constructor() {}

  public async attributeContains(locator: string, attribute: string) {
    const element = await selector.getElement(locator);
    const [attr, val] = attribute.split(":");
    const expected = await element.getAttribute(attr.trim());
    return expect(expected).contains(val.trim());
  }

  public async notAttributeContains(locator: string, attribute: string) {
    const element = await selector.getElement(locator);
    const [attr, val] = attribute.split(":");
    const expected = await element.getAttribute(attr.trim());
    return expect(expected).not.contains(val.trim());
  }

  public async attributeEquals(locator: string, attribute: string) {
    const element = await selector.getElement(locator);
    const [attr, val] = attribute.split(":");
    const expected = await element.getAttribute(attr.trim());
    return expect(expected).equals(val.trim());
  }

  public async notAttributeEquals(locator: string, attribute: string) {
    const element = await selector.getElement(locator);
    const [attr, val] = attribute.split(":");
    const expected = await element.getAttribute(attr.trim());
    return expect(expected).not.equals(val.trim());
  }

  public async cssProperty(locator: string, cssProperty: string) {
    const element = await selector.getElement(locator);
    const [prop, val] = cssProperty.split(":");
    const expected = await element.getCssValue(prop.trim());
    return expect(expected).equals(val.trim());
  }

  public async notCssProperty(locator: string, cssProperty: string) {
    const element = await selector.getElement(locator);
    const [prop, val] = cssProperty.split(":");
    const expected = await element.getCssValue(prop.trim());
    return expect(expected).not.equals(val.trim());
  }

  public async domContainsText(text: string) {
    return await document.source(async function (dom: string) {
      try {
        expect(dom).to.include(text);
      } catch {
        expect.fail(`O texto "${text}" não contém no DOM da página.`);
      }
    });
  }

  public async domNotContainsText(text: string) {
    return await document.source(async function (result: string) {
      try {
        expect(result).to.not.include(text);
      } catch {
        expect.fail(`O texto "${text}" contém no DOM da página.`);
      }
    });
  }

  public async elementContainsText(element: string, text: string) {
    const getElement = await selector.getElement(element);
    const existText = await getElement.getText();

    if (existText.length <= 0) {
      return await getElement
        .getAttribute("value")
        .then(async function (result) {
          try {
            expect(result).to.include(text);
          } catch {
            expect.fail(
              `O elemento contém seguinte texto "${result}" do esperado "${text}".`
            );
          }
        });
    }

    return await getElement.getText().then(async function (result) {
      try {
        expect(result).to.include(text);
      } catch {
        expect.fail(
          `O elemento contém seguinte texto "${result}" do esperado "${text}".`
        );
      }
    });
  }

  public async elementNotContainsText(element: string, text: string) {
    const getElement = await selector.getElement(element);
    const existText = await getElement.getText();

    if (existText.length <= 0) {
      return await getElement
        .getAttribute("value")
        .then(async function (result) {
          try {
            expect(result).to.not.include(text);
          } catch {
            expect.fail(
              `O elemento contém seguinte texto "${result}" do esperado "${text}".`
            );
          }
        });
    }

    return await getElement.getText().then(async function (result) {
      try {
        expect(result).to.not.include(text);
      } catch {
        expect.fail(
          `O elemento contém seguinte texto "${result}" do esperado "${text}".`
        );
      }
    });
  }

  public async isChecked(element: string) {
    const getElement = await selector.getElement(element);
    const isChecked = await getElement.isSelected();

    return expect(isChecked).to.be.true;
  }

  public async isUnchecked(element: string) {
    const getElement = await selector.getElement(element);
    const isUnchecked = await getElement.isSelected();

    return expect(isUnchecked).to.be.false;
  }

  public async shouldTitle(text: string) {
    await navigation.title(async function (result) {
      expect(result).to.equal(text);
    });
  }
}
