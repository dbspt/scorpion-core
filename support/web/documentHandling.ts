import { Driver } from "../driver";

const driver = Driver.getInstance();

export class DocumentHandling {
  public static getInstance() {
    if (!DocumentHandling.instance) {
      DocumentHandling.instance = new DocumentHandling();
    }

    return DocumentHandling.instance;
  }

  private static instance: DocumentHandling;

  public constructor() {}

  public async source(callback?: (...args: any[]) => void) {
    return await driver.session.getPageSource().then(callback);
  }
}